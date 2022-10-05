import React from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import {
  FormProvider,
  useFieldArray,
  useForm,
  useFormContext
} from "react-hook-form";

type MoviesType = {
  movie: {
    title: string;
    description: string;
    id: string;
  };
  position: number;
  moveCard: (from: number, to: number) => void;
};

const Items = ({ movie, position, moveCard }: MoviesType) => {
  // FormProviderによってここで受け取りが簡単に
  const methods = useFormContext();

  //useDropとuseDragを使用し、dropとdragを得る。
  //最低限並び替えできるのが以下の実装
  const [, drop] = useDrop({
    accept: "CARD",

    hover: (item: Record<string, any>) => {
      const dragIndex = item.index; //drag中のインデックス
      const hoverIndex = position; //hover対象のインデックス

      if (dragIndex === hoverIndex) {
        return;
      }
      moveCard(dragIndex, hoverIndex);
      item.index = hoverIndex;
    }
  });

  const [{ isDragging }, drag, preview] = useDrag(
    () => ({
      type: "CARD",
      item: { index: position, id: movie.id },
      collect: (monitor) => {
        return {
          isDragging: monitor.isDragging()
        };
      }
    }),
    [position]
  );

  return (
    <div
      //dropとpreviewを結びつけることでpreview対象に
      // previewだとdragはできない
      ref={(node) => preview(drop(node))}
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        cursor: "pointer",
        display: "flex"
      }}
    >
      <input {...methods.register(`items[${position}].title`)} />
      <input {...methods.register(`items[${position}].description`)} />
      {/*
          //dropとdragを結びつけることでdrag対象に
        */}
      <button ref={(node) => drag(drop(node))}>XX</button>
    </div>
  );
};

export default () => {
  // formの定義
  const methods = useForm({
    defaultValues: {
      test: "test",
      items: [
        { id: "1xx", title: "Movie barato", description: "Lorem ipsum 1" },
        { id: "2bb", title: "Movie médio", description: "Lorem ipsum 2" },
        { id: "3ee", title: "Movie caro", description: "Lorem ipsum 3" }
      ]
    }
  });

  // 配列部分の管理宣言
  // controlが上記formであることを紐付けてる
  const { fields, move } = useFieldArray({
    control: methods.control,
    name: "items"
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    // FormProviderによって子コンポーネントにmethodsを渡しやすくしてる
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {/*  registerでinputと紐付け */}
        <input {...methods.register("test")} />
        <hr />
        {/*
          並び替え対象部分をDndProviderにする
          タッチデバイスでないときはHTML5Backendを指定
          @see https://qiita.com/hiyamamoto/items/d83cf4ccfcfa886a0ba8
        */}
        <DndProvider backend={HTML5Backend}>
          {fields.map((field, index) => (
            <Items
              key={field.id}
              movie={field}
              position={index}
              moveCard={move}
            />
          ))}
        </DndProvider>
        <button type="submit">PUSH</button>
      </form>
    </FormProvider>
  );
};

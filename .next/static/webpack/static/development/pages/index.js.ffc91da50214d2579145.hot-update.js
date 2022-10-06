webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dnd */ "./node_modules/react-dnd/dist/cjs/index.js");
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dnd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dnd-html5-backend */ "./node_modules/react-dnd-html5-backend/dist/cjs/index.js");
/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs");


var _jsxFileName = "/project/react-dnd_and_react-hook-form/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var Items = function Items(_ref) {
  var movie = _ref.movie,
      position = _ref.position,
      moveCard = _ref.moveCard;
  // FormProviderによってここで受け取りが簡単に
  var methods = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_5__["useFormContext"])(); //useDropとuseDragを使用し、dropとdragを得る。
  //最低限並び替えできるのが以下の実装

  var _useDrop = Object(react_dnd__WEBPACK_IMPORTED_MODULE_3__["useDrop"])({
    accept: "CARD",
    //useDragのitemフィールドで指定した項目が参照できる
    hover: function hover(item) {
      var dragIndex = item.index; //drag中のインデックス

      var hoverIndex = position; //hover対象のインデックス

      if (dragIndex === hoverIndex) {
        return;
      }

      moveCard(dragIndex, hoverIndex);
      item.index = hoverIndex;
    }
  }),
      _useDrop2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useDrop, 2),
      drop = _useDrop2[1];

  var _useDrag = Object(react_dnd__WEBPACK_IMPORTED_MODULE_3__["useDrag"])(function () {
    return {
      type: "CARD",
      item: {
        index: position,
        id: movie.id,
        type: "CARD"
      },
      collect: function collect(monitor) {
        return {
          isDragging: monitor.isDragging()
        };
      }
    };
  }, [position]),
      _useDrag2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useDrag, 3),
      isDragging = _useDrag2[0].isDragging,
      drag = _useDrag2[1],
      preview = _useDrag2[2];

  return __jsx("div", {
    //dropとpreviewを結びつけることでpreview対象に
    // previewだとdragはできない
    ref: function ref(node) {
      return preview(drop(node));
    },
    style: {
      opacity: isDragging ? 0.5 : 1,
      fontSize: 25,
      cursor: "pointer",
      display: "flex"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx("input", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, methods.register("items[".concat(position, "].title")), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  })), __jsx("input", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, methods.register("items[".concat(position, "].description")), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  })), __jsx("button", {
    ref: function ref(node) {
      return drag(drop(node));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "XX"));
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  // formの定義
  var methods = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_5__["useForm"])({
    defaultValues: {
      test: "test",
      items: [{
        id: "1xx",
        title: "Movie barato",
        description: "Lorem ipsum 1"
      }, {
        id: "2bb",
        title: "Movie médio",
        description: "Lorem ipsum 2"
      }, {
        id: "3ee",
        title: "Movie caro",
        description: "Lorem ipsum 3"
      }]
    }
  }); // 配列部分の管理宣言
  // controlが上記formであることを紐付けてる

  var _useFieldArray = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_5__["useFieldArray"])({
    control: methods.control,
    name: "items"
  }),
      fields = _useFieldArray.fields,
      move = _useFieldArray.move;

  var onSubmit = function onSubmit(data) {
    return console.log(data);
  };

  return (// FormProviderによって子コンポーネントにmethodsを渡しやすくしてる
    __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_5__["FormProvider"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, methods, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }), __jsx("form", {
      onSubmit: methods.handleSubmit(onSubmit),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, __jsx("input", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, methods.register("test"), {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    })), __jsx("hr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }), __jsx(react_dnd__WEBPACK_IMPORTED_MODULE_3__["DndProvider"], {
      backend: react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_4__["HTML5Backend"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }, fields.map(function (field, index) {
      return __jsx(Items, {
        key: field.id,
        movie: field,
        position: index,
        moveCard: move,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      });
    })), __jsx("button", {
      type: "submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, "PUSH")))
  );
});

/***/ })

})
//# sourceMappingURL=index.js.ffc91da50214d2579145.hot-update.js.map
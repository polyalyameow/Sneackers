"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Thumbnails = exports.imageThumbFour = exports.imageThumbThree = exports.imageThumbTwo = exports.imageThumbOne = exports.imageOne = exports.ProductContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _imageProduct = _interopRequireDefault(require("../../images/image-product-1.jpg"));

var _imageProduct1Thumbnail = _interopRequireDefault(require("../../images/image-product-1-thumbnail.jpg"));

var _imageProduct2Thumbnail = _interopRequireDefault(require("../../images/image-product-2-thumbnail.jpg"));

var _imageProduct3Thumbnail = _interopRequireDefault(require("../../images/image-product-3-thumbnail.jpg"));

var _imageProduct4Thumbnail = _interopRequireDefault(require("../../images/image-product-4-thumbnail.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  grid-area: pic4Thumbnail;\n  width: 88px;\n  height: 88px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  grid-area: pic3Thumbnail;\n  width: 88px;\n  height: 88px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  grid-area: pic2Thumbnail;\n  width: 88px;\n  height: 88px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  grid-area: pic1Thumbnail;\n  width: 88px;\n  height: 88px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  grid-area: pic1;\n  width: 445px;\n  height: 445px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    border: 2px solid red; \n    display: grid;\n    grid-template-areas: \n    \"pic1 pic1 pic1 pic1\"\n    \"pic1Thumbnail pic2Thumbnail pic3Thumbnail pic4Thumbnail\";\n    grid-template-rows: 10fr 1fr;\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n    width: 445px;\n    height: 700px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ProductContainer = _styledComponents["default"].div(_templateObject());

exports.ProductContainer = ProductContainer;

var imageOne = _styledComponents["default"].img.attrs({
  src: "".concat(_imageProduct["default"])
})(_templateObject2()); // export const imageTwo = styled.img.attrs({
//     src: `${pic2}`
//   })`
//     width: 445px;
//     height: 445px;
// `
// export const imageThree = styled.img.attrs({
//     src: `${pic3}`
//   })`
//     width: 445px;
//     height: 445px;
// `
// export const imageFour = styled.img.attrs({
//     src: `${pic4}`
//   })`
// `


exports.imageOne = imageOne;

var imageThumbOne = _styledComponents["default"].img.attrs({
  src: "".concat(_imageProduct1Thumbnail["default"])
})(_templateObject3());

exports.imageThumbOne = imageThumbOne;

var imageThumbTwo = _styledComponents["default"].img.attrs({
  src: "".concat(_imageProduct2Thumbnail["default"])
})(_templateObject4());

exports.imageThumbTwo = imageThumbTwo;

var imageThumbThree = _styledComponents["default"].img.attrs({
  src: "".concat(_imageProduct3Thumbnail["default"])
})(_templateObject5());

exports.imageThumbThree = imageThumbThree;

var imageThumbFour = _styledComponents["default"].img.attrs({
  src: "".concat(_imageProduct4Thumbnail["default"])
})(_templateObject6());

exports.imageThumbFour = imageThumbFour;

var Thumbnails = _styledComponents["default"].div(_templateObject7());

exports.Thumbnails = Thumbnails;
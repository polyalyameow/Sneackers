"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavAvatar = exports.NavBasket = exports.NavbarInfo = exports.NavLink = exports.NavMenu = exports.NavbarContainer = exports.Nav = exports.MobileIcon = exports.NavSvgIcon = exports.NavLogo = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _logo = require(".././../images/logo.svg");

var _imageAvatar = _interopRequireDefault(require("../../images/image-avatar.jpg"));

var _iconCart = require("../../images/icon-cart.svg");

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n    height: 50px;  \n    width: 50px;\n    transition: all 0.1s ease-in-out;\n\n    &:hover{\n        transition: all 0.1s ease-in-out;\n        border: 2px solid #FF7E1B;\n        border-radius: 50%;\n    }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    height: 20px;  \n    width: 21.82px;\n    transition: all 0.2s ease-in-out;\n\n    &:hover{\n        stroke: black;\n        stroke-width: 0.5;\n        height: 22px; \n        transition: all 0.2s ease-in-out;\n    }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    width: 100px;\n    justify-content: space-between;\n    /* border: 2px solid salmon; */\n    \n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n   \n    text-decoration: none;\n    cursor: pointer;\n    font-family: 'Kumbh Sans', sans-serif;;\n    font-size: 15px;\n    line-height: 26px;\n    color: #69707D;\n    transition: all 0.2s ease-in-out;\n    /* border: 1px solid fuchsia; */\n    align-self: center;\n    padding-right: 33px;\n    \n   \n    \n\n    &:hover{\n        transition: all 0.2s ease-in-out;\n        text-decoration: underline #FF7E1B;\n        text-decoration-thickness: 3px;\n        text-underline-offset: 41px;\n        color: black;\n        \n    }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: row;\n    list-style: none;\n    /* border: 2px solid yellowgreen; */\n    \n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    max-width: 620px;\n    max-height: 50px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    /* border: 2px solid firebrick; */\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    width: 1110px;\n    height: 50px;   \n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    border: 2px solid yellow;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    display: none;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    height: 20px;  \n    width: 137.5px;\n    /* border: 2px solid rosybrown; */\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    cursor: pointer;\n    /* border: 2px solid red; */\n    height: 20px;  \n    width: 137.5px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var NavLogo = (0, _styledComponents["default"])(_reactRouterDom.Link)(_templateObject());
exports.NavLogo = NavLogo;
var NavSvgIcon = (0, _styledComponents["default"])(_logo.ReactComponent)(_templateObject2());
exports.NavSvgIcon = NavSvgIcon;

var MobileIcon = _styledComponents["default"].div(_templateObject3());

exports.MobileIcon = MobileIcon;

var Nav = _styledComponents["default"].nav(_templateObject4());

exports.Nav = Nav;

var NavbarContainer = _styledComponents["default"].div(_templateObject5());

exports.NavbarContainer = NavbarContainer;

var NavMenu = _styledComponents["default"].ul(_templateObject6());

exports.NavMenu = NavMenu;
var NavLink = (0, _styledComponents["default"])(_reactRouterDom.Link)(_templateObject7());
exports.NavLink = NavLink;

var NavbarInfo = _styledComponents["default"].div(_templateObject8());

exports.NavbarInfo = NavbarInfo;
var NavBasket = (0, _styledComponents["default"])(_iconCart.ReactComponent)(_templateObject9());
exports.NavBasket = NavBasket;

var NavAvatar = _styledComponents["default"].img.attrs({
  src: "".concat(_imageAvatar["default"])
})(_templateObject10());

exports.NavAvatar = NavAvatar;
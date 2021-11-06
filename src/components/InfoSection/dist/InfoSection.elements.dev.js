"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Subtitle = exports.Heading = exports.Img = exports.TopLine = exports.ImgWrapper = exports.TextWrapper = exports.InfoColumn = exports.InfoRow = exports.InfoSec = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  max-width: 440px;\n  margin-bottom: 35px;\n  font-size: 18px;\n  line-height: 24px;\n  color: ", ";\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  margin-bottom: 24px;\n  font-size: 48px;\n  line-height: 1.1;\n  font-weight: 600;\n  color: ", ";\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  padding-right: 0;\n  border: 0;\n  max-width: 100%;\n  vertical-align: middle;\n  display: inline-block;\n  max-height: 500px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 18px;\n  line-height: 16px;\n  font-weight: 700;\n  letter-spacing: 1.4px;\n  margin-bottom: 16px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  max-width: 555px;\n  display: flex;\n  justify-content: ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  max-width: 540px;\n  padding-top: 0;\n  padding-bottom: 60px;\n\n  @media screen and (max-width: 768px) {\n    padding-bottom: 65px;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  margin-bottom: 15px;\n  padding-right: 15px;\n  padding-left: 15px;\n  flex: 1;\n  max-width: 50%;\n  flex-basis: 50%;\n\n  @media screen and (max-width: 768px) {\n    max-width: 100%;\n    flex-basis: 100%;\n    display: flex;\n    justify-content: center;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  margin: 0 -15px -15px -15px;\n  flex-wrap: wrap;\n  align-items: center;\n  flex-direction: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: #fff;\n  padding: 70px 0;\n  background: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// import bg from '../bg.jpg'
// export const InfoSee = styled.div`
//   color: #fff;
//   padding: 160px 0;
//   background: url(${bg});;
// `;
var InfoSec = _styledComponents["default"].div(_templateObject(), function (_ref) {
  var lightBg = _ref.lightBg;
  return lightBg ? "#fff" : "#000";
});

exports.InfoSec = InfoSec;

var InfoRow = _styledComponents["default"].div(_templateObject2(), function (_ref2) {
  var imgStart = _ref2.imgStart;
  return imgStart ? "row-reverse" : "row";
});

exports.InfoRow = InfoRow;

var InfoColumn = _styledComponents["default"].div(_templateObject3());

exports.InfoColumn = InfoColumn;

var TextWrapper = _styledComponents["default"].div(_templateObject4());

exports.TextWrapper = TextWrapper;

var ImgWrapper = _styledComponents["default"].div(_templateObject5(), function (_ref3) {
  var start = _ref3.start;
  return start ? "flex-start" : "flex-end";
});

exports.ImgWrapper = ImgWrapper;

var TopLine = _styledComponents["default"].div(_templateObject6(), function (_ref4) {
  var lightTopLine = _ref4.lightTopLine;
  return lightTopLine ? "#a9b3c1" : "#4B59F7";
});

exports.TopLine = TopLine;

var Img = _styledComponents["default"].img(_templateObject7());

exports.Img = Img;

var Heading = _styledComponents["default"].h1(_templateObject8(), function (_ref5) {
  var lightText = _ref5.lightText;
  return lightText ? "#f7f8fa" : "#1c2237";
});

exports.Heading = Heading;

var Subtitle = _styledComponents["default"].p(_templateObject9(), function (_ref6) {
  var lightTextDesc = _ref6.lightTextDesc;
  return lightTextDesc ? "#a9b3c1" : "#1c2237";
});

exports.Subtitle = Subtitle;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PricingCardFeature = exports.PricingCardFeatures = exports.PricingCardLength = exports.PricingCardCost = exports.PricingCardPlan = exports.PricingCardIcon = exports.PricingCardInfo = exports.PricingCard = exports.PricingContainer = exports.PricingHeading = exports.PricingWrapper = exports.PricingSection = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  margin-bottom: 10px;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  margin: 16px 0 32px;\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: #a9b3c1;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  color: #484848;\n  font-size: 14px;\n  margin-bottom: 24px;\n  text-align: center;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  font-size: 40px;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  color: #000;\n  margin-bottom: 5px;\n  font-size: 19px;\n  text-align: center;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  margin: 14px 0;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  height: 200px;\n  padding: 24px;\n  align-items: center;\n  color: #fff;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  background: #fff;\n  width: 200px;\n  height: 250px;\n  text-decoration: none;\n  border-radius: 30px;\n  margin: 20px;\n\n  &:nth-child(2) {\n    margin: 24px;\n  }\n\n  &:hover {\n    transform: scale(1.06);\n    transition: all 0.3s ease-out;\n    color: #1c2237;\n  }\n\n  @media screen and (max-width: 960px) {\n    width: 90%;\n\n    &:hover {\n      transform: none;\n    }\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  @media screen and (max-width: 960px) {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  color: #000;\n  font-size: 48px;\n  margin-bottom: 24px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 0 auto;\n\n  @media screen and (max-width: 960px) {\n    margin: 0 30px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: 100px 0 160px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PricingSection = _styledComponents["default"].div(_templateObject());

exports.PricingSection = PricingSection;

var PricingWrapper = _styledComponents["default"].div(_templateObject2());

exports.PricingWrapper = PricingWrapper;

var PricingHeading = _styledComponents["default"].h1(_templateObject3());

exports.PricingHeading = PricingHeading;

var PricingContainer = _styledComponents["default"].div(_templateObject4());

exports.PricingContainer = PricingContainer;

var PricingCard = _styledComponents["default"].div(_templateObject5());

exports.PricingCard = PricingCard;

var PricingCardInfo = _styledComponents["default"].div(_templateObject6());

exports.PricingCardInfo = PricingCardInfo;

var PricingCardIcon = _styledComponents["default"].div(_templateObject7());

exports.PricingCardIcon = PricingCardIcon;

var PricingCardPlan = _styledComponents["default"].h3(_templateObject8());

exports.PricingCardPlan = PricingCardPlan;

var PricingCardCost = _styledComponents["default"].h4(_templateObject9());

exports.PricingCardCost = PricingCardCost;

var PricingCardLength = _styledComponents["default"].p(_templateObject10());

exports.PricingCardLength = PricingCardLength;

var PricingCardFeatures = _styledComponents["default"].ul(_templateObject11());

exports.PricingCardFeatures = PricingCardFeatures;

var PricingCardFeature = _styledComponents["default"].li(_templateObject12());

exports.PricingCardFeature = PricingCardFeature;
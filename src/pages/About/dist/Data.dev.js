"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.aboutData = void 0;

var _Sh = _interopRequireDefault(require("../../images/Sh.jpg"));

var _Mahdi = _interopRequireDefault(require("../../images/Mahdi.jpg"));

var _Ilnar = _interopRequireDefault(require("../../images/Ilnar.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import about1 from '../../images/Mahdi.jpg';
// import about2 from '../../images/about-2.jpg';
// import about3 from '../../images/about-3.jpg';  
var aboutData = [{
  img: _Mahdi["default"],
  alt: 'TeamPhoto',
  name: 'Mahdi Samadov',
  desc: 'Captain of the Eclipse team, aerospace engineer, PR manager'
}, {
  img: _Ilnar["default"],
  alt: 'TeamPhoto',
  name: 'Ilnar Khairullin',
  desc: 'IT programmer, aerospace engineer'
}, {
  img: _Sh["default"],
  alt: 'TeamPhoto',
  name: 'Shohrukh Aminjanov ',
  desc: 'Web-developer'
}];
exports.aboutData = aboutData;
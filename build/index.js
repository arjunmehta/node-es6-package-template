'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _moduleA = require('./lib/module-a');

Object.defineProperty(exports, 'moduleA', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_moduleA).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
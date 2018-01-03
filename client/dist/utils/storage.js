'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var store = {
    setStorage: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(obj) {
            var o;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            for (o in obj) {
                                _wepy2.default.setStorage({
                                    key: o,
                                    data: obj[o]
                                });
                            }

                        case 1:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function setStorage(_x) {
            return _ref.apply(this, arguments);
        }

        return setStorage;
    }()
};
exports.default = store;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JhZ2UuanMiXSwibmFtZXMiOlsic3RvcmUiLCJzZXRTdG9yYWdlIiwib2JqIiwibyIsImtleSIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7OztBQUVBLElBQU1BLFFBQVE7QUFDSkMsY0FESTtBQUFBLDRGQUNPQyxHQURQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVQLGlDQUFRQyxDQUFSLElBQWFELEdBQWIsRUFBaUI7QUFDYiwrQ0FBS0QsVUFBTCxDQUFnQjtBQUNaRyx5Q0FBS0QsQ0FETztBQUVaRSwwQ0FBTUgsSUFBSUMsQ0FBSjtBQUZNLGlDQUFoQjtBQUlIOztBQVBNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsQ0FBZDtrQkFVZ0JILEsiLCJmaWxlIjoic3RvcmFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcblxyXG5jb25zdCBzdG9yZSA9IHtcclxuICAgIGFzeW5jIHNldFN0b3JhZ2Uob2JqKXtcclxuICAgICAgIGZvcihsZXQgbyBpbiBvYmope1xyXG4gICAgICAgICAgIHdlcHkuc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgIGtleTogbyxcclxuICAgICAgICAgICAgICAgZGF0YTogb2JqW29dXHJcbiAgICAgICAgICAgfSlcclxuICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCAgc3RvcmVcclxuIl19
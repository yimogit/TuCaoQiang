'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _config = require('./../config.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var interfaces = {
    getList: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(isPull, startTime) {
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            return _context.abrupt('return', new Promise(function (resolve, reject) {
                                wx.request({
                                    url: _config.apiHost + '/tucao/list?isPull=' + isPull + '&startTime=' + startTime,
                                    method: 'GET',
                                    success: function success(res) {
                                        resolve(res.data);
                                    },
                                    fail: function fail(res) {
                                        reject(res);
                                    }
                                });
                            }));

                        case 1:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function getList(_x, _x2) {
            return _ref.apply(this, arguments);
        }

        return getList;
    }(),
    create: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(userId, nickName, avatarUrl, content) {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            return _context2.abrupt('return', new Promise(function (resolve, reject) {
                                wx.request({
                                    url: _config.apiHost + '/tucao/create',
                                    method: 'POST',
                                    data: { UserId: userId, NickName: nickName, Content: content, AvatarUrl: avatarUrl },
                                    success: function success(res) {
                                        resolve(res.data);
                                    },
                                    fail: function fail(res) {
                                        reject(res);
                                    }
                                });
                            }));

                        case 1:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        function create(_x3, _x4, _x5, _x6) {
            return _ref2.apply(this, arguments);
        }

        return create;
    }()
};

exports.default = interfaces;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR1Y2FvLmpzIl0sIm5hbWVzIjpbImludGVyZmFjZXMiLCJnZXRMaXN0IiwiaXNQdWxsIiwic3RhcnRUaW1lIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ3eCIsInJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJzdWNjZXNzIiwicmVzIiwiZGF0YSIsImZhaWwiLCJjcmVhdGUiLCJ1c2VySWQiLCJuaWNrTmFtZSIsImF2YXRhclVybCIsImNvbnRlbnQiLCJVc2VySWQiLCJOaWNrTmFtZSIsIkNvbnRlbnQiLCJBdmF0YXJVcmwiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLGFBQWE7QUFDVEMsV0FEUztBQUFBLDRGQUNEQyxNQURDLEVBQ09DLFNBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZEQUVKLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcENDLG1DQUFHQyxPQUFILENBQVc7QUFDUEMseUNBQUssa0JBQVUscUJBQVYsR0FBa0NQLE1BQWxDLEdBQTJDLGFBQTNDLEdBQTJEQyxTQUR6RDtBQUVQTyw0Q0FBUSxLQUZEO0FBR1BDLDZDQUFTLGlCQUFVQyxHQUFWLEVBQWU7QUFDcEJQLGdEQUFRTyxJQUFJQyxJQUFaO0FBQ0gscUNBTE07QUFNUEMsMENBQU0sY0FBVUYsR0FBVixFQUFlO0FBQ2pCTiwrQ0FBT00sR0FBUDtBQUNIO0FBUk0saUNBQVg7QUFVSCw2QkFYTSxDQUZJOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBZVRHLFVBZlM7QUFBQSw4RkFlRkMsTUFmRSxFQWVNQyxRQWZOLEVBZWdCQyxTQWZoQixFQWUyQkMsT0FmM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhEQWdCSixJQUFJZixPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3BDQyxtQ0FBR0MsT0FBSCxDQUFXO0FBQ1BDLHlDQUFLLGtCQUFVLGVBRFI7QUFFUEMsNENBQVEsTUFGRDtBQUdQRywwQ0FBTSxFQUFFTyxRQUFRSixNQUFWLEVBQWtCSyxVQUFVSixRQUE1QixFQUFzQ0ssU0FBU0gsT0FBL0MsRUFBd0RJLFdBQVdMLFNBQW5FLEVBSEM7QUFJUFAsNkNBQVMsaUJBQVVDLEdBQVYsRUFBZTtBQUNwQlAsZ0RBQVFPLElBQUlDLElBQVo7QUFDSCxxQ0FOTTtBQU9QQywwQ0FBTSxjQUFVRixHQUFWLEVBQWU7QUFDakJOLCtDQUFPTSxHQUFQO0FBQ0g7QUFUTSxpQ0FBWDtBQVdILDZCQVpNLENBaEJJOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsQ0FBbkI7O2tCQWdDZVosVSIsImZpbGUiOiJ0dWNhby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCB7IGFwaUhvc3QgfSBmcm9tICcuLi9jb25maWcnXHJcblxyXG5jb25zdCBpbnRlcmZhY2VzID0ge1xyXG4gICAgYXN5bmMgZ2V0TGlzdChpc1B1bGwsIHN0YXJ0VGltZSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiBhcGlIb3N0ICsgJy90dWNhby9saXN0P2lzUHVsbD0nICsgaXNQdWxsICsgJyZzdGFydFRpbWU9JyArIHN0YXJ0VGltZSxcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChyZXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGFzeW5jIGNyZWF0ZSh1c2VySWQsIG5pY2tOYW1lLCBhdmF0YXJVcmwsIGNvbnRlbnQpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgIHVybDogYXBpSG9zdCArICcvdHVjYW8vY3JlYXRlJyxcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogeyBVc2VySWQ6IHVzZXJJZCwgTmlja05hbWU6IG5pY2tOYW1lLCBDb250ZW50OiBjb250ZW50LCBBdmF0YXJVcmw6IGF2YXRhclVybCB9LFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QocmVzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW50ZXJmYWNlcyJdfQ==
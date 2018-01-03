'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _config = require('./../config.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var USER_INFO_KEY = 'USER_INFO_KEY';
var interfaces = {
    getFullInfo: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(cb) {
            var self;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            self = this;

                            wx.getStorage({
                                key: USER_INFO_KEY,
                                success: function success(res) {
                                    cb && cb(res.data);
                                },
                                fail: function fail() {
                                    self.login(cb);
                                }
                            });

                        case 2:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function getFullInfo(_x) {
            return _ref.apply(this, arguments);
        }

        return getFullInfo;
    }(),
    getUserInfo: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(cb) {
            var loginData, userInfo;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return _wepy2.default.login();

                        case 2:
                            loginData = _context2.sent;
                            _context2.next = 5;
                            return _wepy2.default.getUserInfo();

                        case 5:
                            userInfo = _context2.sent;

                            userInfo.code = loginData.code;
                            return _context2.abrupt('return', userInfo);

                        case 8:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        function getUserInfo(_x2) {
            return _ref2.apply(this, arguments);
        }

        return getUserInfo;
    }(),
    login: function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(cb) {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            wx.login({
                                success: function success(loginData) {
                                    wx.request({
                                        url: _config.apiHost + '/auth/login?code=' + loginData.code,
                                        method: 'GET',
                                        success: function success(res) {
                                            wx.getUserInfo({
                                                success: function success(resUser) {
                                                    var user = resUser.userInfo;
                                                    user.token = res.data.token;
                                                    wx.setStorage({
                                                        key: USER_INFO_KEY,
                                                        data: user
                                                    });
                                                    cb && cb(user);
                                                },
                                                fail: function fail() {
                                                    cb(null);
                                                }
                                            });
                                        },
                                        fail: function fail() {
                                            cb(null);
                                        }
                                    });
                                },
                                fail: function fail() {
                                    cb(null);
                                }
                            });

                        case 1:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        function login(_x3) {
            return _ref3.apply(this, arguments);
        }

        return login;
    }()
};

exports.default = interfaces;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbIlVTRVJfSU5GT19LRVkiLCJpbnRlcmZhY2VzIiwiZ2V0RnVsbEluZm8iLCJjYiIsInNlbGYiLCJ3eCIsImdldFN0b3JhZ2UiLCJrZXkiLCJzdWNjZXNzIiwicmVzIiwiZGF0YSIsImZhaWwiLCJsb2dpbiIsImdldFVzZXJJbmZvIiwibG9naW5EYXRhIiwidXNlckluZm8iLCJjb2RlIiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsInJlc1VzZXIiLCJ1c2VyIiwidG9rZW4iLCJzZXRTdG9yYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxnQkFBZ0IsZUFBdEI7QUFDQSxJQUFNQyxhQUFhO0FBQ1RDLGVBRFM7QUFBQSw0RkFDR0MsRUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFUEMsZ0NBRk8sR0FFQSxJQUZBOztBQUdYQywrQkFBR0MsVUFBSCxDQUFjO0FBQ1ZDLHFDQUFLUCxhQURLO0FBRVZRLHlDQUFTLGlCQUFVQyxHQUFWLEVBQWU7QUFDcEJOLDBDQUFNQSxHQUFHTSxJQUFJQyxJQUFQLENBQU47QUFDSCxpQ0FKUztBQUtWQyxzQ0FBTSxnQkFBWTtBQUNkUCx5Q0FBS1EsS0FBTCxDQUFXVCxFQUFYO0FBQ0g7QUFQUyw2QkFBZDs7QUFIVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQWFUVSxlQWJTO0FBQUEsOEZBYUdWLEVBYkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FjYSxlQUFLUyxLQUFMLEVBZGI7O0FBQUE7QUFjTEUscUNBZEs7QUFBQTtBQUFBLG1DQWVZLGVBQUtELFdBQUwsRUFmWjs7QUFBQTtBQWVMRSxvQ0FmSzs7QUFnQlhBLHFDQUFTQyxJQUFULEdBQWdCRixVQUFVRSxJQUExQjtBQWhCVyw4REFpQkpELFFBakJJOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBbUJUSCxTQW5CUztBQUFBLDhGQW1CSFQsRUFuQkc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW9CWEUsK0JBQUdPLEtBQUgsQ0FBUztBQUNMSix5Q0FBUyxpQkFBVU0sU0FBVixFQUFxQjtBQUMxQlQsdUNBQUdZLE9BQUgsQ0FBVztBQUNQQyw2Q0FBSyxrQkFBVSxtQkFBVixHQUFnQ0osVUFBVUUsSUFEeEM7QUFFUEcsZ0RBQVEsS0FGRDtBQUdQWCxpREFBUyxpQkFBVUMsR0FBVixFQUFlO0FBQ3BCSiwrQ0FBR1EsV0FBSCxDQUFlO0FBQ1hMLHlEQUFTLGlCQUFVWSxPQUFWLEVBQW1CO0FBQ3hCLHdEQUFJQyxPQUFPRCxRQUFRTCxRQUFuQjtBQUNBTSx5REFBS0MsS0FBTCxHQUFhYixJQUFJQyxJQUFKLENBQVNZLEtBQXRCO0FBQ0FqQix1REFBR2tCLFVBQUgsQ0FBYztBQUNWaEIsNkRBQUtQLGFBREs7QUFFVlUsOERBQU1XO0FBRkkscURBQWQ7QUFJQWxCLDBEQUFNQSxHQUFHa0IsSUFBSCxDQUFOO0FBQ0gsaURBVFU7QUFVWFYsc0RBQU0sZ0JBQVk7QUFDZFIsdURBQUcsSUFBSDtBQUNIO0FBWlUsNkNBQWY7QUFjSCx5Q0FsQk07QUFtQlBRLDhDQUFNLGdCQUFZO0FBQ2RSLCtDQUFHLElBQUg7QUFDSDtBQXJCTSxxQ0FBWDtBQXVCSCxpQ0F6Qkk7QUEwQkxRLHNDQUFNLGdCQUFZO0FBQ2RSLHVDQUFHLElBQUg7QUFDSDtBQTVCSSw2QkFBVDs7QUFwQlc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxDQUFuQjs7a0JBcURlRixVIiwiZmlsZSI6ImxvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0IHsgYXBpSG9zdCB9IGZyb20gJy4uL2NvbmZpZydcclxuXHJcbmNvbnN0IFVTRVJfSU5GT19LRVkgPSAnVVNFUl9JTkZPX0tFWSdcclxuY29uc3QgaW50ZXJmYWNlcyA9IHtcclxuICAgIGFzeW5jIGdldEZ1bGxJbmZvKGNiKSB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICBrZXk6IFVTRVJfSU5GT19LRVksXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgIGNiICYmIGNiKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5sb2dpbihjYik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSxcclxuICAgIGFzeW5jIGdldFVzZXJJbmZvKGNiKSB7XHJcbiAgICAgICAgY29uc3QgbG9naW5EYXRhID0gYXdhaXQgd2VweS5sb2dpbigpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJJbmZvID0gYXdhaXQgd2VweS5nZXRVc2VySW5mbygpO1xyXG4gICAgICAgIHVzZXJJbmZvLmNvZGUgPSBsb2dpbkRhdGEuY29kZTtcclxuICAgICAgICByZXR1cm4gdXNlckluZm87XHJcbiAgICB9LFxyXG4gICAgYXN5bmMgbG9naW4oY2IpIHtcclxuICAgICAgICB3eC5sb2dpbih7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChsb2dpbkRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogYXBpSG9zdCArICcvYXV0aC9sb2dpbj9jb2RlPScgKyBsb2dpbkRhdGEuY29kZSxcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3guZ2V0VXNlckluZm8oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc1VzZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdXNlciA9IHJlc1VzZXIudXNlckluZm9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyLnRva2VuID0gcmVzLmRhdGEudG9rZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogVVNFUl9JTkZPX0tFWSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogdXNlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2IgJiYgY2IodXNlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNiKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYihudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBjYihudWxsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGludGVyZmFjZXMiXX0=
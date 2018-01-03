'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _login = require('./../api/login.js');

var _login2 = _interopRequireDefault(_login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var login = function (_wepy$mixin) {
    _inherits(login, _wepy$mixin);

    function login() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, login);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = login.__proto__ || Object.getPrototypeOf(login)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
            loginUser: null
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(login, [{
        key: 'onLoad',
        value: function onLoad() {
            var self = this;
            var _user_key = 'userInfo';
            wx.getStorage({
                key: _user_key,
                success: function success(res) {
                    self.loginUser = res.data;
                    self.$apply();
                },
                fail: function fail() {
                    _login2.default.login(function (user) {
                        wx.setStorage({
                            key: _user_key,
                            data: user
                        });
                        console.log(user);
                        self.loginUser = user;
                        self.$apply();
                    });
                }
            });
        }
    }]);

    return login;
}(_wepy2.default.mixin);

exports.default = login;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbImxvZ2luIiwiZGF0YSIsImxvZ2luVXNlciIsInNlbGYiLCJfdXNlcl9rZXkiLCJ3eCIsImdldFN0b3JhZ2UiLCJrZXkiLCJzdWNjZXNzIiwicmVzIiwiJGFwcGx5IiwiZmFpbCIsInVzZXIiLCJzZXRTdG9yYWdlIiwiY29uc29sZSIsImxvZyIsIm1peGluIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUNqQkMsSSxHQUFPO0FBQ0hDLHVCQUFXO0FBRFIsUzs7Ozs7aUNBR0U7QUFDTCxnQkFBSUMsT0FBTyxJQUFYO0FBQ0EsZ0JBQUlDLFlBQVksVUFBaEI7QUFDQUMsZUFBR0MsVUFBSCxDQUFjO0FBQ1ZDLHFCQUFLSCxTQURLO0FBRVZJLHlCQUFTLGlCQUFVQyxHQUFWLEVBQWU7QUFDcEJOLHlCQUFLRCxTQUFMLEdBQWlCTyxJQUFJUixJQUFyQjtBQUNBRSx5QkFBS08sTUFBTDtBQUNILGlCQUxTO0FBTVZDLHNCQUFNLGdCQUFZO0FBQ2Qsb0NBQVNYLEtBQVQsQ0FBZSxVQUFVWSxJQUFWLEVBQWdCO0FBQzNCUCwyQkFBR1EsVUFBSCxDQUFjO0FBQ1ZOLGlDQUFLSCxTQURLO0FBRVZILGtDQUFNVztBQUZJLHlCQUFkO0FBSUFFLGdDQUFRQyxHQUFSLENBQVlILElBQVo7QUFDQVQsNkJBQUtELFNBQUwsR0FBaUJVLElBQWpCO0FBQ0FULDZCQUFLTyxNQUFMO0FBQ0gscUJBUkQ7QUFTSDtBQWhCUyxhQUFkO0FBa0JIOzs7O0VBekI4QixlQUFLTSxLOztrQkFBbkJoQixLIiwiZmlsZSI6ImxvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0IGxvZ2luQXBpIGZyb20gJy4uL2FwaS9sb2dpbidcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgbG9naW4gZXh0ZW5kcyB3ZXB5Lm1peGluIHtcclxuICAgIGRhdGEgPSB7XHJcbiAgICAgICAgbG9naW5Vc2VyOiBudWxsXHJcbiAgICB9XHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGxldCBfdXNlcl9rZXkgPSAndXNlckluZm8nXHJcbiAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgIGtleTogX3VzZXJfa2V5LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmxvZ2luVXNlciA9IHJlcy5kYXRhXHJcbiAgICAgICAgICAgICAgICBzZWxmLiRhcHBseSgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBsb2dpbkFwaS5sb2dpbihmdW5jdGlvbiAodXNlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IF91c2VyX2tleSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogdXNlclxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codXNlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5sb2dpblVzZXIgPSB1c2VyXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG4iXX0=
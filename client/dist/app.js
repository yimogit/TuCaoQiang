"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _config = require('./config.js');

require('./npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ["pages/index", "pages/create"],
      window: {
        navigationBarBackgroundColor: "#54bcc7",
        navigationBarTitleText: "吐槽墙",
        navigationBarTextStyle: "#54bcc7",
        backgroundColor: "#e4f1f3"
      },
      tabBar: {
        backgroundColor: "#ffffff",
        color: "#cbcbcb",
        selectedColor: "#54bcc7",
        list: [{
          pagePath: "pages/index",
          text: "发现吐槽",
          selectedColor: "",
          iconPath: "./assets/images/tc1.png",
          selectedIconPath: "./assets/images/tc2.png"
        }, {
          pagePath: "pages/create",
          text: "吐槽一下",
          selectedColor: "",
          iconPath: "./assets/images/fb1.png",
          selectedIconPath: "./assets/images/fb2.png"
        }]
      }
    };

    _this.use("promisify");
    _this.use("requestfix");
    return _this;
  }

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhclRleHRTdHlsZSIsImJhY2tncm91bmRDb2xvciIsInRhYkJhciIsImNvbG9yIiwic2VsZWN0ZWRDb2xvciIsImxpc3QiLCJwYWdlUGF0aCIsInRleHQiLCJpY29uUGF0aCIsInNlbGVjdGVkSWNvblBhdGgiLCJ1c2UiLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDRTs7OztBQUNBOztBQUdBOzs7Ozs7Ozs7Ozs7O0FBa0NFLHNCQUFjO0FBQUE7O0FBQUE7O0FBQUEsVUFoQ2RBLE1BZ0NjLEdBaENMO0FBQ1BDLGFBQU8sQ0FDTCxhQURLLEVBRUwsY0FGSyxDQURBO0FBS1BDLGNBQVE7QUFDTkMsc0NBQThCLFNBRHhCO0FBRU5DLGdDQUF3QixLQUZsQjtBQUdOQyxnQ0FBd0IsU0FIbEI7QUFJTkMseUJBQWlCO0FBSlgsT0FMRDtBQVdQQyxjQUFRO0FBQ05ELHlCQUFpQixTQURYO0FBRU5FLGVBQU8sU0FGRDtBQUdOQyx1QkFBZSxTQUhUO0FBSU5DLGNBQU0sQ0FBQztBQUNIQyxvQkFBVSxhQURQO0FBRUhDLGdCQUFNLE1BRkg7QUFHSEgseUJBQWUsRUFIWjtBQUlISSxvQkFBVSx5QkFKUDtBQUtIQyw0QkFBa0I7QUFMZixTQUFELEVBT0o7QUFDRUgsb0JBQVUsY0FEWjtBQUVFQyxnQkFBTSxNQUZSO0FBR0VILHlCQUFlLEVBSGpCO0FBSUVJLG9CQUFVLHlCQUpaO0FBS0VDLDRCQUFrQjtBQUxwQixTQVBJO0FBSkE7QUFYRCxLQWdDSzs7QUFFWixVQUFLQyxHQUFMLENBQVMsV0FBVDtBQUNBLFVBQUtBLEdBQUwsQ0FBUyxZQUFUO0FBSFk7QUFJYjs7O0VBckMwQixlQUFLQyxHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gXCJ3ZXB5XCI7XHJcbiAgaW1wb3J0IHtcclxuICAgIGFwaUhvc3RcclxuICB9IGZyb20gJy4vY29uZmlnJ1xyXG4gIGltcG9ydCBcIndlcHktYXN5bmMtZnVuY3Rpb25cIjtcclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgcGFnZXM6IFtcclxuICAgICAgICBcInBhZ2VzL2luZGV4XCIsXHJcbiAgICAgICAgXCJwYWdlcy9jcmVhdGVcIlxyXG4gICAgICBdLFxyXG4gICAgICB3aW5kb3c6IHtcclxuICAgICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiBcIiM1NGJjYzdcIixcclxuICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiBcIuWQkOanveWimVwiLFxyXG4gICAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6IFwiIzU0YmNjN1wiLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZTRmMWYzXCJcclxuICAgICAgfSxcclxuICAgICAgdGFiQmFyOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZmZmZcIixcclxuICAgICAgICBjb2xvcjogXCIjY2JjYmNiXCIsXHJcbiAgICAgICAgc2VsZWN0ZWRDb2xvcjogXCIjNTRiY2M3XCIsXHJcbiAgICAgICAgbGlzdDogW3tcclxuICAgICAgICAgICAgcGFnZVBhdGg6IFwicGFnZXMvaW5kZXhcIixcclxuICAgICAgICAgICAgdGV4dDogXCLlj5HnjrDlkJDmp71cIixcclxuICAgICAgICAgICAgc2VsZWN0ZWRDb2xvcjogXCJcIixcclxuICAgICAgICAgICAgaWNvblBhdGg6IFwiLi9hc3NldHMvaW1hZ2VzL3RjMS5wbmdcIixcclxuICAgICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogXCIuL2Fzc2V0cy9pbWFnZXMvdGMyLnBuZ1wiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBwYWdlUGF0aDogXCJwYWdlcy9jcmVhdGVcIixcclxuICAgICAgICAgICAgdGV4dDogXCLlkJDmp73kuIDkuItcIixcclxuICAgICAgICAgICAgc2VsZWN0ZWRDb2xvcjogXCJcIixcclxuICAgICAgICAgICAgaWNvblBhdGg6IFwiLi9hc3NldHMvaW1hZ2VzL2ZiMS5wbmdcIixcclxuICAgICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogXCIuL2Fzc2V0cy9pbWFnZXMvZmIyLnBuZ1wiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgIHN1cGVyKCk7XHJcbiAgICAgIHRoaXMudXNlKFwicHJvbWlzaWZ5XCIpO1xyXG4gICAgICB0aGlzLnVzZShcInJlcXVlc3RmaXhcIik7XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=
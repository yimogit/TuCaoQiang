"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyComToast = require('./../npm/wepy-com-toast/toast.js');

var _wepyComToast2 = _interopRequireDefault(_wepyComToast);

var _loadmore = require('./../components/loadmore.js');

var _loadmore2 = _interopRequireDefault(_loadmore);

var _userline = require('./../components/userline.js');

var _userline2 = _interopRequireDefault(_userline);

var _login = require('./../api/login.js');

var _login2 = _interopRequireDefault(_login);

var _tucao = require('./../api/tucao.js');

var _tucao2 = _interopRequireDefault(_tucao);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: "吐槽墙",
      enablePullDownRefresh: true,
      onReachBottomDistance: 20
    }, _this.$repeat = {}, _this.$props = { "loadmore": { "v-bind:loadingStatus.sync": "loadingStatus" }, "userline": { "xmlns:v-bind": "", "v-bind:loginUser.sync": "loginUser" } }, _this.$events = {}, _this.components = {
      loadmore: _loadmore2.default,
      userline: _userline2.default,
      toast: _wepyComToast2.default
    }, _this.data = {
      loginUser: null,
      arr: [],
      loadingStatus: 1,
      isBottomLoad: false,
      bottomLoadText: "拼命加载中..."
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "loadData",
    value: function loadData(options, callback) {
      var self = this;
      options = options || {};
      var isShowLoading = options.showLoading;
      if (isShowLoading) self.loadingStatus = 1;
      self.loadingStatus = 0;
      var arr = self.data.arr;
      var beginTime = arr.length > 0 ? options.isPullDown ? arr[0].createTime : arr[arr.length - 1].createTime : null;
      _tucao2.default.getList(options.isPullDown, beginTime).then(function (resp) {
        if (resp.status == 0) {
          self.showMsg(resp.msg, "warn");
          return;
        }
        var newArr = resp.rows;
        if (newArr.length == 0) {
          callback && callback(true);
          self.loadingStatus = 2;
          self.$apply();
          return;
        }
        if (options.isPullDown) {
          arr = newArr.concat(arr);
        } else {
          arr = arr.concat(newArr);
        }
        self.arr = arr;
        self.$apply();
        callback && callback();
      }).catch(function (resp) {
        console.log(resp);
        self.showMsg(resp.errMsg, "warn");
      });
    }
  }, {
    key: "onLoad",
    value: function onLoad() {
      var self = this;
      _login2.default.getFullInfo(function (e) {
        self.loginUser = e;
        self.$apply();
      });
      self.loadData();
    }
  }, {
    key: "onShareAppMessage",
    value: function onShareAppMessage() {
      return {
        title: '欢迎吐槽',
        path: '/page/index'
      };
    }
  }, {
    key: "onPullDownRefresh",
    value: function onPullDownRefresh() {
      this.loadData({
        isPullDown: true
      }, function () {
        _wepy2.default.stopPullDownRefresh();
      });
    }
  }, {
    key: "onReachBottom",
    value: function onReachBottom() {
      if (this.loadingStatus != 2) {
        this.loadData({
          showLoading: true
        });
      }
    }
  }, {
    key: "showMsg",
    value: function showMsg(content) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "warn";

      this.$invoke("toast", "show", {
        title: content,
        img: "../assets/images/" + type + ".png"
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImVuYWJsZVB1bGxEb3duUmVmcmVzaCIsIm9uUmVhY2hCb3R0b21EaXN0YW5jZSIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImxvYWRtb3JlIiwidXNlcmxpbmUiLCJ0b2FzdCIsImRhdGEiLCJsb2dpblVzZXIiLCJhcnIiLCJsb2FkaW5nU3RhdHVzIiwiaXNCb3R0b21Mb2FkIiwiYm90dG9tTG9hZFRleHQiLCJvcHRpb25zIiwiY2FsbGJhY2siLCJzZWxmIiwiaXNTaG93TG9hZGluZyIsInNob3dMb2FkaW5nIiwiYmVnaW5UaW1lIiwibGVuZ3RoIiwiaXNQdWxsRG93biIsImNyZWF0ZVRpbWUiLCJnZXRMaXN0IiwidGhlbiIsInJlc3AiLCJzdGF0dXMiLCJzaG93TXNnIiwibXNnIiwibmV3QXJyIiwicm93cyIsIiRhcHBseSIsImNvbmNhdCIsImNhdGNoIiwiY29uc29sZSIsImxvZyIsImVyck1zZyIsImdldEZ1bGxJbmZvIiwiZSIsImxvYWREYXRhIiwidGl0bGUiLCJwYXRoIiwic3RvcFB1bGxEb3duUmVmcmVzaCIsImNvbnRlbnQiLCJ0eXBlIiwiJGludm9rZSIsImltZyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsS0FEakI7QUFFUEMsNkJBQXVCLElBRmhCO0FBR1BDLDZCQUF1QjtBQUhoQixLLFFBS1ZDLE8sR0FBVSxFLFFBQ1hDLE0sR0FBUyxFQUFDLFlBQVcsRUFBQyw2QkFBNEIsZUFBN0IsRUFBWixFQUEwRCxZQUFXLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIseUJBQXdCLFdBQTNDLEVBQXJFLEUsUUFD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IlxuaW1wb3J0IHdlcHkgZnJvbSBcIndlcHlcIjtcbmltcG9ydCBUb2FzdCBmcm9tIFwid2VweS1jb20tdG9hc3RcIjtcbmltcG9ydCBsb2FkbW9yZSBmcm9tIFwiLi4vY29tcG9uZW50cy9sb2FkbW9yZVwiO1xuaW1wb3J0IHVzZXJsaW5lIGZyb20gXCIuLi9jb21wb25lbnRzL3VzZXJsaW5lXCI7XG5pbXBvcnQgbG9naW5BcGkgZnJvbSBcIi4uL2FwaS9sb2dpblwiO1xuaW1wb3J0IHR1Y2FvQXBpIGZyb20gXCIuLi9hcGkvdHVjYW9cIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6IFwi5ZCQ5qe95aKZXCIsXG4gICAgZW5hYmxlUHVsbERvd25SZWZyZXNoOiB0cnVlLFxuICAgIG9uUmVhY2hCb3R0b21EaXN0YW5jZTogMjBcbiAgfTtcbiAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImxvYWRtb3JlXCI6e1widi1iaW5kOmxvYWRpbmdTdGF0dXMuc3luY1wiOlwibG9hZGluZ1N0YXR1c1wifSxcInVzZXJsaW5lXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpsb2dpblVzZXIuc3luY1wiOlwibG9naW5Vc2VyXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICBsb2FkbW9yZTogbG9hZG1vcmUsXG4gICAgdXNlcmxpbmU6IHVzZXJsaW5lLFxuICAgIHRvYXN0OiBUb2FzdFxuICB9O1xuICBkYXRhID0ge1xuICAgIGxvZ2luVXNlcjogbnVsbCxcbiAgICBhcnI6IFtdLFxuICAgIGxvYWRpbmdTdGF0dXM6IDEsXG4gICAgaXNCb3R0b21Mb2FkOiBmYWxzZSxcbiAgICBib3R0b21Mb2FkVGV4dDogXCLmi7zlkb3liqDovb3kuK0uLi5cIlxuICB9O1xuICBsb2FkRGF0YShvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICB2YXIgaXNTaG93TG9hZGluZyA9IG9wdGlvbnMuc2hvd0xvYWRpbmc7XG4gICAgaWYgKGlzU2hvd0xvYWRpbmcpIHNlbGYubG9hZGluZ1N0YXR1cyA9IDE7XG4gICAgc2VsZi5sb2FkaW5nU3RhdHVzID0gMDtcbiAgICB2YXIgYXJyID0gc2VsZi5kYXRhLmFycjtcbiAgICB2YXIgYmVnaW5UaW1lID1cbiAgICAgIGFyci5sZW5ndGggPiAwXG4gICAgICAgID8gb3B0aW9ucy5pc1B1bGxEb3duXG4gICAgICAgICAgPyBhcnJbMF0uY3JlYXRlVGltZVxuICAgICAgICAgIDogYXJyW2Fyci5sZW5ndGggLSAxXS5jcmVhdGVUaW1lXG4gICAgICAgIDogbnVsbDtcbiAgICB0dWNhb0FwaVxuICAgICAgLmdldExpc3Qob3B0aW9ucy5pc1B1bGxEb3duLCBiZWdpblRpbWUpXG4gICAgICAudGhlbihyZXNwID0+IHtcbiAgICAgICAgaWYgKHJlc3Auc3RhdHVzID09IDApIHtcbiAgICAgICAgICBzZWxmLnNob3dNc2cocmVzcC5tc2csIFwid2FyblwiKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG5ld0FyciA9IHJlc3Aucm93cztcbiAgICAgICAgaWYgKG5ld0Fyci5sZW5ndGggPT0gMCkge1xuICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKHRydWUpO1xuICAgICAgICAgIHNlbGYubG9hZGluZ1N0YXR1cyA9IDI7XG4gICAgICAgICAgc2VsZi4kYXBwbHkoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMuaXNQdWxsRG93bikge1xuICAgICAgICAgIGFyciA9IG5ld0Fyci5jb25jYXQoYXJyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhcnIgPSBhcnIuY29uY2F0KG5ld0Fycik7XG4gICAgICAgIH1cbiAgICAgICAgc2VsZi5hcnIgPSBhcnI7XG4gICAgICAgIHNlbGYuJGFwcGx5KCk7XG4gICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKHJlc3AgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwKTtcbiAgICAgICAgc2VsZi5zaG93TXNnKHJlc3AuZXJyTXNnLCBcIndhcm5cIik7XG4gICAgICB9KTtcbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIGxvZ2luQXBpLmdldEZ1bGxJbmZvKGUgPT4ge1xuICAgICAgc2VsZi5sb2dpblVzZXIgPSBlO1xuICAgICAgc2VsZi4kYXBwbHkoKTtcbiAgICB9KTtcbiAgICBzZWxmLmxvYWREYXRhKCk7XG4gIH1cbiAgb25TaGFyZUFwcE1lc3NhZ2UgKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogJ+asoui/juWQkOanvScsXG4gICAgICBwYXRoOiAnL3BhZ2UvaW5kZXgnXG4gICAgfVxuICB9XG4gIG9uUHVsbERvd25SZWZyZXNoKCkge1xuICAgIHRoaXMubG9hZERhdGEoXG4gICAgICB7XG4gICAgICAgIGlzUHVsbERvd246IHRydWVcbiAgICAgIH0sXG4gICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgd2VweS5zdG9wUHVsbERvd25SZWZyZXNoKCk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuICBvblJlYWNoQm90dG9tKCkge1xuICAgIGlmICh0aGlzLmxvYWRpbmdTdGF0dXMgIT0gMikge1xuICAgICAgdGhpcy5sb2FkRGF0YSh7XG4gICAgICAgIHNob3dMb2FkaW5nOiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgc2hvd01zZyhjb250ZW50LCB0eXBlID0gXCJ3YXJuXCIpIHtcbiAgICB0aGlzLiRpbnZva2UoXCJ0b2FzdFwiLCBcInNob3dcIiwge1xuICAgICAgdGl0bGU6IGNvbnRlbnQsXG4gICAgICBpbWc6IFwiLi4vYXNzZXRzL2ltYWdlcy9cIiArIHR5cGUgKyBcIi5wbmdcIlxuICAgIH0pO1xuICB9XG59XG4iXX0=
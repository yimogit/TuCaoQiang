"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyComToast = require('./../npm/wepy-com-toast/toast.js');

var _wepyComToast2 = _interopRequireDefault(_wepyComToast);

var _tucao = require('./../api/tucao.js');

var _tucao2 = _interopRequireDefault(_tucao);

var _login = require('./../api/login.js');

var _login2 = _interopRequireDefault(_login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Create = function (_wepy$page) {
  _inherits(Create, _wepy$page);

  function Create() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Create);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Create.__proto__ || Object.getPrototypeOf(Create)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: "吐槽一下"
    }, _this.components = {
      toast: _wepyComToast2.default
    }, _this.data = {
      loginUser: null,
      content: "",
      errorMsg: ""
    }, _this.methods = {
      bindKeyInput: function bindKeyInput(e) {
        this.content = e.detail.value;
        this.$apply();
      },
      formSubmit: function formSubmit(e) {
        var self = this;
        var content = self.content;
        if (self.loginUser == null) {
          this.showMsg("请授权！！！");
          this.$apply();
          return;
        }
        if (!content) {
          this.showMsg("请填写内容啊");
          return;
        }
        _tucao2.default.create(this.loginUser.token, this.loginUser.nickName, this.loginUser.avatarUrl, content).then(function (resp) {
          if (resp.status == 1) {
            self.showMsg(resp.msg, "success");
            self.content = "";
            self.$apply();
          } else {
            self.showMsg(resp.msg, "warn");
          }
        }).catch(function (resp) {
          self.showMsg(resp.errMsg, "warn");
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Create, [{
    key: "showMsg",
    value: function showMsg(content) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "warn";

      this.$invoke("toast", "show", {
        title: content,
        img: "../assets/images/" + type + ".png"
      });
    }
  }, {
    key: "onLoad",
    value: function onLoad() {
      var self = this;
      _login2.default.getFullInfo(function (e) {
        if (e == null) {
          self.errorMsg = "未授权无权吐槽,重新添加小程序即可再次授权";
        }
        self.loginUser = e;
        self.$apply();
      });
    }
  }]);

  return Create;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Create , 'pages/create'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS5qcyJdLCJuYW1lcyI6WyJDcmVhdGUiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsInRvYXN0IiwiZGF0YSIsImxvZ2luVXNlciIsImNvbnRlbnQiLCJlcnJvck1zZyIsIm1ldGhvZHMiLCJiaW5kS2V5SW5wdXQiLCJlIiwiZGV0YWlsIiwidmFsdWUiLCIkYXBwbHkiLCJmb3JtU3VibWl0Iiwic2VsZiIsInNob3dNc2ciLCJjcmVhdGUiLCJ0b2tlbiIsIm5pY2tOYW1lIiwiYXZhdGFyVXJsIiwidGhlbiIsInJlc3AiLCJzdGF0dXMiLCJtc2ciLCJjYXRjaCIsImVyck1zZyIsInR5cGUiLCIkaW52b2tlIiwidGl0bGUiLCJpbWciLCJnZXRGdWxsSW5mbyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLE07Ozs7Ozs7Ozs7Ozs7O3NMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYTtBQUNYQztBQURXLEssUUFHYkMsSSxHQUFPO0FBQ0xDLGlCQUFXLElBRE47QUFFTEMsZUFBUyxFQUZKO0FBR0xDLGdCQUFVO0FBSEwsSyxRQUtQQyxPLEdBQVU7QUFDUkMsb0JBQWMsc0JBQVNDLENBQVQsRUFBWTtBQUN4QixhQUFLSixPQUFMLEdBQWVJLEVBQUVDLE1BQUYsQ0FBU0MsS0FBeEI7QUFDQSxhQUFLQyxNQUFMO0FBQ0QsT0FKTztBQUtSQyxnQkFMUSxzQkFLR0osQ0FMSCxFQUtNO0FBQ1osWUFBSUssT0FBTyxJQUFYO0FBQ0EsWUFBSVQsVUFBVVMsS0FBS1QsT0FBbkI7QUFDQSxZQUFJUyxLQUFLVixTQUFMLElBQWtCLElBQXRCLEVBQTRCO0FBQzFCLGVBQUtXLE9BQUwsQ0FBYSxRQUFiO0FBQ0EsZUFBS0gsTUFBTDtBQUNBO0FBQ0Q7QUFDRCxZQUFJLENBQUNQLE9BQUwsRUFBYztBQUNaLGVBQUtVLE9BQUwsQ0FBYSxRQUFiO0FBQ0E7QUFDRDtBQUNELHdCQUNHQyxNQURILENBRUksS0FBS1osU0FBTCxDQUFlYSxLQUZuQixFQUdJLEtBQUtiLFNBQUwsQ0FBZWMsUUFIbkIsRUFJSSxLQUFLZCxTQUFMLENBQWVlLFNBSm5CLEVBS0lkLE9BTEosRUFPR2UsSUFQSCxDQU9RLGdCQUFRO0FBQ1osY0FBSUMsS0FBS0MsTUFBTCxJQUFlLENBQW5CLEVBQXNCO0FBQ3BCUixpQkFBS0MsT0FBTCxDQUFhTSxLQUFLRSxHQUFsQixFQUF1QixTQUF2QjtBQUNBVCxpQkFBS1QsT0FBTCxHQUFlLEVBQWY7QUFDQVMsaUJBQUtGLE1BQUw7QUFDRCxXQUpELE1BSU87QUFDTEUsaUJBQUtDLE9BQUwsQ0FBYU0sS0FBS0UsR0FBbEIsRUFBdUIsTUFBdkI7QUFDRDtBQUNGLFNBZkgsRUFnQkdDLEtBaEJILENBZ0JTLGdCQUFRO0FBQ2JWLGVBQUtDLE9BQUwsQ0FBYU0sS0FBS0ksTUFBbEIsRUFBMEIsTUFBMUI7QUFDRCxTQWxCSDtBQW1CRDtBQXBDTyxLOzs7Ozs0QkFzQ0ZwQixPLEVBQXdCO0FBQUEsVUFBZnFCLElBQWUsdUVBQVIsTUFBUTs7QUFDOUIsV0FBS0MsT0FBTCxDQUFhLE9BQWIsRUFBc0IsTUFBdEIsRUFBOEI7QUFDNUJDLGVBQU92QixPQURxQjtBQUU1QndCLGFBQUssc0JBQXNCSCxJQUF0QixHQUE2QjtBQUZOLE9BQTlCO0FBSUQ7Ozs2QkFDUTtBQUNQLFVBQUlaLE9BQU8sSUFBWDtBQUNBLHNCQUFTZ0IsV0FBVCxDQUFxQixhQUFLO0FBQ3hCLFlBQUlyQixLQUFLLElBQVQsRUFBZTtBQUNiSyxlQUFLUixRQUFMLEdBQWdCLHVCQUFoQjtBQUNEO0FBQ0RRLGFBQUtWLFNBQUwsR0FBaUJLLENBQWpCO0FBQ0FLLGFBQUtGLE1BQUw7QUFDRCxPQU5EO0FBT0Q7Ozs7RUFqRWlDLGVBQUttQixJOztrQkFBcEJqQyxNIiwiZmlsZSI6ImNyZWF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tIFwid2VweVwiO1xyXG5pbXBvcnQgVG9hc3QgZnJvbSBcIndlcHktY29tLXRvYXN0XCI7XHJcbmltcG9ydCB0dWNhb0FwaSBmcm9tIFwiLi4vYXBpL3R1Y2FvXCI7XHJcbmltcG9ydCBsb2dpbkFwaSBmcm9tIFwiLi4vYXBpL2xvZ2luXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENyZWF0ZSBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogXCLlkJDmp73kuIDkuItcIlxyXG4gIH07XHJcbiAgY29tcG9uZW50cyA9IHtcclxuICAgIHRvYXN0OiBUb2FzdFxyXG4gIH07XHJcbiAgZGF0YSA9IHtcclxuICAgIGxvZ2luVXNlcjogbnVsbCxcclxuICAgIGNvbnRlbnQ6IFwiXCIsXHJcbiAgICBlcnJvck1zZzogXCJcIlxyXG4gIH07XHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIGJpbmRLZXlJbnB1dDogZnVuY3Rpb24oZSkge1xyXG4gICAgICB0aGlzLmNvbnRlbnQgPSBlLmRldGFpbC52YWx1ZTtcclxuICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgIH0sXHJcbiAgICBmb3JtU3VibWl0KGUpIHtcclxuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICB2YXIgY29udGVudCA9IHNlbGYuY29udGVudDtcclxuICAgICAgaWYgKHNlbGYubG9naW5Vc2VyID09IG51bGwpIHtcclxuICAgICAgICB0aGlzLnNob3dNc2coXCLor7fmjojmnYPvvIHvvIHvvIFcIik7XHJcbiAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFjb250ZW50KSB7XHJcbiAgICAgICAgdGhpcy5zaG93TXNnKFwi6K+35aGr5YaZ5YaF5a655ZWKXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICB0dWNhb0FwaVxyXG4gICAgICAgIC5jcmVhdGUoXHJcbiAgICAgICAgICB0aGlzLmxvZ2luVXNlci50b2tlbixcclxuICAgICAgICAgIHRoaXMubG9naW5Vc2VyLm5pY2tOYW1lLFxyXG4gICAgICAgICAgdGhpcy5sb2dpblVzZXIuYXZhdGFyVXJsLFxyXG4gICAgICAgICAgY29udGVudFxyXG4gICAgICAgIClcclxuICAgICAgICAudGhlbihyZXNwID0+IHtcclxuICAgICAgICAgIGlmIChyZXNwLnN0YXR1cyA9PSAxKSB7XHJcbiAgICAgICAgICAgIHNlbGYuc2hvd01zZyhyZXNwLm1zZywgXCJzdWNjZXNzXCIpO1xyXG4gICAgICAgICAgICBzZWxmLmNvbnRlbnQgPSBcIlwiO1xyXG4gICAgICAgICAgICBzZWxmLiRhcHBseSgpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2VsZi5zaG93TXNnKHJlc3AubXNnLCBcIndhcm5cIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2gocmVzcCA9PiB7XHJcbiAgICAgICAgICBzZWxmLnNob3dNc2cocmVzcC5lcnJNc2csIFwid2FyblwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG4gIHNob3dNc2coY29udGVudCwgdHlwZSA9IFwid2FyblwiKSB7XHJcbiAgICB0aGlzLiRpbnZva2UoXCJ0b2FzdFwiLCBcInNob3dcIiwge1xyXG4gICAgICB0aXRsZTogY29udGVudCxcclxuICAgICAgaW1nOiBcIi4uL2Fzc2V0cy9pbWFnZXMvXCIgKyB0eXBlICsgXCIucG5nXCJcclxuICAgIH0pO1xyXG4gIH1cclxuICBvbkxvYWQoKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBsb2dpbkFwaS5nZXRGdWxsSW5mbyhlID0+IHtcclxuICAgICAgaWYgKGUgPT0gbnVsbCkge1xyXG4gICAgICAgIHNlbGYuZXJyb3JNc2cgPSBcIuacquaOiOadg+aXoOadg+WQkOanvSzph43mlrDmt7vliqDlsI/nqIvluo/ljbPlj6/lho3mrKHmjojmnYNcIjtcclxuICAgICAgfVxyXG4gICAgICBzZWxmLmxvZ2luVXNlciA9IGU7XHJcbiAgICAgIHNlbGYuJGFwcGx5KCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19
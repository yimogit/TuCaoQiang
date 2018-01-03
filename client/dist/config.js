'use strict';

// 环境
var env = 'development'; // 'development' or 'production'
// 小程序版本
var version = 1.0;

// 接口服务器地址
var hosts = {
    development: 'http://localhost:58982/api',
    production: 'https://www.yimo.link/api'
};
module.exports = {
    env: env,
    version: version,
    apiHost: hosts[env]
    // api: disposeUrl(api, hosts[env])
};

function disposeUrl(obj, prefix) {
    Object.keys(obj).forEach(function (v) {
        if (obj[v].url) {
            obj[v].url = prefix + obj[v].url;
        } else {
            obj[v] = disposeUrl(obj[v], prefix);
        }
    });
    return obj;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy5qcyJdLCJuYW1lcyI6WyJlbnYiLCJ2ZXJzaW9uIiwiaG9zdHMiLCJkZXZlbG9wbWVudCIsInByb2R1Y3Rpb24iLCJtb2R1bGUiLCJleHBvcnRzIiwiYXBpSG9zdCIsImRpc3Bvc2VVcmwiLCJvYmoiLCJwcmVmaXgiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsInYiLCJ1cmwiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQSxJQUFNQSxNQUFNLGFBQVosQyxDQUEwQjtBQUMxQjtBQUNBLElBQU1DLFVBQVUsR0FBaEI7O0FBRUE7QUFDQSxJQUFNQyxRQUFRO0FBQ1ZDLGlCQUFhLDRCQURIO0FBRVZDLGdCQUFZO0FBRkYsQ0FBZDtBQUlBQyxPQUFPQyxPQUFQLEdBQWlCO0FBQ2JOLFlBRGE7QUFFYkMsb0JBRmE7QUFHYk0sYUFBUUwsTUFBTUYsR0FBTjtBQUNSO0FBSmEsQ0FBakI7O0FBT0EsU0FBU1EsVUFBVCxDQUFvQkMsR0FBcEIsRUFBeUJDLE1BQXpCLEVBQWlDO0FBQzdCQyxXQUFPQyxJQUFQLENBQVlILEdBQVosRUFBaUJJLE9BQWpCLENBQXlCLGFBQUs7QUFDMUIsWUFBSUosSUFBSUssQ0FBSixFQUFPQyxHQUFYLEVBQWdCO0FBQ1pOLGdCQUFJSyxDQUFKLEVBQU9DLEdBQVAsR0FBYUwsU0FBU0QsSUFBSUssQ0FBSixFQUFPQyxHQUE3QjtBQUNILFNBRkQsTUFFTztBQUNITixnQkFBSUssQ0FBSixJQUFTTixXQUFXQyxJQUFJSyxDQUFKLENBQVgsRUFBbUJKLE1BQW5CLENBQVQ7QUFDSDtBQUNKLEtBTkQ7QUFPQSxXQUFPRCxHQUFQO0FBQ0giLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8g546v5aKDXHJcbmNvbnN0IGVudiA9ICdkZXZlbG9wbWVudCcgLy8gJ2RldmVsb3BtZW50JyBvciAncHJvZHVjdGlvbidcclxuLy8g5bCP56iL5bqP54mI5pysXHJcbmNvbnN0IHZlcnNpb24gPSAxLjBcclxuXHJcbi8vIOaOpeWPo+acjeWKoeWZqOWcsOWdgFxyXG5jb25zdCBob3N0cyA9IHtcclxuICAgIGRldmVsb3BtZW50OiAnaHR0cDovL2xvY2FsaG9zdDo1ODk4Mi9hcGknLFxyXG4gICAgcHJvZHVjdGlvbjogJ2h0dHBzOi8vd3d3LnlpbW8ubGluay9hcGknXHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBlbnYsXHJcbiAgICB2ZXJzaW9uLFxyXG4gICAgYXBpSG9zdDpob3N0c1tlbnZdXHJcbiAgICAvLyBhcGk6IGRpc3Bvc2VVcmwoYXBpLCBob3N0c1tlbnZdKVxyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwb3NlVXJsKG9iaiwgcHJlZml4KSB7XHJcbiAgICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2godiA9PiB7XHJcbiAgICAgICAgaWYgKG9ialt2XS51cmwpIHtcclxuICAgICAgICAgICAgb2JqW3ZdLnVybCA9IHByZWZpeCArIG9ialt2XS51cmxcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvYmpbdl0gPSBkaXNwb3NlVXJsKG9ialt2XSwgcHJlZml4KVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICByZXR1cm4gb2JqXHJcbn1cclxuIl19
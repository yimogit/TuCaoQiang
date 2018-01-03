import wepy from 'wepy'
import { apiHost } from '../config'

const USER_INFO_KEY = 'USER_INFO_KEY'
const interfaces = {
    async getFullInfo(cb) {
        let self = this;
        wx.getStorage({
            key: USER_INFO_KEY,
            success: function (res) {
                cb && cb(res.data);
            },
            fail: function () {
                self.login(cb);
            }
        })
    },
    async getUserInfo(cb) {
        const loginData = await wepy.login();
        const userInfo = await wepy.getUserInfo();
        userInfo.code = loginData.code;
        return userInfo;
    },
    async login(cb) {
        wx.login({
            success: function (loginData) {
                wx.request({
                    url: apiHost + '/auth/login?code=' + loginData.code,
                    method: 'GET',
                    success: function (res) {
                        wx.getUserInfo({
                            success: function (resUser) {
                                var user = resUser.userInfo
                                user.token = res.data.token;
                                wx.setStorage({
                                    key: USER_INFO_KEY,
                                    data: user
                                })
                                cb && cb(user);
                            },
                            fail: function () {
                                cb(null);
                            }
                        })
                    },
                    fail: function () {
                        cb(null);
                    }
                })
            },
            fail: function () {
                cb(null);
            }
        })
    }
}

export default interfaces
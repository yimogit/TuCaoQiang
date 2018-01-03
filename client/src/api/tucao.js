import wepy from 'wepy'
import { apiHost } from '../config'

const interfaces = {
    async getList(isPull, startTime) {
        return new Promise((resolve, reject) => {
            wx.request({
                url: apiHost + '/tucao/list?isPull=' + isPull + '&startTime=' + startTime,
                method: 'GET',
                success: function (res) {
                    resolve(res.data);
                },
                fail: function (res) {
                    reject(res);
                }
            })
        });
    },
    async create(userId, nickName, avatarUrl, content) {
        return new Promise((resolve, reject) => {
            wx.request({
                url: apiHost + '/tucao/create',
                method: 'POST',
                data: { UserId: userId, NickName: nickName, Content: content, AvatarUrl: avatarUrl },
                success: function (res) {
                    resolve(res.data);
                },
                fail: function (res) {
                    reject(res);
                }
            })
        });
    }
}

export default interfaces
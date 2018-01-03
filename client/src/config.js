// 环境
const env = 'development' // 'development' or 'production'
// 小程序版本
const version = 1.0

// 接口服务器地址
const hosts = {
    development: 'http://localhost:58982/api',
    production: 'https://www.yimo.link/api'
}
module.exports = {
    env,
    version,
    apiHost:hosts[env]
    // api: disposeUrl(api, hosts[env])
}

function disposeUrl(obj, prefix) {
    Object.keys(obj).forEach(v => {
        if (obj[v].url) {
            obj[v].url = prefix + obj[v].url
        } else {
            obj[v] = disposeUrl(obj[v], prefix)
        }
    })
    return obj
}

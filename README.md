# 吐槽墙
一个小程序demo

## 客户端说明
使用`wepy`构建 依赖于 `node.js`


### 客户端运行
0. 安装wepy：`npm install -g wepy`(需要先看一下wepy的文档)
1. 进入client目录
2. 还原依赖包：`npm install`
3. 执行监听：`wepy build -w`

## 服务端说明
使用`asp.net core`构建 ，附赠一个小程序.net core版的sdk,项目太简单就没有使用sdk。
使用swagger生成文档，项目共三个接口，数据存储在json文件中
![图片](https://dn-coding-net-production-pp.qbox.me/1a0ba86e-c6a0-4e4d-bdb5-377933bfd2f8.png)

### 服务端运行
0. 安装sdk:[.net core2.0](https://www.microsoft.com/net/download/thank-you/dotnet-sdk-2.1.3-windows-x64-installer)
1. 还原依赖包`dotnet restore`
2. 运行：`dotnet run`

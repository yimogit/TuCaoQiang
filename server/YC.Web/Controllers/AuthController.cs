using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using System.IO;
using Newtonsoft.Json;
using YC.Web.Utils;
using System.Security.Cryptography;

namespace YC.Web.Controllers
{
    /// <summary>
    /// 身份认证
    /// </summary>
    [Route("api/[controller]/[action]")]
    public class AuthController : Controller
    {
        /// <summary>
        /// 微信用户code换取token
        /// </summary>
        /// <param name="code"></param>
        /// <returns></returns>
        [HttpGet]
        public IActionResult Login(string code)
        {
            var wxsdk = WebContext.GetSetting().WeixinProgram;
            var resp = HttpHelper.Get(string.Format("https://api.weixin.qq.com/sns/jscode2session?appid={0}&secret={1}&js_code={2}&grant_type={3}", wxsdk.AppId, wxsdk.AppSecret, code, "authorization_code"), "");
            string openId = string.Empty;
            if (string.IsNullOrEmpty(resp) || resp.Contains("errcode"))
            {
                openId = Guid.NewGuid().ToString("N");
            }
            else
            {
                dynamic wxData = JsonHelper.ParseFromJson<dynamic>(resp);
                openId = wxData.openid;
            }
            //注册
            return Ok(new { token = openId });
        }
    }
}

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
using YC.Web.ViewModels;
using Microsoft.Extensions.Caching.Memory;

namespace YC.Web.Controllers
{
    /// <summary>
    /// 吐槽
    /// </summary>
    [Route("api/[controller]/[action]")]
    public class TuCaoController : Controller
    {
        private readonly IMemoryCache _memoryCache;
        /// <summary>
        /// ss
        /// </summary>
        /// <param name="memoryCache"></param>
        public TuCaoController(IMemoryCache memoryCache)
        {
            _memoryCache = memoryCache;
        }
        private const int DEFAULT_PAGE_SIZE = 10;
        private const string DEFAULT_TUCAO_LIST_CACHE_KEY = "DEFAULT_TUCAO_LIST_CACHE_KEY";
        /// <summary>
        /// 吐槽列表
        /// </summary>
        /// <param name="isPull">是否下拉操作</param>
        /// <param name="startTime">开始时间戳</param>
        /// <returns></returns>
        [HttpGet]
        public IActionResult List(bool isPull = false, long startTime = 0)
        {
            var allData = _memoryCache.Get(DEFAULT_TUCAO_LIST_CACHE_KEY, () =>
            {
                var dbPath = WebContext.GetSetting().TuCaoDbPath;
                var result = FileHelper.ReadFile(dbPath);
                if (result.Status == ResultStatus.Succeed)
                {
                    var txt = result.GetData<string>();
                    var model = JsonHelper.ParseFromJson<List<TuCaoViewModel>>("[" + txt + "]");
                    return model
                    .Select(e => new
                    {
                        e.NickName,
                        e.AvatarUrl,
                        e.Content,
                        e.CreateTime,
                        ShowTime = e.CreateTime.ToDateTime().ToString("yyyy-MM-dd HH:mm")
                    }).ToList();
                }
                return null;
            });
            var listModel = new TuCaoListViewModel() { };
            if (allData == null)
            {
                return Ok(listModel);
            }
            //时间 默认升序
            var query = allData.Where(e => (startTime == 0 || (startTime > 0 && (isPull ? e.CreateTime > startTime : e.CreateTime < startTime))));

            //如果是下拉操作 则应将数据降序排列
            if (isPull || startTime == 0)
                query = query.OrderByDescending(e => e.CreateTime);
            listModel.Rows = query.Take(DEFAULT_PAGE_SIZE).ToList();
            listModel.Total = allData.Count;
            return Ok(listModel);
        }
        /// <summary>
        /// 创建吐槽
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        [ModelValid]
        [HttpPost]
        public IActionResult Create([FromBody]TuCaoViewModel model)
        {
            var dbPath = WebContext.GetSetting().TuCaoDbPath;
            model.CreateTime = DateTime.Now.ToTimestamp();
            //保存格式{},{},{}
            var preExt = System.IO.File.Exists(dbPath) ? "," : "";
            FileHelper.WriteFile(dbPath, preExt + JsonHelper.ToJson(model));
            _memoryCache.Remove(DEFAULT_TUCAO_LIST_CACHE_KEY);
            return Ok(OperateResult.Succeed("保存成功"));
        }
    }
}

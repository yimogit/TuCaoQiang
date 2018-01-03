using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace YC.Web.ViewModels
{
    public class TuCaoViewModel
    {
        /// <summary>
        /// 用户标识
        /// </summary>
        [Required(ErrorMessage = "请传入用户标识")]
        public string UserId { get; set; }
        /// <summary>
        /// 创建人
        /// </summary>
        [Required(ErrorMessage = "请传入用户昵称")]
        public string NickName { get; set; }
        /// <summary>
        /// 吐槽内容
        /// </summary>
        [Required(ErrorMessage = "请填写内容")]
        public string Content { get; set; }
        /// <summary>
        /// 头像
        /// </summary>
        public string AvatarUrl { get; set; }
        /// <summary>
        /// 创建时间
        /// </summary>
        public long CreateTime { get; set; }
    }
    public class TuCaoListViewModel
    {
        public dynamic Rows { get; set; }
        public int Total { get; set; }
    }
}

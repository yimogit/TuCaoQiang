using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace YC.Web
{
    public class AppSettings
    {
        public WeixinProgram WeixinProgram { get; set; }
        public string TuCaoDbPath { get; set; }
    }
    public class WeixinProgram
    {
        public string AppId { get; set; }
        public string AppSecret { get; set; }
    }
}

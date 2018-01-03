using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;

namespace YC.Web
{
    public static class WebContext
    {
        public static AppSettings GetSetting()
        {
            var _valueService = ServiceLocator.GetService<IOptions<AppSettings>>();
            return _valueService.Value;
        }
    }
    public static class ServiceLocator
    {
        public static IServiceProvider Instance { get; set; }
        public static T GetService<T>() where T : class
        {
            return Instance.GetService<T>();
        }
    }
}

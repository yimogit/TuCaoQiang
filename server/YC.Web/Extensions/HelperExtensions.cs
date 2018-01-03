using Microsoft.AspNetCore.Mvc.ModelBinding;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace YC.Web
{
    public static class HelperExtensions
    {
        public static IEnumerable<string> GetErrors(this ModelStateDictionary modelState)
        {
            var errorList = (from item in modelState
                             where item.Value.Errors.Any()
                             select item.Value.Errors[0].ErrorMessage).ToList();

            return errorList;
        }
        public static string GenErrorInfo(this ModelStateDictionary modelState)
        {
            var errorList = modelState.GetErrors();
            return errorList.FirstOrDefault();
            //return string.Join("<br>", errorList);
        }
        /// <summary>
        /// 转换成时间戳
        /// </summary>
        /// <param name="time"></param>
        /// <returns></returns>

        public static long ToTimestamp(this DateTime time)
        {
            return (time.ToUniversalTime().Ticks - 621355968000000000) / 10000000;
        }
        public static DateTime ToDateTime(this long timeStamp)
        {
            var start = new DateTime(1970, 1, 1, 0, 0, 0, 0, DateTimeKind.Utc);
            start = start.AddSeconds(timeStamp).ToLocalTime();
            return start;
        }
    }
}

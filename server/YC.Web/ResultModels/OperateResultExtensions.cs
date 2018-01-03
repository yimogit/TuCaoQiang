using System;
using System.Collections.Generic;
using System.Text;

namespace YC.Web
{
    public static class OperateResultExtensions
    {
        public static T GetData<T>(this OperateResult result) where T : class
        {
            if (result.Data == null)
                return default(T);
            return result.Data as T;
        }
    }
}

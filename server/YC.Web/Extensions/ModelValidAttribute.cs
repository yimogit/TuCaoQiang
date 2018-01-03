using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace YC.Web
{
    /// <summary>
    /// 自定义模型验证
    /// </summary>
    public class ModelValidAttribute : Attribute, IActionFilter
    {
        public void OnActionExecuted(ActionExecutedContext context)
        {
        }

        public void OnActionExecuting(ActionExecutingContext context)
        {
            if (!context.ModelState.IsValid)
            {
                context.Result = new JsonResult(OperateResult.Error(context.ModelState.GenErrorInfo()));
                return;
            }
        }
    }
}

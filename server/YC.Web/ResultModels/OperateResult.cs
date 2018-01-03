using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace YC.Web
{
    /// <summary>
    /// 通用结果模型
    /// </summary>
    public class OperateResult
    {
        public ResultStatus Status { get; set; }
        public string Msg { get; set; }
        public object Data { get; set; }

        public OperateResult()
        {
        }

        public OperateResult(ResultStatus status, string msg)
        {
            Status = status;
            Msg = msg;
        }

        public OperateResult(ResultStatus status, string msg, object data)
        {
            Status = status;
            Msg = msg;
            Data = data;
        }

        public static OperateResult Succeed(string msg)
        {
            return new OperateResult(ResultStatus.Succeed, msg);
        }

        public static OperateResult Succeed(string msg, object data)
        {
            return new OperateResult(ResultStatus.Succeed, msg, data);
        }

        public static OperateResult Error(string msg)
        {
            return new OperateResult(ResultStatus.Error, msg);
        }

        public static OperateResult Error(string msg, object data)
        {
            return new OperateResult(ResultStatus.Error, msg, data);
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace YC.Web
{
    /// <summary>
    /// 通用结果模型 泛型
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public class OperateResult<T> where T : class
    {
        public ResultStatus Status { get; set; }
        public string Msg { get; set; }
        public T Data { get; set; }

        public OperateResult()
        {
        }

        public OperateResult(ResultStatus status, string msg)
        {
            Status = status;
            Msg = msg;
        }

        public OperateResult(ResultStatus status, string msg, T data)
        {
            Status = status;
            Msg = msg;
            Data = data;
        }

        public static OperateResult<T> Succeed(string msg)
        {
            return new OperateResult<T>(ResultStatus.Succeed, msg);
        }

        public static OperateResult<T> Succeed(string msg, T data)
        {
            return new OperateResult<T>(ResultStatus.Succeed, msg, data);
        }

        public static OperateResult<T> Error(string msg)
        {
            return new OperateResult<T>(ResultStatus.Error, msg);
        }

        public static OperateResult<T> Error(string msg, T data)
        {
            return new OperateResult<T>(ResultStatus.Error, msg, data);
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.IO;
using System.Web;

namespace YC.Web.Utils
{
    public class FileHelper
    {
        /// <summary>
        /// 写入文件
        /// </summary>
        /// <param name="input"></param>
        /// <param name="filePath"></param>
        /// <returns></returns>
        public static OperateResult WriteFile(string filePath, string input, bool append = true)
        {
            if (string.IsNullOrWhiteSpace(filePath))
            {
                return new OperateResult(ResultStatus.Error, "写入的文件名不能为空");
            }
            try
            {
                var finfo = new FileInfo(filePath);
                if (!finfo.Directory.Exists)
                {
                    finfo.Directory.Create();
                }
                //追加
                using (StreamWriter sw = new StreamWriter(filePath, append, Encoding.UTF8))
                {
                    sw.Write(input);
                    sw.Flush();
                    sw.Close();
                }
            }
            catch
            {
                return new OperateResult(ResultStatus.Error, "写入文件失败");
            }
            return new OperateResult(ResultStatus.Succeed, "写入文件成功");
        }
        /// <summary>
        /// 读取文件
        /// </summary>
        /// <param name="filePath"></param>
        /// <returns></returns>
        public static OperateResult ReadFile(string filePath)
        {
            if (!File.Exists(filePath))
            {
                return new OperateResult(ResultStatus.Error, "读的文件名不能为空");
            }
            try
            {
                var finfo = new FileInfo(filePath);
                using (var fs = finfo.OpenRead())
                {
                    var r = new StreamReader(fs);
                    var result = r.ReadToEnd();
                    r.Close();
                    return new OperateResult(ResultStatus.Succeed, "读取文件成功", result);
                }
            }
            catch
            {
                return new OperateResult(ResultStatus.Error, "读取文件失败");
            }
        }
        /// <summary>
        /// 以json格式写入
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="input"></param>
        /// <param name="filePath"></param>
        /// <returns></returns>
        public static OperateResult WriteJsonFile<T>(T input, string filePath)
        {
            if (string.IsNullOrWhiteSpace(filePath))
            {
                return new OperateResult(ResultStatus.Error, "写入的文件名不能为空");
            }
            var str = JsonHelper.ToJson(input);
            return WriteFile(filePath, str);
        }
        /// <summary>
        /// 读取json格式的文件
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="filePath"></param>
        /// <returns></returns>
        public static T ReadJsonFile<T>(string filePath)
        {
            if (!File.Exists(filePath))
            {
                return default(T);
            }
            var result = ReadFile(filePath);
            if (result.Status == ResultStatus.Succeed)
            {
                return JsonHelper.ParseFromJson<T>(result.GetData<string>());
            }
            return default(T);
        }
    }
}

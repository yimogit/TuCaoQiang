using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System.Net.WebSockets;
using Microsoft.AspNetCore.Http;
using System.Threading;
using Microsoft.Extensions.PlatformAbstractions;
using System.IO;
using Swashbuckle.AspNetCore.Swagger;

namespace YC.Web
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            #region 注册配置
            services.AddOptions();
            //读取配置文件
            var iConfig = Configuration.GetSection("AppSettings");
            var appSetting = iConfig.Get<AppSettings>();

            services.Configure<AppSettings>(iConfig);

            #endregion
            //内存缓存
            services.AddMemoryCache();

            services.AddMvc()
                    .AddJsonOptions(op =>
                    {
                        //修改json格式为帕斯卡命名法
                       // op.SerializerSettings.ContractResolver =
                       //new Newtonsoft.Json.Serialization.DefaultContractResolver();
                        //返回数据中有DateTime类型，自定义格式
                        op.SerializerSettings.DateFormatString = "yyyy-MM-dd HH:mm";
                    });
            // Register the Swagger generator, defining one or more Swagger documents
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new Info { Title = "My API", Version = "v1" });

                var basePath = PlatformServices.Default.Application.ApplicationBasePath;
                //Set the comments path for the swagger json and ui.  
                var xmlPath = Path.Combine(basePath, "YC.Web.xml");
                c.IncludeXmlComments(xmlPath);
            });

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseStaticFiles();
            // Enable middleware to serve generated Swagger as a JSON endpoint.
            app.UseSwagger();
            // Enable middleware to serve swagger-ui (HTML, JS, CSS, etc.), specifying the Swagger JSON endpoint.
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
            });

            app.UseMvc();
            ServiceLocator.Instance = app.ApplicationServices;
        }
    }
}

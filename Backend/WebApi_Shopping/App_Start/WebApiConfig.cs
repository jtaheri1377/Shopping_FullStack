using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;

namespace WebApi_Shopping
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services
           // var json = config.Formatters.JsonFormatter;
           // json.SerializerSettings.PreserveReferencesHandling = Newtonsoft.Json.PreserveReferencesHandling.Objects;
           // config.Formatters.Remove(config.Formatters.XmlFormatter);
           // json.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
           // config.Formatters.Remove(GlobalConfiguration.Configuration.Formatters.XmlFormatter);
           // config.Formatters.Add(GlobalConfiguration.Configuration.Formatters.JsonFormatter);


           //Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );


            EnableCorsAttribute cors = new EnableCorsAttribute("*","*","*");
            config.EnableCors(cors);


            // Configure Web API to return JSON
            config.Formatters.JsonFormatter
            .SupportedMediaTypes.Add(new System.Net.Http.Headers.MediaTypeHeaderValue("text/html"));



        }
    }
}

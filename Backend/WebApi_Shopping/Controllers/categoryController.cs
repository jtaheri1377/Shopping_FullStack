using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApi_Shopping.Models;

namespace WebApi_Shopping.Controllers
{
    public class categoryController : ApiController
    {
        [HttpGet]
        public IEnumerable<category> Get()
        {
            using (var context = new ModelsContext())
            {
                return context.Categories.ToList();
            }
        }

        [HttpGet]
        public category Get(int id)
        {
            using (var context = new ModelsContext())
            {
                return context.Categories.FirstOrDefault(p => p.id == id);
            }
        }

        [HttpPost]
        public IHttpActionResult post(category product)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            using (var context = new ModelsContext())
            {
                context.Categories.Add(product);
                context.SaveChanges();
                return Ok(product);
            }
        }

        [HttpPut]
        public category Put(category product)
        {
            using (var context = new ModelsContext())
            {
                var productAct = context.Categories.FirstOrDefault(x => x.id == product.id);
                productAct.name = product.name;
                context.SaveChanges();
                return product;
            }
        }

        [HttpDelete]
        public bool Delete(int Id)
        {
            using (var context = new ModelsContext())
            {
                var productAct = context.Categories.FirstOrDefault(x => x.id == Id);
                context.Categories.Remove(productAct);
                context.SaveChanges();
                return true;
            }
        }
    }
}

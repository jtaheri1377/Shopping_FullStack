using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApi_Shopping.Models;
namespace WebApi_Shopping.Controllers
{
    public class ProductsController : ApiController
    {
        //@CrossOrigin(origins = "http://localhost:4200")
       
        [HttpGet]
        public IEnumerable<products> Get()
        {
            using (var context = new ModelsContext())
            {
                return context.Products.ToList();
            }
        }

        [HttpGet]
        public products Get(int id)
        {
            using (var context = new ModelsContext())
            {
                return context.Products.FirstOrDefault(p => p.id == id);
            }
        }

        [HttpPost]
        public IHttpActionResult post(products product)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            using (var context = new ModelsContext())
            {
                context.Products.Add(product);
                context.SaveChanges();
                return Ok(product);
            }
        }

        [HttpPut]
        public products Put(products product)
        {
            using (var context = new ModelsContext())
            {
                var productAct = context.Products.FirstOrDefault(x => x.id == product.id);
                productAct.name = product.name;
                productAct.description = product.description;
                productAct.img = product.img;
                productAct.price = product.price;
                productAct.categoryid = product.categoryid;
                productAct.IsAvailble = product.IsAvailble;
                context.SaveChanges();
                return product;
            }
        }

        [HttpDelete]
        public bool Delete(int Id)
        {
            using (var context = new ModelsContext())
            {
                var productAct = context.Products.FirstOrDefault(x => x.id == Id);
                context.Products.Remove(productAct);
                context.SaveChanges();
                return true;
            }
        }
    }
}

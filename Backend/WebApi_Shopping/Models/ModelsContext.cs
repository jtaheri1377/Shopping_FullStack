using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using WebApi_Shopping.Models;

namespace WebApi_Shopping.Models
{
    public class ModelsContext : DbContext
    {
        public ModelsContext() : base("con")
        {

        }

        public DbSet<products> Products { get; set; }
        public DbSet<category> Categories { get; set; }
    }
}
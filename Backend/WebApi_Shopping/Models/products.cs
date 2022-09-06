using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebApi_Shopping.Models
{
    [Table("products")]
    public class products
    {
        [Key]
        public int id { get; set; }
        [Required]
        public string name { get; set; }
        public int price { get; set; }
        [Required]
        public int categoryid { get; set; }
        public string description { get; set; }
        public string img { get; set; }
        public string IsAvailble { get; set; }
    }
}
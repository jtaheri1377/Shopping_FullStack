using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebApi_Shopping.Models
{
    [Table("category")]
    public class category
    {
        [Key]
        public int id { get; set; }
        [Required]
        public string name { get; set; }

    }
}
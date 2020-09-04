using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Http;

namespace acreator_front.Models
{
    public class ProductAddDto
    {
        [Required]
        [StringLength(150, MinimumLength = 3)]
        public string Name { get; set; }
        [Required]
        public int Price { get; set; }
        [Required]
        public ProductType Type { get; set; }
        public string ImageUrl { get; set; }
        public IFormFile Image { get; set; }
        public int Width { get; set; }
        public int Height { get; set; }
    }
}
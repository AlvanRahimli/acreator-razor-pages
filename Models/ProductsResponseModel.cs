using System.Collections.Generic;

namespace acreator_front.Models
{
    public class ProductsResponseModel
    {
        public List<Product> Data { get; set; } 
        public int Status { get; set; }
    }
}
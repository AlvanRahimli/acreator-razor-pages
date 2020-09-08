using acreator_front.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace acreator_front.Models
{
    public class OrdersResponseModel
    {
        public List<Order> Data { get; set; }
        public int Status { get; set; }
    }
}

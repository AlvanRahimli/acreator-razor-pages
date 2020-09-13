using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace acreator_front.Models
{
    public class MessagesResponseModel
    {
        public List<Message> Data { get; set; }
        public int Status { get; set; }
    }
}

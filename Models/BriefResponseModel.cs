using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace acreator_front.Models
{
    public class BriefResponseModel
    {
        public List<IdNamePair> Data { get; set; }
        public int Status { get; set; }
    }
}

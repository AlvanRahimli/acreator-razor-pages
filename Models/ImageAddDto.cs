using Microsoft.AspNetCore.Http;

namespace acreator_front.Models
{
    public class ImageAddDto
    {
        public string Alt { get; set; }
        public IFormFile ImageFile { get; set; }
        public ImagePurpose Purpose { get; set; }
    }
}
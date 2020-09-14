using System;
using System.Linq;
using acreator_front.Models;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.Extensions.Localization;

namespace acreator_front.Pages
{
    public class GalleryModel : PageModel
    {
        private readonly IHttpClientFactory _clientFactory;
        private readonly IStringLocalizer _localizer;

        public GalleryModel(IHttpClientFactory clientFactory, IStringLocalizer<GalleryModel> localizer)
        {
            this._clientFactory = clientFactory;
            _localizer = localizer;
        }

        public async Task OnGetAsync()
        {
            var client = _clientFactory.CreateClient("getProductClient");

            var request = new HttpRequestMessage(HttpMethod.Get, $"http://localhost:5000/images/filter/1");
            request.Headers.Add("Accept", "application/json");

            var response = await client.SendAsync(request);

            if (response.IsSuccessStatusCode)
            {
                var data = await response.Content.ReadAsStringAsync();
                var serialized = JsonConvert.DeserializeObject<ImagesResponseModel>(data);

                foreach (var item in serialized.Data)
                {
                    item.Url = item.Url.Replace(@"\", "/");
                }

                ViewData["images"] = serialized.Data;
            }
            var title = _localizer["title"].Value;
            Console.WriteLine(title);
        }
    }
}
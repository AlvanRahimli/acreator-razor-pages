using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using acreator_front.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace acreator_front.Pages
{
    public class IndexModel : PageModel
    {
        private readonly IHttpClientFactory _clientFactory;
        public IndexModel(IHttpClientFactory clientFactory)
        {
            this._clientFactory = clientFactory;
        }

        public async Task OnGetAsync()
        {
            var client = _clientFactory.CreateClient("getProductClient");

            var request = new HttpRequestMessage(HttpMethod.Get, $"http://localhost:5000/images/filter/0");
            request.Headers.Add("Accept", "application/json");

            var response = await client.SendAsync(request);

            if (response.IsSuccessStatusCode)
            {
                var data = await response.Content.ReadAsStringAsync();
                var serialized = JsonConvert.DeserializeObject<ImagesResponseModel>(data);

                for (int i = 0; i < serialized.Data.Count; i++)
                {
                    serialized.Data[i].Url = serialized.Data[i].Url.Replace(@"\", "/");
                }

                ViewData["images"] = serialized.Data;
            }
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using acreator_front.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Newtonsoft.Json;

namespace acreator_front.Pages
{
    public class AdminImagesModel : PageModel
    {
        private readonly IHttpClientFactory _clientFactory;

        public AdminImagesModel(IHttpClientFactory clientFactory)
        {
            this._clientFactory = clientFactory;
        }
        public async Task OnGetAsync(int purpose)
        {
            var client = _clientFactory.CreateClient("getImagesClient");

            HttpRequestMessage request = purpose switch
            {
                3 => new HttpRequestMessage(HttpMethod.Get, "http://localhost:5000/images/"),
                _ => new HttpRequestMessage(HttpMethod.Get, $"http://localhost:5000/images/filter/{purpose}"),
            };

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
                ViewData[purpose.ToString()] = "active";
            }
            else
            {
                ViewData["images"] = null;
            }
        }
    }
}

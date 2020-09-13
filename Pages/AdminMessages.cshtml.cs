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
    public class AdminMessagesModel : PageModel
    {
        private readonly IHttpClientFactory _clientFactory;

        public AdminMessagesModel(IHttpClientFactory clientFactory)
        {
            this._clientFactory = clientFactory;
        }
        public async Task OnGetAsync(int status)
        {
            var client = _clientFactory.CreateClient("getProductsClient");

            HttpRequestMessage request = status switch
            {
                2 => new HttpRequestMessage(HttpMethod.Get, "http://localhost:5000/messages/"),
                _ => new HttpRequestMessage(HttpMethod.Get, $"http://localhost:5000/messages/filter/{status}"),
            };

            request.Headers.Add("Accept", "application/json");

            var response = await client.SendAsync(request);

            if (response.IsSuccessStatusCode)
            {
                var data = await response.Content.ReadAsStringAsync();
                var serialized = JsonConvert.DeserializeObject<MessagesResponseModel>(data);

                ViewData["messages"] = serialized.Data;
                ViewData[status.ToString()] = "active";
            }
            else
            {
                ViewData["messages"] = null;
            }
        }
    }
}

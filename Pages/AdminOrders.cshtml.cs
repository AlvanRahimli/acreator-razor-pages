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
    public class AdminOrdersModel : PageModel
    {
        private readonly IHttpClientFactory _clientFactory;
        public AdminOrdersModel(IHttpClientFactory clientFactory)
        {
            this._clientFactory = clientFactory;
        }
        public async Task OnGetAsync(int status)
        {
            var client = _clientFactory.CreateClient("getProductsClient");

            HttpRequestMessage request = status switch
            {
                4 => new HttpRequestMessage(HttpMethod.Get, "http://localhost:5000/orders/"),
                _ => new HttpRequestMessage(HttpMethod.Get, $"http://localhost:5000/orders/filter/{status}"),
            };

            request.Headers.Add("Accept", "application/json");

            var response = await client.SendAsync(request);

            if (response.IsSuccessStatusCode)
            {
                var data = await response.Content.ReadAsStringAsync();
                var serialized = JsonConvert.DeserializeObject<OrdersResponseModel>(data);

                ViewData["orders"] = serialized.Data;
                ViewData[status.ToString()] = "active";
            }
            else
            {
                ViewData["orders"] = null;
            }
        }
    }
}

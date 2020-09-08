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
    public class OrdersModel : PageModel
    {
        private readonly IHttpClientFactory _clientFactory;

        public OrdersModel(IHttpClientFactory clientFactory)
        {
            this._clientFactory = clientFactory;
        }

        public async Task OnGetAsync()
        {
            var client = _clientFactory.CreateClient("getProductsClient");

            var request = new HttpRequestMessage(HttpMethod.Get, "http://localhost:5000/products/");
            request.Headers.Add("Accept", "application/json");

            var response = await client.SendAsync(request);

            if (response.IsSuccessStatusCode)
            {
                var data = await response.Content.ReadAsStringAsync();
                var serialized = JsonConvert.DeserializeObject<ProductsResponseModel>(data);

                ViewData["products"] = serialized.Data;
            }
            else
            {
                ViewData["products"] = null;
            }
        }
    }
}

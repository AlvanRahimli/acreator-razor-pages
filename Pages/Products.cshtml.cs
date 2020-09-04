using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using acreator_front.Models;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace acreator_front.Pages
{
    public class ProductsModel : PageModel
    {
        private readonly ILogger<ProductsModel> _logger;
        private readonly IHttpClientFactory _clientFactory;

        public ProductsModel(ILogger<ProductsModel> logger, IHttpClientFactory clientFactory)
        {
            this._clientFactory = clientFactory;
            _logger = logger;
        }

        public async Task OnGet()
        {
            var client = _clientFactory.CreateClient("getProductsClient");

            var request = new HttpRequestMessage(HttpMethod.Get, "http://localhost:5000/products/");
            request.Headers.Add("Accept", "application/json");
             
            var response = await client.SendAsync(request);

            if (response.IsSuccessStatusCode)
            {
                var data = await response.Content.ReadAsStringAsync();
                var serialized = JsonConvert.DeserializeObject<ProductsResponseModel>(data);

                ViewData["ReturnedProducts"] = serialized.Data;
            }
            else
            {
                ViewData["ReturnedProducts"] = null;
            }

            ViewData["Title"] = "MƏHSULLAR";
            ViewData["products"] = "current";
            ViewData["Subtitle"] = "Məhsullarımızın arasından seçim edərək sifariş edə bilərsiniz.";
        }
    }
}
using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using acreator_front.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Newtonsoft.Json;

namespace acreator_front.Pages
{
    public class AdminModel : PageModel
    {
        private readonly IHttpClientFactory _clientFactory;
        public AdminModel(IHttpClientFactory clientFactory)
        {
            this._clientFactory = clientFactory;
        }

        public async Task OnGetAsync()
        {
            var client = _clientFactory.CreateClient("GetProductList");

            var request = new HttpRequestMessage(HttpMethod.Get, "http://localhost:5000/products/brief");
            request.Headers.Add("Accept", "application/json");

            var response = await client.SendAsync(request);

            if (response.IsSuccessStatusCode)
            {
                var data = await response.Content.ReadAsStringAsync();
                var serialized = JsonConvert.DeserializeObject<BriefResponseModel>(data);

                ViewData["productList"] = serialized.Data;
            }
            else
            {
                ViewData["productList"] = null;
            }
        }
    }
}

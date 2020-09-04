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

        [BindProperty]
        public IFormFile Image { get; set; }

        public void OnGet()
        {
            ViewData["token"] = HttpContext.Session.GetString("token");
        }

        public void OnPost()
        {
            // var form = Request.Form;

            // var client = _clientFactory.CreateClient();
            // client.BaseAddress = new Uri("http://localhost:5000/");
            // client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", HttpContext.Session.GetString("token"));

            // var newProduct = new ProductAddDto()
            // {
            //     Name = form["name"][0],
            //     Price = int.Parse(form["price"][0]),
            //     Image = Image,
            //     Height = int.Parse(form["height"][0]),
            //     Width = int.Parse(form["width"][0]),
            //     Type = (ProductType)int.Parse(form["type"][0]),
            //     ImageUrl = string.Empty
            // };

            // var newProduct = new ProductAddDto();
            // newProduct.Name = form["name"][0];
            // newProduct.Price = Convert.ToInt32(form["price"][0]);
            // newProduct.Image = form.
            // newProduct.Height = Convert.ToInt32(form["height"][0]);
            // newProduct.Width = Convert.ToInt32(form["width"][0]);
            // newProduct.Type = (ProductType)Convert.ToInt32(form["type"][0]);

            // var postTask = client.PostAsJsonAsync<ProductAddDto>("products/new", newProduct);
            // postTask.Wait();
            // var response = postTask.Result;

            var response = HttpContext.Response;
        }
    }
}
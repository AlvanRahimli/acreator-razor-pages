using System;
using System.IO;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using acreator_front.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace acreator_front.Pages
{
    public class LoginModel : PageModel
    {
        private readonly ILogger<LoginModel> _logger;
        private readonly IHttpClientFactory _clientFactory;
        // private readonly ISession _session;

        public LoginModel(ILogger<LoginModel> logger, IHttpClientFactory clientFactory)
        {
            // _session = session;
            _clientFactory = clientFactory;
            _logger = logger;
        }

        public void OnGet()
        {
        }

        public void OnPostAsync()
        {
        //     var loginObj = new Login()
        //     {
        //         Email = Request.Form["email"][0],
        //         Password = Request.Form["password"][0]
        //     };

        //     var client = _clientFactory.CreateClient();
        //     client.BaseAddress = new Uri("http://localhost:5000/");

        //     var postTask = client.PostAsJsonAsync<Login>("auth/login", loginObj);
        //     postTask.Wait();
        //     var response = postTask.Result;

        //     if (response.IsSuccessStatusCode)
        //     {
        //         var data = await response.Content.ReadAsStringAsync();
        //         var deserialized = JsonConvert.DeserializeObject<AdminResponseModel>(data);

        //         ViewData["admin"] = deserialized;
        //         ViewData["token"] = deserialized.Data.token;
        //         HttpContext.Session.SetString("token", deserialized.Data.token);
        //         return RedirectToPage("/admin");
        //     }
        //     else
        //     {
        //         ViewData["admin"] = null;
        //     }

        //     return Redirect("/");
        }
    }
}
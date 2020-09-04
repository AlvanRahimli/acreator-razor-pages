using System.Text;
using Microsoft.AspNetCore.Http;

namespace acreator_front.Utils
{
    public static class Helper
    {
        public static void SetString(this ISession session, string key, string value)
        {
            session.Set(key, Encoding.UTF8.GetBytes(value));
        }
    }
}
using AngleSharp.Dom;
using AngleSharp.Html.Parser;
using System.Linq;
using System.Security.Cryptography;
using System.Text.RegularExpressions;
using System.Web;
using Unihack.Core.Contracts;
using Unihack.Core.Exceptions;
using Unihack.Core.ViewModels;

namespace Unihack.Core.Services
{
    public class ScrapingService : IScrapingService
    {
        private readonly IStolenItemService _itemService;

        public ScrapingService(IStolenItemService itemService)
        {
            _itemService = itemService;
        }

        public async Task<List<AdvertViewModel>> GetOlxPossibleAdverts(int stolenItemId)
        {
            var item = await _itemService.GetStolenItem(stolenItemId);
            if (item is null) throw new ValidationException("Invalid stolen item id!");

            var client = new HttpClient();
            var query = HttpUtility.UrlEncode(item.Title.Replace(" ", "-"));
            var result = await client.GetAsync("https://www.olx.ro/d/oferte/q-" + query + "/");
            var content = await result.Content.ReadAsStringAsync();

            var parser = new HtmlParser();
            var document = parser.ParseDocument(content);
            var elements = document.QuerySelectorAll("div[data-cy=\"l-card\"] a");

            List<AdvertViewModel> adverts = new List<AdvertViewModel>();

            foreach (IElement element in elements)
            {
                var advert = new AdvertViewModel() { AdvertUrl = "https://olx.ro" + element.GetAttribute("href") };
                var imageUrl = element.QuerySelectorAll("img")[0].GetAttribute("src");
                if (imageUrl != null)
                    advert.ImageUrl  = imageUrl.StartsWith("/") ? "https://olx.ro" + imageUrl : imageUrl;
                advert.Title  = element.QuerySelectorAll("h6")[0].TextContent;
                adverts.Add(advert);

            }

            return adverts;
        }
    }
}

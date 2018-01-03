using Microsoft.Extensions.Caching.Memory;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace YC.Web
{
    public static class MemoryCacheExtensions
    {
        public static T Get<T>(this IMemoryCache cache, string key, Func<T> acquire)
        {
            return Get(cache, key, acquire, 60);
        }

        public static T Get<T>(this IMemoryCache cache, string key, Func<T> acquire, int cacheTime)
        {
            var existItem = cache.Get<T>(key);
            if (existItem != null)
            {
                return existItem;
            }
            else
            {
                var result = acquire();
                cache.Set(key, result, new MemoryCacheEntryOptions
                {
                    AbsoluteExpirationRelativeToNow = TimeSpan.FromMinutes(cacheTime)
                });
                return result;
            }
        }
    }
}

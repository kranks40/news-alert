import { gql } from "graphql-request";
import sortNews from "./sortNews";

const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: Boolean
) => {
  //GraphQl query
  const query = gql`
    query MyQuery(
      $access_key: String!
      $categories: String!
      $keywords: String
    ) {
      myQuery(
        access_key: $access_key
        categories: $categories
        countries: "gb"
        sort: "published_desc"
        keywords: $keywords
      ) {
        data {
          author
          category
          country
          description
          image
          language
          published_at
          source
          title
          url
        }
        pagination {
          count
          limit
          offset
          total
        }
      }
    }
  `;
  //fetch fucntion with Next.js 13 cashing...
  const res = await fetch(
    "https://regla.stepzen.net/api/famous-shrimp/__graphql",
    {
      method: "POST",
      cache: isDynamic ? "no-cache" : "default",
      next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
      },
      body: JSON.stringify({
        query,
        variables: {
          access_key: process.env.MEDIASTACK_API_ACCESS_KEY,
          categories: category,
          keywords: keywords,
        },
      }),
    }
  );

  console.log("loading new data from api for category >>>", category, keywords);
  
  const newsResponse = await res.json()

  //sort function by images vs not images present
  const news = sortNews(newsResponse.data.myQuery)
  //return results
  return news
};

export default fetchNews;

// stepzen import curl "http://api.mediastack.com/v1/news?access_key=4e41ad2b1a995ab6babf6f16418fe793&countries=us%2Cgb&limit=100&offset=0&sort=published_desc"

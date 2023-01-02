import { categories } from "../constants";
import fetchNews from "../lib/fetchNews";


 const Homepage = async () => {
  //fetch news data
  const news: NewsResponse = await fetchNews(categories.join(','))

  console.log(news)

  return (
  <div>
    {/* NewList */}
    </div>
  )
};

export default Homepage;

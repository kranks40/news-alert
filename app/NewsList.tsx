import Article from "./Article";

type Props = {
  news: NewsResponse;
};

const NewsList = ({ news }: Props) => {
  return (
    <main className="grid grid-col-1 md:grid-col-2 lg:grid-col-3 p-10 gap-10">
      {news.data.map((article) => (
        <Article key={article.title} article={article} />
      ))}
    </main>
  );
};

export default NewsList;

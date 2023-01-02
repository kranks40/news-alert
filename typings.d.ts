
type Article = {
  author: string | null;
  category: string;
  country: string;
  description: string;
  image: string | null;
  language: string;
  published_at: string;
  source: string;
  title: string;
  url: string;
};

type Pageination = {
  count: Int;
  limit: Int;
  offset: Int;
  total: Int;
};

type NewsResponse = {
  pagination: Pageination;
  data: Article[];
};

type Category =
  | "Business"
  | "Entertainment"
  | "General"
  | "Health"
  | "Science"
  | "Sports"
  | "Technology";
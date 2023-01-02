import Link from "next/link";

type Props = {
  category: string;
  isActive: boolean;
};

const Navlink = ({ category, isActive }: Props) => {
  return (
    <Link
      href={`/news/${category}`}
      className={`navlink ${
        isActive &&
        "underline decoration-blue-400 underline-offset-4 font-bold text-lg"
      } : navlink`}
    >
      {category}
    </Link>
  );
};

export default Navlink;

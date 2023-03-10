"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const SearchBox = () => {
  const [input, setInput] = useState("");
  const router = useRouter();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;
    router.push(`/search?term=${input}`)
  };

  return (
    <form
      onSubmit={handleSearch}
      className="max-w-6xl mx-auto flex justify-between item-cente pd-5"
    >
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search for News..."
        className="flex-1 w-full h-14 outline-none rounded-sm placeholder-gray-500 text-gray-500 bg-transparent dark:text-arange-400"
        type="text"
      />
      <button
        type="submit"
        disabled={!input}
        className="text-orange-400 disabled:text-gray-400"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBox;

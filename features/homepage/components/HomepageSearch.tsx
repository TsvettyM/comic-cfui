import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";

interface IProps {
  setCurrentComic: (data: ComicData) => void;
}

const HomepageSearch = ({ setCurrentComic }: IProps) => {
  const [inputValue, setInputValue] = useState<string | null>(null);
  const [error, setError] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();

    axios
      .get(`/comics/${inputValue}`)
      .then((res) => setCurrentComic(res.data))
      .catch(() => {
        setError("Comic ID must be between 1 and 5");
      });
  }

  function handleValueChange(e: ChangeEvent<HTMLInputElement>) {
    setError("");
    setInputValue(e.target.value || null);
  }

  return (
    <div className="homepage__search max-w-max mx-auto">
      <p className="text-2xl font-bold my-3">Search comic by ID</p>

      <form onSubmit={onSubmit} className="flex space-x-2">
        <input
          onChange={handleValueChange}
          placeholder="Comics number"
          maxLength={1}
          className="w-full flex items-center gap-2 h-11 bg-white border border-black rounded-md p-3 text-left"
        />

        <button
          type="submit"
          className="text-xl text-white bg-black p-2 rounded-md"
        >
          Find
        </button>
      </form>

      {error ? <p>{error}</p> : null}
    </div>
  );
};

export default HomepageSearch;

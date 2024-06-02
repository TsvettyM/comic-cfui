import IconNext from "@/features/icons/components/IconNext";
import IconPrev from "@/features/icons/components/IconPrev";
import axios from "axios";

interface IProps {
  currentComicNumber: number;
  setCurrentComic: (data: ComicData) => void;
  setError: (error: string) => void;
}

type ButtonType = "prev" | "random" | "next" | "first" | "last";

const HomepageButtons = (props: IProps) => {
  const { currentComicNumber, setCurrentComic, setError } = props;

  function handleButtonClick(type: ButtonType) {
    switch (type) {
      case "next":
        if (currentComicNumber < 5) {
          axios
            .get(`/comics/${currentComicNumber + 1}`)
            .then((res) => setCurrentComic(res.data))
            .catch(() => {
              setError("Error fetching comic. Please reload page.");
            });
        }
        break;
      case "prev":
        if (currentComicNumber > 1) {
          axios
            .get(`/comics/${currentComicNumber - 1}`)
            .then((res) => setCurrentComic(res.data))
            .catch(() => {
              setError("Error fetching comic. Please reload page.");
            });
        }
        break;
      case "random":
        axios
          .get(`/comics/${Math.floor(Math.random() * 5) + 1}`)
          .then((res) => setCurrentComic(res.data))
          .catch(() => {
            setError("Error fetching comic. Please reload page.");
          });
        break;
      case "first":
        if (currentComicNumber !== 1) {
          axios
            .get("/comics/1")
            .then((res) => setCurrentComic(res.data))
            .catch(() => {
              setError("Error fetching comic. Please reload page.");
            });
        }
        break;
      case "last":
        if (currentComicNumber !== 5) {
          axios
            .get("/comics/5")
            .then((res) => setCurrentComic(res.data))
            .catch(() => {
              setError("Error fetching comic. Please reload page.");
            });
        }
        break;
    }
  }

  return (
    <div className="homepage__buttons gap-5 flex flex-wrap justify-center max-w-[350px] mx-auto">
      <button
        type="button"
        className="flex justify-center items-center border border-black text-xl rounded-md py-2 px-3"
        onClick={() => handleButtonClick("prev")}
      >
        <IconPrev /> Prev
      </button>
      <button
        type="button"
        className="flex justify-center items-center border border-black text-xl rounded-md py-2 px-3"
        onClick={() => handleButtonClick("random")}
      >
        Random
      </button>
      <button
        type="button"
        className="flex justify-center items-center border border-black text-xl rounded-md py-2 px-3"
        onClick={() => handleButtonClick("next")}
      >
        Next <IconNext />
      </button>

      <div className="flex space-x-3">
        <button
          type="button"
          className="flex justify-center items-center border border-black text-xl rounded-md py-2 px-3"
          onClick={() => handleButtonClick("first")}
        >
          <IconPrev /> First
        </button>
        <button
          type="button"
          className="flex justify-center items-center border border-black text-xl rounded-md py-2 px-3"
          onClick={() => handleButtonClick("last")}
        >
          Last <IconNext />
        </button>
      </div>
    </div>
  );
};

export default HomepageButtons;

import axios from "axios";
import { useEffect, useState } from "react";
import HomepageButtons from "./HomepageButtons";
import Image from "next/image";
import HomepageSearch from "./HomepageSearch";

const HomepageView = () => {
  const [currentComic, setCurrentComic] = useState<ComicData | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("/comics/1")
      .then((res) => setCurrentComic(res.data))
      .catch(() => {
        setError("Error fetching comic. Please reload page.");
      });
  }, []);

  if (!currentComic) {
    return error;
  }

  return (
    <div className="homepage__view max-w-[1000px] px-5 h-auto m-auto flex flex-col justify-center items-center py-10">
      <h1 className="text-5xl font-bold mb-5">XKCD Comics</h1>

      <HomepageButtons
        setCurrentComic={setCurrentComic}
        setError={setError}
        currentComicNumber={currentComic.num}
      />

      <div className="relative w-full max-w-[500px] aspect-video my-10">
        <Image
          src={currentComic.img}
          alt={currentComic.alt}
          fill
          draggable={false}
        />
      </div>

      <HomepageSearch setCurrentComic={setCurrentComic} />
    </div>
  );
};

export default HomepageView;

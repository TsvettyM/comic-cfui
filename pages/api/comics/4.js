export default function handler(req, res) {
  const comic = {
    month: "1",
    num: 4,
    link: "",
    year: "2006",
    news: "",
    safe_title: "Landscape (sketch)",
    transcript:
      "[[A sketch of a landscape with sun on the horizon]]\n{{Alt: There's a river flowing through the ocean}}",
    alt: "There's a river flowing through the ocean",
    img: "https://imgs.xkcd.com/comics/landscape_cropped_(1).jpg",
    title: "Landscape (sketch)",
    day: "1",
  };

  res.status(200).json(comic);
}

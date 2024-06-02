export default function handler(req, res) {
  const comic = {
    month: "1",
    num: 3,
    link: "",
    year: "2006",
    news: "",
    safe_title: "Island (sketch)",
    transcript: "[[A sketch of an Island]]\n{{Alt:Hello, island}}",
    alt: "Hello, island",
    img: "https://imgs.xkcd.com/comics/island_color.jpg",
    title: "Island (sketch)",
    day: "1",
  };

  res.status(200).json(comic);
}

export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

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

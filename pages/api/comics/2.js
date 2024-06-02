export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  const comic = {
    month: "1",
    num: 2,
    link: "",
    year: "2006",
    news: "",
    safe_title: "Petit Trees (sketch)",
    transcript:
      "[[Two trees are growing on opposite sides of a sphere.]]\n{{Alt-title: 'Petit' being a reference to Le Petit Prince, which I only thought about halfway through the sketch}}",
    alt: "'Petit' being a reference to Le Petit Prince, which I only thought about halfway through the sketch",
    img: "https://imgs.xkcd.com/comics/tree_cropped_(1).jpg",
    title: "Petit Trees (sketch)",
    day: "1",
  };

  res.status(200).json(comic);
}

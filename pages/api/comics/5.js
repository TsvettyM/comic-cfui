export default function handler(req, res) {
  const comic = {
    month: "1",
    num: 5,
    link: "",
    year: "2006",
    news: "",
    safe_title: "Blown apart",
    transcript:
      "[[A black number 70 sees a red package.]]\n70: hey, a package!\n[[The package explodes with a <<BOOM>> and a red cloud of smoke.]]\n[[There are a red 7, a green 5 and a blue 2 lying near a scorched mark on the floor.]]\n{{alt text: Blown into prime factors}}",
    alt: "Blown into prime factors",
    img: "https://imgs.xkcd.com/comics/blownapart_color.jpg",
    title: "Blown apart",
    day: "1",
  };

  res.status(200).json(comic);
}

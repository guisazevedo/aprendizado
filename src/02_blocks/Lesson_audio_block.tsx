import CardContent from "../01_components/CardContent";

// inputs for cards
const icon = <i className="bi bi-headphones h5"></i>;

const cards = [
  {
    title: "Audio 1: Tema",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, earum!",
    part: "Duracao: 10 min",
    play: icon,
    image: "/00_assets/images/class_1.jpg",
  },
  {
    title: "Audio 2: Tema",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, earum!",
    part: "Duracao: 10 min",
    play: icon,
    image: "/00_assets/images/class_1.jpg",
  },
  {
    title: "Audio 3: Tema",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, earum!",
    part: "Duracao: 10 min",
    play: icon,
    image: "/00_assets/images/class_1.jpg",
  },
  {
    title: "Audio 4: Tema",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, earum!",
    part: "Duracao: 10 min",
    play: icon,
    image: "/00_assets/images/class_1.jpg",
  },
  {
    title: "Audio 5: Tema",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, earum!",
    part: "Duracao: 10 min",
    play: icon,
    image: "/00_assets/images/class_1.jpg",
  },
];

const Lesson_audio_block = () => {
  return (
    <>
      {" "}
      {cards.map((card) => (
        <CardContent
          title={card.title}
          description={card.description}
          part={card.part}
          image={card.image}
          play={card.play}
        />
      ))}
    </>
  );
};

export default Lesson_audio_block;

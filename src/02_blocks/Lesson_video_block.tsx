// inputs for cards

import CardContent from "../01_components/CardContent";

// TODO => organize
const cards = [
  {
    title: "Video 1: Tema",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, earum!",
    part: "Duracao: 10 min",
    play: <i className="bi bi-film h5"></i>,
    image: "/src/00_assets/images/class_1.jpg",
  },
  {
    title: "Video 2: Tema",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, earum!",
    part: "Duracao: 10 min",
    play: <i className="bi bi-film h5"></i>,
    image: "/src/00_assets/images/class_1.jpg",
  },
  {
    title: "Video 3: Tema",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, earum!",
    part: "Duracao: 10 min",
    play: <i className="bi bi-film h5"></i>,
    image: "/src/00_assets/images/class_1.jpg",
  },
  {
    title: "Video 4: Tema",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, earum!",
    part: "Duracao: 10 min",
    play: <i className="bi bi-film h5"></i>,
    image: "/src/00_assets/images/class_1.jpg",
  },
  {
    title: "Video 5: Tema",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, earum!",
    part: "Duracao: 10 min",
    play: <i className="bi bi-film h5"></i>,
    image: "/src/00_assets/images/class_1.jpg",
  },
];

const Lesson_video_block = () => {
  return (
    <>
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

export default Lesson_video_block;

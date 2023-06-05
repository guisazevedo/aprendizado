// inputs for cards
import CardContent from "../01_components/CardContent";

// TODO => organize
const cards = [
  {
    title: "Licao 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, earum!",
    part: "Parte 1",
    play: <i className="bi bi-film"></i>,
    image: "/src/00_assets/images/class_1.jpg",
  },
  {
    title: "Licao 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, earum!",
    part: "Parte 2",
    play: <i className="bi bi-film h5"></i>,
    image: "/src/00_assets/images/class_1.jpg",
  },
  {
    title: "Licao 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, earum!",
    part: "Parte 2",
    play: <i className="bi bi-film h5"></i>,
    image: "/src/00_assets/images/class_1.jpg",
  },
  {
    title: "Licao 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, earum!",
    part: "Parte 2",
    play: <i className="bi bi-film h5"></i>,
    image: "/src/00_assets/images/class_1.jpg",
  },
];

const Video_block = () => {
  return (
    <div className="container col border border-primary">
      {cards.map((card) => (
        <div className="row m-3 container">
          <CardContent
            title={card.title}
            description={card.description}
            part={card.part}
            image={card.image}
            play={card.play}
          />
        </div>
      ))}
    </div>
  );
};

export default Video_block;

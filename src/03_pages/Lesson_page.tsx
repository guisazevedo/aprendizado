import CardContent from "../01_components/CardContent";
// import Faq from "../01_components/Faq";
import Footer from "../01_components/Footer";
import HeaderText from "../01_components/HeaderText";
import Navbar from "../01_components/Navbar";

// inputs for the HeaderText component
const header = "Licao 1";
const sub_header = "E vai comecar agora ....";
const text =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat error voluptatem voluptates dolor est debitis quae incidunt quas ipsa et eveniet nulla dignissimos dolorum numquam soluta dolore, possimus nisi corrupti.";

// inputs for cards
// TODO => organize
const cards = [
  {
    title: "Licao 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, earum!",
    part: "Parte 1",
    play: <i className="bi bi-film h5"></i>,
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
];

const Lesson_page = () => {
  return (
    <>
      <Navbar />
      <div className="py-5"></div>
      <div>
        <HeaderText header={header} sub_header={sub_header} text={text} />

        <div className="container text-center py-5">
          <h1>LESSON PAGE</h1>
          <h2>VIDEOS / AUDIOS</h2>
          <h2>TEXTS / DOCS</h2>
          {cards.map((card) => (
            <CardContent
              title={card.title}
              description={card.description}
              part={card.part}
              image={card.image}
              play={card.play}
            />
          ))}
        </div>
      </div>
      {/* <Faq /> */}
      <div className="p-5"></div>
      <Footer />
    </>
  );
};

export default Lesson_page;

// TODO => fazer lesson_block video -> lesson_block audio -> lesson_block text -> lesson_block doc

// TODO => ver FAQ

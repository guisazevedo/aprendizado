import Content from "../01_components/Content";
import Footer from "../01_components/Footer";
import HeaderText from "../01_components/HeaderText";
import Navbar from "../01_components/Navbar";

// inputs for the HeaderText component
const header = "Conteudo programatico";
const sub_header = "Licoes e exercicios";
const text =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae deserunt obcaecati ullam aperiam velit voluptate aspernatur beatae ut doloribus non placeat aut, saepe vero. ";

// inputs for the Content component
const cards = [
  {
    image: "/src/00_assets/images/class_1.jpg",
    title: "Licao 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, voluptatibus?",
    objective_1: "Aprender isso",
    objective_2: "depois isso",
    objective_3: "e termina com isso",
    button: "Iniciar",
  },
  {
    image: "/src/00_assets/images/class_1.jpg",
    title: "Licao 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, voluptatibus?",
    objective_1: "Aprender +",
    objective_2: "depois +",
    objective_3: "e termina com +",
    button: "Iniciar",
  },
  {
    image: "/src/00_assets/images/class_1.jpg",
    title: "Licao 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, voluptatibus?",
    objective_1: "Aprender isso",
    objective_2: "depois isso",
    objective_3: "e termina com isso",
    button: "Iniciar",
  },
  {
    image: "/src/00_assets/images/class_1.jpg",
    title: "Licao 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, voluptatibus?",
    objective_1: "Aprender +",
    objective_2: "depois +",
    objective_3: "e termina com +",
    button: "Iniciar",
  },
  {
    image: "/src/00_assets/images/class_1.jpg",
    title: "Licao 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, voluptatibus?",
    objective_1: "Aprender isso",
    objective_2: "depois isso",
    objective_3: "e termina com isso",
    button: "Iniciar",
  },
  {
    image: "/src/00_assets/images/class_1.jpg",
    title: "Licao 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, voluptatibus?",
    objective_1: "Aprender +",
    objective_2: "depois +",
    objective_3: "e termina com +",
    button: "Iniciar",
  },
];

const Content_page = () => {
  return (
    <>
      <Navbar />
      <div className="py-5"></div>
      <HeaderText header={header} sub_header={sub_header} text={text} />
      <div className="row text-center me-3">
        {cards.map((card) => (
          <div className="col-sm">
            <Content
              image={card.image}
              title={card.title}
              description={card.description}
              objective_1={card.objective_1}
              objective_2={card.objective_2}
              objective_3={card.objective_3}
              button={card.button}
            />
          </div>
        ))}
      </div>

      <div className="p-5"></div>
      <Footer />
    </>
  );
};

export default Content_page;

// TODO => criar links para as paginas de conteudo

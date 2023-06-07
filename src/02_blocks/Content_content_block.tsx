import Content from "../01_components/Content";

// inputs for the Content component => always leave the last card empty
const cards = [
  {
    image: "/00_assets/images/class_1.jpg",
    title: "Nivel 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, voluptatibus?",
    objective_1: "Aprender isso",
    objective_2: "depois isso",
    objective_3: "e termina com isso",
    button: "Iniciar",
    button_link: "/lesson_1",
  },
  {
    image: "/00_assets/images/class_1.jpg",
    title: "Nivel 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, voluptatibus?",
    objective_1: "Aprender isso",
    objective_2: "depois isso",
    objective_3: "e termina com isso",
    button: "Iniciar",
    button_link: "",
  },
  {
    image: "/00_assets/images/class_1.jpg",
    title: "Nivel 3",
    description: "",
    objective_1: "",
    objective_2: "",
    objective_3: "",
    button: "Em Breve",
    button_link: "",
    placeholder: <span className="placeholder col-8"></span>,
  },
];

const Content_content_block = () => {
  return (
    <>
      <div className="row justify-content-center">
        {cards.map((card) => (
          <div
            className="col-lg-3"
            style={{
              minWidth: "400px",
              maxWidth: "500px",
            }}
          >
            <Content
              image={card.image}
              title={card.title}
              description={card.description}
              objective_1={card.objective_1}
              objective_2={card.objective_2}
              objective_3={card.objective_3}
              button={card.button}
              button_link={card.button_link}
              placeholder={card.placeholder}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Content_content_block;

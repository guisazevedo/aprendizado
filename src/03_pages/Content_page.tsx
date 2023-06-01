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
const image = "/src/00_assets/images/class_1.jpg";
const title = "Licao 1";
const description =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, voluptatibus?";
const objective_1 = "Aprender isso";
const objective_2 = "depois isso";
const objective_3 = "e termina com isso";
const button = "Iniciar";

const Content_page = () => {
  return (
    <>
      <Navbar />
      <div className="p-5"></div>
      <HeaderText header={header} sub_header={sub_header} text={text} />
      <Content
        image={image}
        title={title}
        description={description}
        objective_1={objective_1}
        objective_2={objective_2}
        objective_3={objective_3}
        button={button}
      />
      <div className="p-5"></div>
      <Footer />
    </>
  );
};

export default Content_page;

// TODO => criar links para as paginas de conteudo

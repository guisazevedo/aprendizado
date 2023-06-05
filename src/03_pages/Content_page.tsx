import Navbar from "../01_components/Navbar";
import Content_header_block from "../02_blocks/Content_header_block";
import Content from "../01_components/Content";
import Footer from "../01_components/Footer";
import Content_content_block from "../02_blocks/Content_content_block";

// inputs for the Content component => always leave the last card empty
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
    title: "",
    description: "",
    objective_1: "",
    objective_2: "",
    objective_3: "",
    button: "Breve",
    placeholder: <span className="placeholder col-8"></span>,
  },
];

const Content_page = () => {
  return (
    <>
      <Navbar />
      <div className="py-5"></div>
      <Content_header_block />
      <div className="py-2"></div>
      <Content_content_block />
      <div className="p-5"></div>
      <Footer />
    </>
  );
};

export default Content_page;

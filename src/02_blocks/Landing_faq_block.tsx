import Faq from "../01_components/Faq";
import HeaderText from "../01_components/HeaderText";

// inputs for the HeaderText component
const header = "Perguntas frequentes!!";
const sub_header =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, aut.";
const text = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptate omnis harum eum doloribus, aut ad, enim eveniet asperiores cumque ipsum aspernatur expedita quae temporibus voluptates magnam, impedit quo beatae.",
];

// inputs for FAQ component
const questions = [
  {
    question: "Quanto custa o curso?",
    collapse: "collapseOne",
    answer:
      "Esta e uma plataforma sem fins lucrativos. Todo nosso conteudo eh livre e gratuito. Basta se registrar no site e voce tera acesso a todo o conteudo.",
  },
  {
    question: "Posso acessar o conteúdo de qualquer lugar?",
    collapse: "collapseTwo",
    answer:
      "Sim, você pode acessar o conteúdo de qualquer lugar, basta ter um dispositivo com acesso a internet.",
  },
  {
    question: "Posso acessar todo o conteudo de uma so vez??",
    collapse: "collapseThree",
    answer:
      "Nossa experiencia mostra que assistir o conteudo em ordem gera uma maior absorcao do material. Por isso cada video e liberado apos o termino do anterior.",
  },
  {
    question: "O que (pergunta 4)...?",
    collapse: "collapseFour",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi laudantium repudiandae nobis consectetur dolorem asperiores id dicta aut officiis doloribus modi saepe, facere voluptatibus harum et sequi quos ducimus?",
  },
];

const Landing_faq_block = () => {
  return (
    <>
      <HeaderText header={header} sub_header={sub_header} text={text} />
      <div className="p-2"></div>
      <Faq questions={questions} />
    </>
  );
};

export default Landing_faq_block;

// TODO => create Landing_faq_block and Landing_header_block

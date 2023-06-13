import BacktoTop from "../01_components/BacktoTop";
import Faq from "../01_components/Faq";
import HeaderText from "../01_components/HeaderText";

// inputs for the HeaderText component
const header = "Perguntas frequentes";
const sub_header = "Perguntas sobre o funcionamento da plataforma."; // TODO => quebrar em funcionamento plataforma & conteudo
const text = [""];

// inputs for FAQ component
const questions = [
  {
    question: "Quanto custa o acesso?",
    collapse: "collapseOne",
    answer:
      "Esta e uma plataforma sem fins lucrativos. Todo nosso conteudo é gratuito. Basta se registrar no site e voce tera acesso a todo o conteudo.",
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
    question: "Quais os assuntos apresentados?",
    collapse: "collapseFour",
    answer:
      "Esta plataforma digital foi criada para reunir estudos da mente e do desenvolvimento espiritual do ser humano, e motivar cada indivíduo para uma ampliação de consciência até a plena convicção de que somos parte de uma grandiosa obra.",
  },
  {
    question: "2.	É recomendado algum conhecimento prévio dos temas?",
    collapse: "collapseFive",
    answer:
      "Não é necessário. O mais importante é ter a vontade de aprender, de querer saber mais sobre a mente, energias, sobre o potencial do ser humano para uma vida de plena consciência e total integração com o mundo mais sutil.",
  },
  {
    question: "Como participar??",
    collapse: "collapseSix",
    answer:
      "Você vai encontrar uma sequência de vídeos/aulas, áudios de explicação e condução de treinamentos e exercícios, textos de pontos principais das aulas em PDF para download, além de links e referências de publicações e estudos da nova ciência e da medicina holística.",
  },
];

const Landing_faq_block = () => {
  return (
    <>
      <HeaderText header={header} sub_header={sub_header} text={text} />
      <div className="p-2"></div>
      <Faq questions={questions} />
      <BacktoTop />
    </>
  );
};

export default Landing_faq_block;

import Footer from "../01_components/Footer";
import HeaderText from "../01_components/HeaderText";
import Navbar from "../01_components/Navbar";
import Video from "../01_components/Video";
import Faq from "../01_components/Faq";

// inputs for the HeaderText component
const header = "Bem vindo!!";
const sub_header =
  "O Ser Humano procura um Mundo Melhor. Todo mundo quer ser feliz, quer ter a Paz.";
const text =
  "Nossa vivencia de mais de 40 anos comprometidos com o estudo da Mente e do Ser Humano, com o aprender e ensinar, com a ampliação da Visão de Mundo, nos mostra que para construir esse Mundo Melhor precisamos expandir a nossa Consciência, enxergar além, a Grandiosidade da Vida e a maravilhosa arquitetura Universal que nos proporciona a oportunidade de atuar neste meio, neste sistema planetário onde tudo está interligado. Todos fazemos parte da mesma Unidade, não estamos isolados, estamos todos juntos! Seres Humanos, Natureza, Planeta, Universo, Somos Todos Um! Trazemos nesta plataforma um caminho certeiro, o do conhecimento ordenado sintetizado em pontos chaves, pontos filosóficos, treinamentos mentais, meditação, reflexão e ampliação de sentir.Esse caminho que traz essa ampliação de consciência tem como objetivo reconhecer e motivar a intensa vontade de atuar e de se integrar a essa Grandiosa Obra.Entre, estude, perceba cada ponto de conhecimento e como essa teia de pontos se amplia até formar uma rede cada vez mais abrangente, para trazer a Verdade da nossa existência.Somos parte, somos unidade e somos o Todo.O Conhecimento liberta, traz Justiça e Paz.Essa é a Lei Universal.";

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

const Landing_page = () => {
  return (
    <>
      <Navbar />
      <div className="p-5"></div>
      <HeaderText header={header} sub_header={sub_header} text={text} />
      <Video />
      <Faq questions={questions} />
      <div className="p-5"></div>
      <Footer />
    </>
  );
};

export default Landing_page;

// TODO => break faq

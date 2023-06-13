import BacktoTop from "../01_components/BacktoTop";
import Faq from "../01_components/Faq";
import HeaderText from "../01_components/HeaderText";

// inputs for the HeaderText component
const header = "Perguntas frequentes";
const sub_header = "Perguntas sobre o funcionamento da plataforma"; // TODO => quebrar em funcionamento plataforma & conteudo
const text = [""];

// inputs for FAQ component
const questions = [
  {
    question: "Quanto custa o acesso?",
    collapse: "collapseOne",
    answer:
      "Esta é uma plataforma sem fins lucrativos. Todo nosso conteúdo é gratuito. Basta registra-se e entrar com seu e-mail e senha.",
  },
  {
    question: "2)	Posso acessar o conteúdo a hora que eu quiser?",
    collapse: "collapseTwo",
    answer:
      "Sim, a plataforma é permanente. Todos o material fica disponível através do seu login.",
  },
  {
    question: "Posso acessar todo o conteúdo de uma só vez?",
    collapse: "collapseThree",
    answer:
      "Nossa experiência mostra que assistir vídeos e áudios na sequência programada gera melhor entendimento e resultado. Por isso, cada material é liberado automaticamente após o término do anterior.",
  },
  {
    question: "4)	Quais os assuntos apresentados?",
    collapse: "collapseFour",
    answer:
      "Esta plataforma digital foi criada para reunir estudos da mente e do desenvolvimento espiritual do ser humano, e motivar cada indivíduo para uma ampliação de consciência até a plena convicção de que somos parte de uma grandiosa obra.",
  },
  {
    question: "5)	É recomendado algum conhecimento prévio dos temas?",
    collapse: "collapseFive",
    answer:
      "Não é necessário. O mais importante é a vontade de aprender, de querer saber mais sobre a mente, sobre energia, sobre o potencial do ser humano para uma vida de plena consciência e total integração com o mundo mais sutil.",
  },
  {
    question: "6)	Como será a participação?",
    collapse: "collapseSix",
    answer:
      "Você vai encontrar uma série de vídeos/aulas, áudios de explicação e condução de treinamentos, textos de pontos principais das aulas em PDF para download, além de links e referências de publicações e estudos da nova ciência.",
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

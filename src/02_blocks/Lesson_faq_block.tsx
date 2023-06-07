import Faq from "../01_components/Faq";
import HeaderText from "../01_components/HeaderText";

// inputs for the HeaderText component
const header = "Perguntas frequentes sobre a aula";
const sub_header =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, aut.";
const text = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptate omnis harum eum doloribus, aut ad, enim eveniet asperiores cumque ipsum aspernatur expedita quae temporibus voluptates magnam, impedit quo beatae.",
];

// inputs for FAQ component
const questions = [
  {
    question: "Pergunta n...?",
    collapse: "collapseOne",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda temporibus excepturi maiores maxime cum vel?",
  },
  {
    question: "Pergunta n...?",
    collapse: "collapseTwo",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda temporibus excepturi maiores maxime cum vel?",
  },
  {
    question: "Pergunta n...?",
    collapse: "collapseThree",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda temporibus excepturi maiores maxime cum vel?",
  },
  {
    question: "Pergunta n...?",
    collapse: "collapseFour",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda temporibus excepturi maiores maxime cum vel?",
  },
];

const Lesson_faq_block = () => {
  return (
    <>
      {" "}
      <HeaderText header={header} sub_header={sub_header} text={text} />
      <div className="p-2"></div>
      <Faq questions={questions} />
    </>
  );
};

export default Lesson_faq_block;

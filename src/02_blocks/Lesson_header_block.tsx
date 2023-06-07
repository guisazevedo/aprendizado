import HeaderText from "../01_components/HeaderText";

// inputs for the HeaderText component
const header = "Nivel 1";
const sub_header = "E vai comecar agora ....";
const text = [
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat error voluptatem voluptates dolor est debitis quae incidunt quas ipsa et eveniet nulla dignissimos dolorum numquam soluta dolore, possimus nisi corrupti.",
];

const Lesson_header_block = () => {
  return (
    <>
      <HeaderText header={header} sub_header={sub_header} text={text} />
    </>
  );
};

export default Lesson_header_block;

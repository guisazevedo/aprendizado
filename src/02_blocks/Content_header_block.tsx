import HeaderText from "../01_components/HeaderText";

// inputs for the HeaderText component
const header = "Conteudo programatico";
const sub_header = "Licoes e exercicios";
const text = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae deserunt obcaecati ullam aperiam velit voluptate aspernatur beatae ut doloribus non placeat aut, saepe vero.",
];

const Content_header_block = () => {
  return (
    <>
      <HeaderText header={header} sub_header={sub_header} text={text} />
    </>
  );
};

export default Content_header_block;

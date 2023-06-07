import HeaderText from "../01_components/HeaderText";

// inputs for the HeaderText component
const header = "Quem somos";
const sub_header = "Nos somos....";
const text = [
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat error voluptatem voluptates dolor est debitis quae incidunt quas ipsa et eveniet nulla dignissimos dolorum numquam soluta dolore, possimus nisi corrupti.",
];

const About_header_block = () => {
  return (
    <>
      <HeaderText header={header} sub_header={sub_header} text={text} />
    </>
  );
};

export default About_header_block;

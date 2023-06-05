import HeaderText from "../01_components/HeaderText";

// inputs for the HeaderText component
const header = "Entre em contato";
const sub_header = "";
const text = "Deixe sua mensagem que entraremos em contato!";

const Contato_header_block = () => {
  return (
    <>
      <HeaderText header={header} sub_header={sub_header} text={text} />
    </>
  );
};

export default Contato_header_block;

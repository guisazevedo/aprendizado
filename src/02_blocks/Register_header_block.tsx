import HeaderText from "../01_components/HeaderText";

// inputs for the HeaderText component
const header = "Registro";
const sub_header = "";
const text = ["Registre-se aqui para iniciar sua jornada!"];

const Register_header_block = () => {
  return (
    <>
      <HeaderText header={header} sub_header={sub_header} text={text} />
    </>
  );
};

export default Register_header_block;

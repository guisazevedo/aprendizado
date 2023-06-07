import HeaderText from "../01_components/HeaderText";

// inputs for the HeaderText component
const header = "Login";
const sub_header = "";
const text = ["Efetue o login para acessar o conteudo!"];

const Login_header_block = () => {
  return (
    <>
      <>
        <HeaderText header={header} sub_header={sub_header} text={text} />
      </>
    </>
  );
};

export default Login_header_block;

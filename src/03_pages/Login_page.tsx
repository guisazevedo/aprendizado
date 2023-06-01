import Footer from "../01_components/Footer";
import Navbar from "../01_components/Navbar";
import Register from "../01_components/Register";

// inputs for the HeaderText component
const header = "Login";
const sub_header = "";
const text = "Efetue o login para acessar o conteudo!";

// inputs for the email/password components
const register_items = [
  {
    title: "Email",
    type: "email",
    id: "exampleInputEmail1",
    text: "Nos nao iremos compartilhar seu email com ninguem",
  },
  {
    title: "Senha",
    type: "password",
    id: "exampleInputPassword1",
    text: "Sua senha deve ser de 8-20 caracteres, conter letras e numeros, e nao deve conter spacos ou emojis",
  },
];

const execute_items = [
  {
    text: "Manter-me conectado",
    button: "Login",
    alternative: "Precisa de uma conta?",
  },
];

const Login_page = () => {
  return (
    <>
      <Navbar />
      <div className="p-5"></div>
      <Register
        header={header}
        sub_header={sub_header}
        text={text}
        register_items={register_items}
        execute_items={execute_items}
      />
      <div className="p-5"></div>
      <Footer />
    </>
  );
};

export default Login_page;

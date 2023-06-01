import Navbar from "../01_components/Navbar";
import Register from "../01_components/Register";
import Footer from "../01_components/Footer";

// inputs for the HeaderText component
const header = "Registro";
const sub_header = "";
const text = "Registre-se aqui para iniciar o seu aprendizado!";

// inputs for the email/password components
const register_items = [
  {
    title: "Nome e sobrenome",
    type: "name",
    id: "exampleInputName1",
    text: "Como devemos te chamar?",
  },
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
  {
    title: "Confirme a Senha",
    type: "password",
    id: "exampleInputPassword2",
    text: "Sua senha deve ser de 8-20 caracteres, conter letras e numeros, e nao deve conter spacos ou emojis",
  },
];

const execute_items = [
  {
    text: "Concordo com termos e condicoes",
    button: "Registrar-se",
    button_link: "/login",
    alternative: "Ja possui uma conta?",
    alternative_link: "/login",
  },
];

const Register_page = () => {
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

export default Register_page;

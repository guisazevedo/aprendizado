import Navbar from "../01_components/Navbar";
import Register from "../01_components/Register";
import Footer from "../01_components/Footer";

// inputs for the HeaderText component
const header = "Entre em contato";
const sub_header = "";
const text = "Deixe sua mensagem que entraremos em contato!";

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
    text: "Nos nao iremos compartilhar seu email com ninguem.",
  },
  {
    title: "Mensagem",
    type: "message",
    id: "exampleInputMessage1",
    text: "Deixe uma breve mensagem e retornaremos em breve.",
  },
];

const execute_items = [
  {
    text: "Me envie uma copia",
    button: "Enviar",
    button_link: "/",
    alternative: "",
    alternative_link: "",
  },
];

const Contato = () => {
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

export default Contato;

// TODO => Ajustar o tamanho do espaco para mensagem

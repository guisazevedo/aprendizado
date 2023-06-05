import Register from "../01_components/Register";

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

const Contato_register_block = () => {
  return (
    <>
      <Register register_items={register_items} execute_items={execute_items} />
    </>
  );
};

export default Contato_register_block;

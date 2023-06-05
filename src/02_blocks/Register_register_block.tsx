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

const Register_register_block = () => {
  return (
    <>
      <Register register_items={register_items} execute_items={execute_items} />
    </>
  );
};

export default Register_register_block;

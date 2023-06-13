import Register from "../01_components/Register";

// inputs for the email/password components
const register_items = [
  {
    title: "Email",
    type: "email",
    id: "exampleInputEmail1",
    text: "",
  },
  {
    title: "Senha",
    type: "password",
    id: "exampleInputPassword1",
    text: "",
  },
];

const execute_items = [
  {
    text: "Manter-me conectado",
    button: "Login",
    button_link: "/content",
    alternative: "Precisa de uma conta?",
    alternative_link: "/register",
  },
];

const Login_register_block = () => {
  return (
    <>
      {" "}
      <Register register_items={register_items} execute_items={execute_items} />
    </>
  );
};

export default Login_register_block;

// TODO => include "password eye" in the password input (Login and Register)

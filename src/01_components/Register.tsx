import { Link } from "react-router-dom";
import HeaderText from "./HeaderText";

const Register = () => {
  // inputs for the HeaderText component
  const header = "Registro";
  const sub_header = "";
  const text = "Registre-se aqui para iniciar o seu aprendizado!";

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
    {
      title: "Confirme a Senha",
      type: "password",
      id: "exampleInputPassword2",
      text: "Sua senha deve ser de 8-20 caracteres, conter letras e numeros, e nao deve conter spacos ou emojis",
    },
  ];

  return (
    <div className="container col-md-8 col-lg-6 px-5">
      <HeaderText header={header} sub_header={sub_header} text={text} />
      <form>
        {register_items.map((item) => (
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              {item.title}
            </label>
            <input
              type={item.type}
              className="form-control"
              id={item.id}
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              {item.text}
            </div>
          </div>
        ))}
        <div className="my-5 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Concordo com termos e condicoes
          </label>
        </div>
        <div className="my-4">
          <button type="submit" className="btn btn-primary">
            Registrar-se
          </button>
        </div>
        <div className="my-4">
          <Link to="/passnew">Esqueceu a senha?</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;

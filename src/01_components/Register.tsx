import { Link } from "react-router-dom";

interface Props {
  register_items: Array<{
    title?: string;
    type?: string;
    id?: string;
    text?: string;
  }>;
  execute_items: Array<{
    text: string;
    button: string;
    button_link: string;
    alternative: string;
    alternative_link: string;
  }>;
}

const Register = ({ register_items, execute_items }: Props) => {
  return (
    <div className="container col-md-8 col-lg-6 px-5">
      <form>
        {register_items.map((item) => (
          <div className="mb-4">
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
        {execute_items.map((item) => (
          <div>
            <div className="my-5 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                {item.text}
              </label>
            </div>
            <div className="my-4">
              <Link to={item.button_link}>
                <button type="submit" className="btn btn-primary">
                  {item.button}
                </button>
              </Link>
            </div>
            <div className="my-4">
              <Link to={item.alternative_link}>{item.alternative}</Link>
            </div>
          </div>
        ))}
      </form>
    </div>
  );
};

export default Register;

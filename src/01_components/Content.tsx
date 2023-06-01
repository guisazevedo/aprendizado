import { ReactNode } from "react";

interface Props {
  image?: string;
  title?: string;
  description?: string;
  objective_1?: string;
  objective_2?: string;
  objective_3?: string;
  button: string;
  placeholder?: ReactNode;
}

const Content = ({
  image,
  title,
  description,
  objective_1,
  objective_2,
  objective_3,
  button,
  placeholder,
}: Props) => {
  return (
    <div className="card border px-0 m-3 shadow gb-body">
      <img
        src={image}
        className="card-img-top"
        style={{ width: "100%" }}
        alt="Man contemplating the universe"
      />
      <div className="card-body">
        <h5 className={"card-title"}>
          {placeholder}
          {title}
        </h5>
        <p className="card-text">
          {placeholder}
          {placeholder}
          {description}
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          {placeholder}
          {objective_1}
        </li>
        <li className="list-group-item">
          {placeholder}
          {objective_2}
        </li>
        <li className="list-group-item">
          {placeholder}
          {objective_3}
        </li>
      </ul>
      <div className="card-body">
        <a
          href="#"
          className="btn btn-primary btn-sm 
        px-4 d-flex align-items-center justify-content-center"
          style={{
            width: "100px",
            height: "40px",
          }}
        >
          {button}
        </a>
      </div>
    </div>
  );
};

export default Content;

// TODO => link botao "iniciar"

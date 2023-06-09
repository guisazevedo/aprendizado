import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
  image?: string;
  title?: string;
  description?: string;
  objective_1?: string;
  objective_2?: string;
  objective_3?: string;
  button?: string;
  button_link: string;
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
  button_link,
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
        <h5 className={"card-title"}>{title}</h5>
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
        <Link
          to={button_link}
          className="btn btn-primary btn-md 
        px-4"
        >
          {button}
        </Link>
      </div>
    </div>
  );
};

export default Content;

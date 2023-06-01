interface Props {
  image: string;
  title: string;
  description: string;
  objective_1: string;
  objective_2: string;
  objective_3: string;
  button: string;
}

const Content = ({
  image,
  title,
  description,
  objective_1,
  objective_2,
  objective_3,
  button,
}: Props) => {
  return (
    <div className="container m-3">
      <div className="card border px-0 shadow gb-body">
        <img
          src={image}
          className="card-img-top"
          style={{ width: "100%" }}
          alt="Man contemplating the universe"
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{objective_1}</li>
          <li className="list-group-item">{objective_2}</li>
          <li className="list-group-item">{objective_3}</li>
        </ul>
        <div className="card-body">
          <a href="#" className="btn btn-primary px-4">
            {button}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Content;

// TODO => size image
// TODO => image fit box

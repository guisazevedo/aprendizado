interface Props {
  image?: string;
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
    <div className="row">
      <div className="col-4 card">
        <img
          src="/src/00_assets/images/class_1.jpg"
          className="card-img-top"
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
          <a href="#" className="btn btn-primary">
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
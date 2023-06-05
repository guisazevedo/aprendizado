import { ReactNode } from "react";

interface Props {
  title?: string;
  description?: string;
  part?: string;
  play?: ReactNode;
  image?: string;
}

const CardContent = ({ title, description, part, play, image }: Props) => {
  return (
    <>
      <div className="card my-3 mx-5">
        <div className="shadow row g-0">
          <div className="col-md-4">
            <img
              src={image}
              style={{ height: "100%", objectFit: "cover" }}
              className="img-fluid rounded-start"
              alt="image of the lesson"
            />
          </div>
          <div className="col-md-6">
            <div className="card-body text-start">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text">
                <small className="text-muted">{part}</small>
              </p>
              <a href="#" className="btn btn-primary px-5">
                {play}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardContent;

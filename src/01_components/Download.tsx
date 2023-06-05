interface download {
  name: string;
}

interface Props {
  title: download[];
}

const Download = ({ title }: Props) => {
  return (
    <>
      {title.map((item, index) => (
        <button
          type="button"
          key={index}
          className="btn btn-outline-secondary shadow m-4"
        >
          <i className="bi bi-download h2 m-5"></i>
          <p className="m-1">{item.name}</p>
        </button>
      ))}
    </>
  );
};

export default Download;

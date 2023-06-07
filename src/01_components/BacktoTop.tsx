const BacktoTop = () => {
  return (
    <>
      <div className="container my-5">
        <button
          type="button"
          className="btn btn-sm btn-secondary"
          onClick={() => window.scrollTo(0, 0)}
        >
          <span className="p-2">Volta ao topo</span>
          <i className="bi bi-arrow-up"></i>
        </button>
      </div>
    </>
  );
};

export default BacktoTop;

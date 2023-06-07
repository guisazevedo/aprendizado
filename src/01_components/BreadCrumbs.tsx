const BreadCrumbs = () => {
  return (
    <>
      <ul className="col list-group list-group-horizontal d-flex justify-content-between">
        <li className="col-sm list-group-item d-flex align-items-center justify-content-center">
          <a className="text-dark text-center" href="#welcome">
            Bem vindo
          </a>
        </li>
        <li className="col-sm list-group-item d-flex align-items-center justify-content-center">
          <a className="text-dark text-center" href="#overview">
            Como funciona
          </a>
        </li>
        <li className="col-sm list-group-item d-flex align-items-center justify-content-center">
          <a className="text-dark text-center" href="#faq">
            Perguntas frequentes
          </a>
        </li>
      </ul>
    </>
  );
};

export default BreadCrumbs;

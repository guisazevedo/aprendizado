const BreadCrumbs = () => {
  return (
    <div className="container mt-3">
      <ul className="row list-group-horizontal">
        <li className="col list-group-item d-flex align-items-center justify-content-center border-2 border-black-subtle border-end">
          <a className="text-dark text-center" href="#welcome">
            Bem vindo
          </a>
        </li>
        <li className="col list-group-item d-flex align-items-center justify-content-center border-2 border-black-subtle border-end px-3">
          <a className="text-dark text-center" href="#overview">
            Como funciona
          </a>
        </li>
        <li className="col list-group-item d-flex align-items-center justify-content-center">
          <a className="text-dark text-center" href="#faq">
            FAQ
          </a>
        </li>
      </ul>
    </div>
  );
};

export default BreadCrumbs;

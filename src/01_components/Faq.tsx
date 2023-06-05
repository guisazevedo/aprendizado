import HeaderText from "./HeaderText";

const Faq = () => {
  const questions_items_1 = [
    {
      question: "Quanto custa o curso?",
      collapse: "collapseOne",
      text: "Esta e uma plataforma sem fins lucrativos. Todo nosso conteudo eh livre e gratuito. Basta se registrar no site e voce tera acesso a todo o conteudo.",
    },
    {
      question: "Posso acessar o conteúdo de qualquer lugar?",
      collapse: "collapseTwo",
      text: "Sim, você pode acessar o conteúdo de qualquer lugar, basta ter um dispositivo com acesso a internet.",
    },
    {
      question: "Posso acessar todo o conteudo de uma so vez??",
      collapse: "collapseThree",
      text: "Nossa experiencia mostra que assistir o conteudo em ordem gera uma maior absorcao do material. Por isso cada video e liberado apos o termino do anterior.",
    },
    {
      question: "O que (pergunta 4)...?",
      collapse: "collapseFour",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi laudantium repudiandae nobis consectetur dolorem asperiores id dicta aut officiis doloribus modi saepe, facere voluptatibus harum et sequi quos ducimus?",
    },
  ];

  // inputs for the HeaderText component
  const header = "Perguntas frenquentes";
  const sub_header = "Lorem ipsum dolor sit amet";
  const text =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, neque voluptatibus, laboriosam assumenda quasi nesciunt vero, maxime incidunt temporibus aut quae fugiat id necessitatibus error iusto blanditiis! Alias, voluptate eveniet.";

  return (
    <div className="container">
      <HeaderText header={header} sub_header={sub_header} text={text} />
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="accordion">
            {questions_items_1.map((item) => (
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={"#" + item.collapse}
                    aria-expanded="false"
                    aria-controls={item.collapse}
                  >
                    <p className="fs-6 fw-bold">{item.question}</p>
                  </button>
                </h2>
                <div
                  id={item.collapse}
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample1"
                >
                  <div className="accordion-body">
                    <p className="text-muted">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;

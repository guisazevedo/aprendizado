interface Question {
  question: string;
  collapse: string;
  answer: string;
}

interface Props {
  questions: Question[];
}

const Faq = ({ questions }: Props) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="accordion">
            {questions.map((item) => (
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
                    <p className="text-muted">{item.answer}</p>
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

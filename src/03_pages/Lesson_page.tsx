import Faq from "../01_components/Faq";
import Footer from "../01_components/Footer";
import HeaderText from "../01_components/HeaderText";
import Navbar from "../01_components/Navbar";

// inputs for the HeaderText component
const header = "Licao 1";
const sub_header = "E vai comecar agora ....";
const text =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat error voluptatem voluptates dolor est debitis quae incidunt quas ipsa et eveniet nulla dignissimos dolorum numquam soluta dolore, possimus nisi corrupti.";

const Lesson_page = () => {
  return (
    <>
      <Navbar />
      <div className="py-5"></div>
      <div>
        <HeaderText header={header} sub_header={sub_header} text={text} />

        <div className="container text-center py-5">
          <h1>LESSON PAGE</h1>
          <h2>VIDEOS / AUDIOS</h2>
          <h2>TEXTS / DOCS</h2>
        </div>
      </div>
      <Faq />
      <div className="p-5"></div>
      <Footer />
    </>
  );
};

export default Lesson_page;

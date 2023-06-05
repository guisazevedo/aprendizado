// import Faq from "../01_components/Faq";
import Navbar from "../01_components/Navbar";
import Lesson_header_block from "../02_blocks/Lesson_header_block";
import Lesson_midia_block from "../02_blocks/Lesson_midia_block";
import Footer from "../01_components/Footer";
import Lesson_faq_block from "../02_blocks/Lesson_faq_block";

const Lesson_page = () => {
  return (
    <>
      <Navbar />
      <div className="py-5"></div>
      <Lesson_header_block />
      <div className="py-5"></div>
      <Lesson_midia_block />
      <div className="py-5"></div>
      <div className="bg-primary py-5 text-white text-center">
        Links material nivel
      </div>
      <div className="py-5"></div>
      <Lesson_faq_block />
      <div className="py-5"></div>
      <div className="py-5"></div>
      <div className="bg-primary py-5 text-white text-center">
        Links material adicional
      </div>
      <div className="py-5"></div>
      <Footer />
    </>
  );
};

export default Lesson_page;

// TODO => fazer lesson_block video -> lesson_block audio -> lesson_block text -> lesson_block doc

// TODO => ver FAQ

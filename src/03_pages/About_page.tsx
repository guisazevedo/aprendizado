import Footer from "../01_components/Footer";
import About_header_block from "../02_blocks/About_header_block";
import Navbar from "../01_components/Navbar";

const About_page = () => {
  return (
    <>
      <Navbar />
      <div className="py-5"></div>
      <About_header_block />
      <div className="p-5"></div>
      <h1 className="text-center">Discutir o que fazer</h1>
      <div className="p-5"></div>
      <Footer />
    </>
  );
};

export default About_page;

// TODO => discutir o que fazer

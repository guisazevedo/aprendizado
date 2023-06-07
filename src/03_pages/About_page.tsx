import Footer from "../01_components/Footer";
import About_header_block from "../02_blocks/About_header_block";
import Navbar from "../01_components/Navbar";
import Contato_header_block from "../02_blocks/Contato_header_block";
import Contato_register_block from "../02_blocks/Contato_register_block";

const About_page = () => {
  return (
    <>
      <Navbar />
      <div className="py-5"></div>
      <About_header_block />
      <div className="p-2"></div>
      <h1 className="text-center text-danger">Discutir o que fazer</h1>
      <div className="p-2"></div>
      <Contato_header_block />
      <div className="p-2"></div>
      <Contato_register_block />
      <div className="py-5"></div>
      <Footer />
    </>
  );
};

export default About_page;

// TODO => about page should  include contato page
// TODO => contato page passes to exist onlyin about page

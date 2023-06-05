import Navbar from "../01_components/Navbar";
import Content_header_block from "../02_blocks/Content_header_block";
import Content_content_block from "../02_blocks/Content_content_block";
import Footer from "../01_components/Footer";

const Content_page = () => {
  return (
    <>
      <Navbar />
      <div className="py-5"></div>
      <Content_header_block />
      <div className="py-2"></div>
      <Content_content_block />
      <div className="p-5"></div>
      <Footer />
    </>
  );
};

export default Content_page;

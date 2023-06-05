import Navbar from "../01_components/Navbar";
import Register_header_block from "../02_blocks/Register_header_block";
import Register_register_block from "../02_blocks/Register_register_block";
import Footer from "../01_components/Footer";

const Register_page = () => {
  return (
    <>
      <Navbar />
      <div className="p-5"></div>
      <Register_header_block />
      <div className="p-2"></div>
      <Register_register_block />
      <div className="p-5"></div>
      <Footer />
    </>
  );
};

export default Register_page;

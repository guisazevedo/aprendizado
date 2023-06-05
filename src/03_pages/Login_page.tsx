import Navbar from "../01_components/Navbar";
import Login_header_block from "../02_blocks/Login_header_block";
import Login_register_block from "../02_blocks/Login_register_block";
import Footer from "../01_components/Footer";

const Login_page = () => {
  return (
    <>
      <Navbar />
      <div className="p-5"></div>
      <Login_header_block />
      <div className="p-2"></div>
      <Login_register_block />
      <div className="p-5"></div>
      <Footer />
    </>
  );
};

export default Login_page;

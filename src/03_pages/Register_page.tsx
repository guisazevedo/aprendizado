import Navbar from "../01_components/Navbar";
import Register from "../01_components/Register";
import Footer from "../01_components/Footer";

const Register_page = () => {
  return (
    <>
      <Navbar />
      <div className="p-5"></div>
      <Register />
      <div className="p-5"></div>
      <Footer />
    </>
  );
};

export default Register_page;

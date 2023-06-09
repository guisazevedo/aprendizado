import Navbar from "../01_components/Navbar";
import Landing_welcome_block from "../02_blocks/Landing_welcome_block";
import Landing_overview_block from "../02_blocks/Landing_overview_block";
import Landing_faq_block from "../02_blocks/Landing_faq_block";
import Footer from "../01_components/Footer";
import Landing_breadcrumbs_block from "../02_blocks/Landing_breadcrumbs_block";

const Landing_page = () => {
  return (
    <>
      <Navbar />
      <div className="p-5"></div>
      <Landing_breadcrumbs_block />
      <div className="p-5" id={"welcome"}></div>
      <Landing_welcome_block />
      <div className="p-5" id={"overview"}></div>
      <Landing_overview_block />
      <div className="p-5" id={"faq"}></div>
      <Landing_faq_block />
      <div className="p-5"></div>
      <Footer />
    </>
  );
};

export default Landing_page;

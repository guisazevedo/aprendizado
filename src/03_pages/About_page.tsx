import Footer from "../01_components/Footer";
import HeaderText from "../01_components/HeaderText";
import Navbar from "../01_components/Navbar";

// inputs for the HeaderText component
const header = "Quem somos";
const sub_header = "Nos somos....";
const text =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat error voluptatem voluptates dolor est debitis quae incidunt quas ipsa et eveniet nulla dignissimos dolorum numquam soluta dolore, possimus nisi corrupti.";

const About_page = () => {
  return (
    <>
      <Navbar />
      <div className="py-5"></div>
      <div>
        <HeaderText header={header} sub_header={sub_header} text={text} />

        <h1>Discutir o que fazer</h1>
      </div>
      <div className="p-5"></div>
      <Footer />
    </>
  );
};

export default About_page;

// TODO => discutir o que fazer
// TODO => break headerText from About_page in block

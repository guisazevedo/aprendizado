import Footer from "../01_components/Footer";
import HeaderText from "../01_components/HeaderText";
import Navbar from "../01_components/Navbar";
import Video from "../01_components/Video";
import Faq from "../01_components/Faq";

const Landing_page = () => {
  // inputs for the HeaderText component
  const header = "Bem vindo!!";
  const sub_header = "O aprendizado comeca aqui!";
  const text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae deserunt obcaecati ullam aperiam velit voluptate aspernatur beatae ut doloribus non placeat aut, saepe vero. Voluptates iusto dolorem veritatis harum molestiae impedit laudantium sint corporis consequuntur iste blanditiis perferendis, ut ex assumenda quisquam eius, unde, maiores omnis quibusdam! ";

  return (
    <>
      <Navbar />
      <div className="p-5"></div>
      <HeaderText header={header} sub_header={sub_header} text={text} />
      <Video />
      <Faq />
      <div className="p-5"></div>
      <Footer />
    </>
  );
};

export default Landing_page;

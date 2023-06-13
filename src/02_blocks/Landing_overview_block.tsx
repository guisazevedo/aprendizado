import BacktoTop from "../01_components/BacktoTop";
import HeaderText from "../01_components/HeaderText";
import Video from "../01_components/Video";

// inputs for the HeaderText component
const header = "Como funciona?";
const sub_header =
  "Esta é uma plataforma sem fins lucrativos. Todo nosso conteúdo é gratuito. Basta registrar-se para receber o acesso por e-mail.";
const text = ["pequeno texto"];

const Landing_overview_block = () => {
  return (
    <>
      <HeaderText header={header} sub_header={sub_header} text={text} />
      <div className="p-2"></div>
      <Video />
      <BacktoTop />
    </>
  );
};

export default Landing_overview_block;

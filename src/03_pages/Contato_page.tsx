import Navbar from "../01_components/Navbar";
import Footer from "../01_components/Footer";
import Contato_header_block from "../02_blocks/Contato_header_block";
import Contato_register_block from "../02_blocks/Contato_register_block";

const Contato = () => {
  return (
    <>
      <Navbar />
      <div className="p-5"></div>
      <Contato_header_block />
      <div className="p-5"></div>
      <Contato_register_block />
      <div className="p-5"></div>
      <Footer />
    </>
  );
};

export default Contato;

// TODO => Ajustar o tamanho do espaco para mensagem

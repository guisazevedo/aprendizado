import BacktoTop from "../01_components/BacktoTop";
import HeaderText from "../01_components/HeaderText";

// inputs for the HeaderText component
const header = "Bem vindo!";
const sub_header = "Em busca da unidade com o Todo";
const text = [
  "O Ser Humano procura um Mundo Melhor. Todo mundo quer ser feliz, quer ter a Paz.",
  "Como resultado de uma vivência de mais de 40 anos comprometidos com o estudo da Mente e do Ser Humano, com o aprender e ensinar, com a ampliação da Visão de Mundo, temos a convicção de que para construir esse Mundo Melhor precisamos expandir a nossa Consciência, enxergar além, a Grandiosidade da Vida e a maravilhosa arquitetura Universal que nos proporciona a oportunidade de atuar neste meio, neste sistema planetário onde tudo está interligado.",
  "Todos fazemos parte da mesma Unidade, não estamos isolados, estamos todos juntos! Seres Humanos, Natureza, Planeta, Universo, Somos Todos Um!",
  "Trazemos nesta plataforma um caminho certeiro, um conhecimento ordenado, sintetizado em pontos chaves, pontos filosóficos, treinamentos mentais, meditação, reflexão e ampliação de sentir.",
  "Esse caminho que traz ampliação de consciência tem como objetivo reconhecer e motivar a intensa vontade de atuar e de se integrar a essa Grandiosa Obra.",
  "Entre, estude, perceba cada ponto de conhecimento e como essa teia de pontos se amplia até formar uma rede cada vez mais abrangente, para trazer a Verdade da nossa existência.",
  "O Conhecimento liberta, traz Justiça e Paz. Essa é a Lei Universal.",
];

const Landing_welcome_block = () => {
  return (
    <>
      <HeaderText header={header} sub_header={sub_header} text={text} />
      <BacktoTop />
    </>
  );
};

export default Landing_welcome_block;

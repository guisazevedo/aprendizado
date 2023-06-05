import HeaderText from "../01_components/HeaderText";
import Video from "../01_components/Video";

// inputs for the HeaderText component
const header = "Master class!!";
const sub_header =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, aut.";
const text =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptate omnis harum eum doloribus, aut ad, enim eveniet asperiores cumque ipsum aspernatur expedita quae temporibus voluptates magnam, impedit quo beatae.";

const Landing_overview_block = () => {
  return (
    <>
      <HeaderText header={header} sub_header={sub_header} text={text} />
      <div className="p-2"></div>
      <Video />
    </>
  );
};

export default Landing_overview_block;

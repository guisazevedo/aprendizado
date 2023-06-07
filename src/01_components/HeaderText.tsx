interface Props {
  header?: string;
  sub_header?: string;
  text?: string[];
}

const HeaderText = ({ header, sub_header, text }: Props) => {
  return (
    <div className="container mx-auto text-justify-left">
      <h1 className="display-4 fw-normal py-2">{header}</h1>
      <h2 className="fs-3 fw-normal pb-3">{sub_header}</h2>
      {text &&
        text.length > 0 &&
        text.map((paragraph) => <p className="fs-5 text-muted">{paragraph}</p>)}
    </div>
  );
};

export default HeaderText;

// TODO => make text in paragraphs

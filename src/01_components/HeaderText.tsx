interface Props {
  header?: string;
  sub_header?: string;
  text?: string;
}

const HeaderText = ({ header, sub_header, text }: Props) => {
  return (
    <div className="container mx-auto text-center">
      <h1 className="display-4 fw-normal py-2">{header}</h1>
      <h2 className="fs-3 fw-normal pb-3">{sub_header}</h2>
      <p className="fs-5 text-muted">{text}</p>
    </div>
  );
};

export default HeaderText;

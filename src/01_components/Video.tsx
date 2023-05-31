import HeaderText from "./HeaderText";

const Video = () => {
  // inputs for the HeaderText component
  const header = "Master class";
  const sub_header = "Lorem ipsum dolor sit amet";
  const text =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, neque voluptatibus, laboriosam assumenda quasi nesciunt vero, maxime incidunt temporibus aut quae fugiat id necessitatibus error iusto blanditiis! Alias, voluptate eveniet.";

  return (
    <div className="container">
      <HeaderText header={header} sub_header={sub_header} text={text} />

      <div className="d-flex justify-content-center align-items-center">
        <div
          style={{
            position: "relative",
            paddingTop: "56.25%",
            width: "100%",
          }}
        >
          <iframe
            className="embed-responsive-item"
            src="https://www.youtube.com/embed/4MFOBeUCPkw?rel=0"
            allowFullScreen
            style={{
              opacity: 0.5,
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "80%",
            }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Video;

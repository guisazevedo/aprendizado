const Video = () => {
  return (
    <div className="container">
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

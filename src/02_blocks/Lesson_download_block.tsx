import Download from "../01_components/Download";

const download = {
  title: "Download material dos videos",
  text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id nisi dolore iste nulla quasi a quaerat quo accusantium adipisci esse.",
};

// COMMENT => connect this with video title (once we start to organize backend)
const title = [
  { name: "Material Video 1" },
  { name: "Material Video 2" },
  { name: "Material Video 3" },
  { name: "Material Video 4" },
  { name: "Material Video 5" },
];

const Lesson_download_block = () => {
  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col border p-2 mx-4 my-3 rounded bg-white">
            <h2 className="py-3 text-center">{download.title}</h2>
            <p className="px-3 text-center">{download.text}</p>
            <div className="d-flex flex-wrap justify-content-center">
              <Download title={title} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lesson_download_block;

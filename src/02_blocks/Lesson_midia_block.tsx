import Lesson_video_block from "./Lesson_video_block";

const Lesson_midia_block = () => {
  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col border p-2 rounded bg-white d-flex flex-column align-items-center">
            <Lesson_video_block />
          </div>
          <div className="col border p-2 mx-4 rounded bg-white d-flex flex-column align-items-center">
            <Lesson_video_block />
          </div>
        </div>
      </div>
    </>
  );
};

export default Lesson_midia_block;

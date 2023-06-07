import Lesson_audio_block from "./Lesson_audio_block";
import Lesson_video_block from "./Lesson_video_block";

const video = {
  title: "Video",
  text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id nisi dolore iste nulla quasi a quaerat quo accusantium adipisci esse.",
};

const audio = {
  title: "Audio",
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit animi quis dolorem laudantium alias corporis nobis omnis iste adipisci.",
};

const Lesson_midia_block = () => {
  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col border p-2 mx-4 my-3 rounded bg-white d-flex flex-column align-items-center">
            <h2 className="py-3 text-center">{video.title}</h2>
            <p className="px-3 text-center">{video.text}</p>
            <Lesson_video_block />
          </div>
          <div className="col border p-2 mx-4 my-3 rounded bg-white d-flex flex-column align-items-center">
            <h2 className="py-3 text-center">{audio.title}</h2>
            <p className="px-3 text-center">{audio.text}</p>
            <Lesson_audio_block />
          </div>
        </div>
      </div>
    </>
  );
};

export default Lesson_midia_block;

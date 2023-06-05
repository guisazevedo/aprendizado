import Download from "../01_components/Download";

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
      <div className="text-center">
        <Download title={title} />
      </div>
    </>
  );
};

export default Lesson_download_block;

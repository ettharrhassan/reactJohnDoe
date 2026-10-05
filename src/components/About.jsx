import image from "../assets/image.jpg";
export default function About() {
  return (
    <>
      <div className="container mx-auto rounded-2xl bg-white pt-10 pb-5 shadow-md">
        <h2 className=" border-b-2 border-b-gray-200 pb-5 text-3xl text-blue-900 font-semibold mx-11">
          About Me
        </h2>
        <div className="mx-11 pt-7 flex">
          <img
            src={image}
            alt="John Doe Image"
            className="w-55 h-55 rounded-full shadow-2xl border-4 border-sky-100"
          />
          <div className="px-5 py-7">
            <div className=" flex flex-col gap-7 mb-5">
              <p className="text-[20px]">
                Hello! I'm John Doe, a passionate{" "}
                <span className="text-blue-900 font-bold">
                  Front-End Developer
                </span>{" "}
                who loves building modern websites.
              </p>
              <p className="text-[18px] font-semibold">
                I enjoy creating simple and user-friendly interfaces using
                modern web technologies.
              </p>
            </div>
            <button className="bg-blue-900 text-white cursor-pointer py-3 px-7 text-[20px] font-semibold rounded-2xl hover:bg-blue-950 transition-all duration-300">
              Visit My GitHub
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

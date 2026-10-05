import first from "../assets/techcorp.png";
import second from "../assets/digital-agency-pro.png";
export default function Experience() {
  return (
    <>
      <div className="container mx-auto rounded-2xl bg-white pt-10 pb-14 mt-7 shadow-md">
        <h2 className=" border-b-2 border-b-gray-200 pb-5 text-3xl text-blue-900 font-semibold mx-11">
          Experience
        </h2>
        <div className="mx-11 pt-4 mt-5 flex flex-col gap-9">
          <div className="py-7 px-10 bg-sky-50/50 border border-t-gray-200 border-b-0 border-e-0 border-s-8 border-s-blue-900 shadow-sm rounded-2xl">
            <div className="flex gap-5 pt-3">
              <div className="bg-white w-40 h-40 flex justify-center items-center border border-sky-100 rounded-3xl">
                <img src={first} alt="Image" className="w-35 h-35 " />
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="font-bold text-[22px]">
                  Senior Front-End Developer
                </h2>
                <h2 className=" font-bold text-blue-800 text-[22px]">
                  TechCorp Solutions
                </h2>
                <span className="text-[20px]">2023 - Present</span>
              </div>
            </div>
            <p className=" my-7 text-[20px]">
              Developed modern web applications and worked with a team of
              developers to create scalable web solutions.
            </p>
          </div>
          <div className="py-7 px-10 bg-sky-50/50 border border-t-gray-200 border-b-0 border-e-0 border-s-8 border-s-blue-900 shadow-sm rounded-2xl">
            <div className="flex gap-5 pt-3">
              <div className="bg-white w-40 h-40 flex justify-center items-center border border-sky-100 rounded-3xl">
                <img src={second} alt="Image" className="w-35 h-35 " />
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="font-bold text-[22px]">Front-End Developer</h2>
                <h2 className=" font-bold text-blue-800 text-[22px]">
                  Digital Agency Pro
                </h2>
                <span className="text-[20px]">2021 - 2023</span>
              </div>
            </div>
            <p className=" my-7 text-[20px]">
              Built websites from designs and focused on creating clean and
              user-friendly interfaces.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

import first from "../../assets/techcorp.png";
import second from "../../assets/digital-agency-pro.png";
import Boxes from "./Boxes";

let arr = [
  {
    image: first,
    title: "Senior Front-End Developer",
    subTitle: "TechCorp Solutions",
    date: "2023 - Present",
    desc: "Developed modern web applications and worked with a team of developers to create scalable web solutions.",
  },
  {
    image: second,
    title: "Front-End Developer",
    subTitle: "Digital Agency Pro",
    date: "2021 - 2023",
    desc: "Built websites from designs and focused on creating clean and user-friendly interfaces.",
  },
];
export default function Experience() {
  return (
    <>
      <div className="container mx-auto rounded-2xl bg-white pt-10 pb-14 mt-7 shadow-md w-[90%]">
        <h2 className=" border-b-2 border-b-gray-200 pb-5 text-3xl text-blue-900 font-semibold mx-11">
          Experience
        </h2>
        <div className="mx-11 pt-4 mt-5 flex flex-col gap-9">
          {arr.map((item,index) => (
            <Boxes {...item} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}

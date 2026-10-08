import Languages from "./languages";
let languages = [
  { title: "HTML", desc: "Buillding The Structure Of Web pages." },
  { title: "CSS3", desc: "Creating beautiful and responsive designs." },
  { title: "JavaScript", desc: "Adding interaction and functionality." },
  { title: "React", desc: "Building modern user interfaces." },
];
export default function Skills() {
  return (
    <>
      <div className="container w-[90%] mx-auto rounded-2xl bg-white pt-10 pb-5 mt-7 shadow-md">
        <h2 className=" border-b-2 border-b-gray-200 pb-5 text-3xl text-blue-900 font-semibold mx-11">
          Skills
        </h2>
        <div className="mx-11 pt-7">
          <p className="text-[20px]">
            These are some of the technologies I use in my projects:
          </p>
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4 my-8">
            {languages.map((item) => (
              <Languages {...item} key={item.title} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

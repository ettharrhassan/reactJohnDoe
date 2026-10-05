export default function Header() {
  return (
    <>
      <div className="container bg-blue-900 mx-auto text-center pt-14 flex flex-col gap-5 pb-12 my-7 rounded-2xl w-[90%] shadow-lg">
        <h1 className="text-white font-semibold text-6xl">John Doe</h1>
        <h2 className="text-sky-300 font-medium text-2xl">
          Front End Developer
        </h2>
        <div>
          <div className="headings flex justify-center gap-7 text-white ">
            <h3 className="headingsTabs">About</h3>
            <h3 className="headingsTabs">Skills</h3>
            <h3 className="headingsTabs">Experience</h3>
            <h3 className="headingsTabs">Contact</h3>
          </div>
        </div>
      </div>
    </>
  );
}

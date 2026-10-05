export default function Contact() {
  return (
    <>
      <div className="container bg-blue-900 mx-auto pt-14 flex flex-col gap-5 pb-12 my-7 rounded-2xl shadow-lg w-[90%]">
        <h2 className=" border-b-2 border-b-gray-200/15 pb-5 text-3xl text-white font-semibold mx-11">
          Contact Me
        </h2>
        <div className="mx-11 mt-5">
          <p className=" text-white text-[18px]">
            Feel Free to contact me tthrough any of the following links.
          </p>
          <div>
            <div className="headings flex gap-7 text-white  my-7 ">
              <h3 className="headingsTabs rounded-[10px]!">John@example.com</h3>
              <h3 className="headingsTabs rounded-[10px]!">LinkedIn</h3>
              <h3 className="headingsTabs rounded-[10px]!">GitHub</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

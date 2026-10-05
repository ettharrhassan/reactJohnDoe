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
            <div className="box">
              <h3 className="boxDetails">HTML5</h3>
              <p className="text-[18px] w-[75%]">
                Building the structure of web pages.
              </p>
            </div>

            <div className="box">
              <h3 className="boxDetails">CSS3</h3>
              <p className="text-[18px] w-[75%]">
                Creating beautiful and responsive designs.
              </p>
            </div>

            <div className="box">
              <h3 className="boxDetails">JavaScript</h3>
              <p className="text-[18px] w-[75%]">
                Adding interaction and functionality.
              </p>
            </div>

            <div className="box">
              <h3 className="boxDetails">React</h3>
              <p className="text-[18px] w-[75%]">
                Building modern user interfaces.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function Boxes({image="image",title="title",subTitle="subTitle" ,date="date",desc="desc"}) {
  return (
    <>
      <div className="py-7 px-10 bg-sky-50/50 border border-t-gray-200 border-b-0 border-e-0 border-s-8 border-s-blue-900 shadow-sm rounded-2xl">
        <div className="flex gap-5 pt-3">
          <div className="bg-white w-40 h-40 flex justify-center items-center border border-sky-100 rounded-3xl">
            <img src={image} alt={title} className="w-35 h-35 " />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-[22px]">
              {title}
            </h2>
            <h2 className=" font-bold text-blue-800 text-[22px]">
              {subTitle}
            </h2>
            <span className="text-[20px]">{date}</span>
          </div>
        </div>
        <p className=" my-7 text-[20px]">
         {desc}
        </p>
      </div>
    </>
  );
}

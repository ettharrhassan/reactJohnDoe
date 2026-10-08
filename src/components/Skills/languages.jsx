export default function Languages({ title = "title", desc = "desc" }) {
  return (
    <div className="box">
      <h3 className="boxDetails">{title}</h3>
      <p className="text-[18px] w-[75%]">{desc}</p>
    </div>
  );
}

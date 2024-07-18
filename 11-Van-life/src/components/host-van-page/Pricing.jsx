import { useOutletContext } from "react-router-dom";

function Pricing({}) {
  const [van] = useOutletContext();
  return (
    <div className="px-7 mt-8 pb-12">
      <h1 className="text-slate-800 text-2xl font-bold">
        ${van.price}.00
        <span className="font-normal text-sm text-slate-600">/day</span>
      </h1>
    </div>
  );
}

export default Pricing;

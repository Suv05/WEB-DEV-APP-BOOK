import { useOutletContext } from "react-router-dom";

function Details({}) {
  const [van] = useOutletContext();
  return (
    <>
      <div className="px-7 mt-4 pb-8">
        <p className="text-slate-800 font-bold mb-3">
          Name:{" "}
          <span className="text-slate-600 font-normal text-base">
            {van.name}
          </span>
        </p>
        <p className="text-slate-800 font-bold mb-3">
          Category:{" "}
          <span className="text-slate-600 font-normal text-base capitalize">
            {van.type}
          </span>
        </p>
        <p className="text-slate-800 font-bold mb-3">
          Description:{" "}
          <span className="text-slate-600 font-normal text-base">
            {van.description}
          </span>
        </p>
        <p className="text-slate-800 font-bold mb-3">
          Visibility:{" "}
          <span className="text-slate-600 font-normal text-base">
            Public
          </span>
        </p>
      </div>
    </>
  );
}

export default Details;

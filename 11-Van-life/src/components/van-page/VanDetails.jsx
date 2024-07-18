import { Link, useLocation, useLoaderData } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import fetchApi from "../../api";

export async function loader({ params }) {
  const { id } = params;
  try {
    const data = fetchApi(`/api/vans/${id}`);
    return data;
  } catch (err) {
    throw new Error("Failed to fetch vans data");
  }
}
function VanDetails() {
  const location = useLocation();
  const { van } = useLoaderData();

  const checkType = (type) => {
    if (type === "simple") {
      return "bg-black";
    } else if (type === "luxury") {
      return "bg-green";
    } else if (type === "rugged") {
      return "bg-blue";
    }
  };

  return (
    <>
      {van ? (
        <div className="mt-5">
          <Link
            to={location.state.type ? `../?type=${location.state?.type}` : `..`}
            relative="path"
            state={{ type: location.state?.type }}
          >
            <button className="text-slate-700 underline flex pl-2.5 mb-10">
              <IoIosArrowRoundBack size={30} />
              {location.state.type ? (
                <span className="text-base">
                  Back to {location.state.type} van
                </span>
              ) : (
                <span className="text-base">Back to all vans</span>
              )}
            </button>
          </Link>
          <div className="px-8 text-center mb-9">
            <img src={van.imageUrl} alt={van.name} />
          </div>
          <div className="px-8 text-slate-700">
            <button
              disabled={true}
              className={`${checkType(
                van.type
              )} text-white rounded-lg px-2 py-1 text-sm capitalize mb-3`}
            >
              {van.type}
            </button>
            <h1 className="text-2xl font-bold subpixel-antialiased">
              {van.name}
            </h1>
            <span className="font-bold text-lg">${van.price}</span>/day
            <p className="mt-3 text-sm leading-relaxed">{van.description}</p>
          </div>
          <div className="mt-7 mb-20 text-center px-7">
            <button
              className="bg-[#FF6500] text-white py-3 rounded-md hover:bg-slate-800 transition duration-300 ease-in-out transform"
              style={{ width: "80vw" }}
            >
              Rent this van
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-2xl text-slate-800 font-bold">
            Oops can't get it{" "}
          </h1>
        </div>
      )}
    </>
  );
}

export default VanDetails;

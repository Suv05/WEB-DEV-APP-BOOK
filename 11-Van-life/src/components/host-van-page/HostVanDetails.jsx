import { useLoaderData, Link, NavLink, Outlet } from "react-router-dom";
import fetchApi from "../../api";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";

export async function loader({ params }) {
  try {
    const { id } = params;
    const data = await fetchApi(`/api/host/van/${id}`);
    return { van: data.vans[0] };
  } catch (error) {
    throw new Error("Can't fetch the van details");
  }
}

function HostVanDetails({}) {
  const { van } = useLoaderData();
  console.log(van);

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
        <div className="mt-10 px-6">
          <Link to=".." relative="path">
            <button className="text-slate-700 underline flex mb-10">
              <IoIosArrowRoundBack size={30} />
              <span className="text-base">Back to all vans</span>
            </button>
          </Link>
          <div className="bg-[#EEEDEB] mt-6 rounded-md">
            <div className="flex">
              <div className="py-6 px-7">
                <img
                  src={van.imageUrl}
                  alt={van.name}
                  style={{ width: "20vw" }}
                />
              </div>
              <div className="px-4">
                <button
                  disabled={true}
                  className={`${checkType(
                    van.type
                  )} text-white rounded-lg px-3 py-1 text-sm capitalize mt-11 mb-3`}
                >
                  {van.type}
                </button>
                <h1 className=" mb-1 text-2xl font-bold subpixel-antialiased text-slate-900">
                  {van.name}
                </h1>
                <p className="font-bold text-lg text-slate-800">
                  ${van.price}
                  <span className="font-normal text-slate-700 text-sm">
                    /day
                  </span>
                </p>
              </div>
            </div>
            {/* Here we goes the card ui */}
            <div className="mt-2 flex text-slate-600 px-7">
              <NavLink
                end
                className={({ isActive }) =>
                  isActive
                    ? " myLink me-5 hover:text-lg text-slate-600 hover:text-slate-900  hover:underline underline-offset-2"
                    : "me-5 hover:text-lg text-slate-600 hover:text-slate-900  hover:underline underline-offset-2"
                }
                to={`.`}
              >
                Details
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? " myLink me-5 hover:text-lg text-slate-600 hover:text-slate-900"
                    : "me-5 hover:text-lg text-slate-600 hover:text-slate-900  hover:underline underline-offset-2"
                }
                to={`pricing`}
              >
                Pricing
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? " myLink me-5 hover:text-lg text-slate-600 hover:text-slate-900"
                    : "me-5 hover:text-lg text-slate-600 hover:text-slate-900  hover:underline underline-offset-2"
                }
                to={`photos`}
              >
                Photos
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? " myLink me-5 hover:text-lg text-slate-600 hover:text-slate-900"
                    : "me-5 hover:text-lg text-slate-600 hover:text-slate-900  hover:underline underline-offset-2"
                }
                to={`edit`}
              >
                <FaRegEdit size={25} style={{ float: "right" }} />
              </NavLink>
            </div>
            <Outlet context={[van]} />
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

export default HostVanDetails;

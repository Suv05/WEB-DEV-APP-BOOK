import { Link, useLoaderData } from "react-router-dom";
import fetchApi from "../../api";

export async function loader() {
  try {
    const data = await fetchApi("/api/host/van");
    return data;
  } catch (error) {
    throw new Error("Failed to Fetch host vans");
  }
}

function Host() {
  const { vans: items } = useLoaderData();
  return (
    <>
      <div className="px-5 mt-8 bg-[#FDE49E]">
        <h1 className="text-2xl text-slate-900 pt-3 mb-3 font-semibold">
          Welcome!
        </h1>
        <p className="text-[#758694] text-sm me-1">
          Income in last{" "}
          <span className="text-slate-700 underline underline-offset-2 text-xs font-semibold">
            30-days
          </span>
          <Link
            className="text-slate-600 text-sm hover:underline"
            style={{ float: "right" }}
            to="/host/income"
          >
            Details
          </Link>
        </p>
        <h1 className="mt-3 text-slate-900 text-3xl font-extrabold pb-5">
          {" "}
          &#x24;2,260
        </h1>
      </div>
      <div className="bg-[#FFBB70]">
        <h3 className="px-5 text-slate-800 py-7 font-semibold text-balance">
          Reviews score ⭐5.0/5{" "}
          <Link
            style={{ float: "right" }}
            className="text-slate-600 text-sm font-normal hover:underline"
            to="/host/reviews"
          >
            Details
          </Link>
        </h3>
      </div>
      <div className="mt-5 mb-5">
        <h3 className="px-5 text-slate-900 font-semibold text-lg">
          Your listed vans{" "}
          <Link to="/van">
            <span
              className="text-slate-600 text-sm font-normal hover:underline"
              style={{ float: "right" }}
            >
              View all
            </span>
          </Link>
        </h3>
      </div>
      <div>
        {items
          ? items.map((i) => (
              <div key={i.id} className="flex mb-4 bg-[#EEEDEB] text-slate-800">
                <div className="px-4 py-4 me-5">
                  <img
                    src={i.imageUrl}
                    alt=""
                    style={{ width: "10vw" }}
                    className="rounded-md"
                  />
                </div>
                <div className="py-3">
                  <h3 className="font-bold text-xl">{i.name}</h3>
                  <p>${i.price}/day</p>
                </div>
              </div>
            ))
          : null}
      </div>
    </>
  );
}

export default Host;

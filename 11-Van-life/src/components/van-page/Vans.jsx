import {
  Link,
  useSearchParams,
  useLoaderData,
  defer,
  Await,
} from "react-router-dom";
import fetchApi from "../../api";
import { Suspense } from "react";
import Spinner from "../pages/Spinner";

export async function loader() {
  try {
    const data = await fetchApi("/api/vans"); // Ensure you await the fetchApi function
    return defer({ vans: data.vans });
  } catch (error) {
    throw new Error("Failed to fetch vans data");
  }
}

function Vans() {
  const { vans } = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();

  const checkType = (type) => {
    if (type === "simple") {
      return "bg-black";
    } else if (type === "luxury") {
      return "bg-green";
    } else if (type === "rugged") {
      return "bg-blue";
    }
  };

  const uniqueTypes = vans ? [...new Set(vans.map((van) => van.type))] : [];

  const selectedType = searchParams.get("type");
  const filteredVans = selectedType
    ? vans.filter((van) => van.type === selectedType)
    : vans;

  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Await resolve={vans}>
          {(resolvedVans) => (
            <>
              <div className="mb-11">
                <h1 className="font-bold text-slate-800 text-xl px-6 pt-7 pb-3">
                  Explore Our Van Options
                </h1>
                <div className="px-6">
                  {uniqueTypes.length > 0
                    ? uniqueTypes.map((type) => (
                        <Link to={`?type=${type}`} key={type} state={{ type }}>
                          <button
                            className={
                              selectedType === type
                                ? `text-white ${checkType(
                                    type
                                  )} me-4 px-4 py-1 text-sm capitalize rounded-md`
                                : "text-slate-700 bg-[#FFD35A] me-4 px-4 py-1 text-sm capitalize rounded-md hover:bg-slate-800 hover:text-white"
                            }
                            onClick={() => setSearchParams({ type })}
                          >
                            {type}
                          </button>
                        </Link>
                      ))
                    : null}
                  <span>
                    <button
                      className="text-slate-700 px-4 text-sm capitalize rounded-md hover:text-slate-800 hover:font-bold underline"
                      onClick={() => setSearchParams({})}
                    >
                      Clear filters
                    </button>
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-3 mb-8">
                {Array.isArray(filteredVans) && filteredVans.length > 0 ? (
                  filteredVans.map((van) => (
                    <Link to={van.id} key={van.id} state={{ type: selectedType }}>
                      <div className="mx-5 mb-7">
                        <img
                          src={van.imageUrl}
                          alt={van.name}
                          className="rounded-lg"
                        />
                        <div className="text-slate-700 rounded-x-lg">
                          <h3 className="font-semibold pb-1">
                            {van.name}
                            <span style={{ float: "right" }}>
                              ${van.price} <p className="text-xs">/day</p>
                            </span>
                          </h3>
                          <button
                            disabled={true}
                            className={`text-white rounded-xl px-2 py-1 text-sm capitalize ${checkType(
                              van.type
                            )}`}
                          >
                            {van.type}
                          </button>
                        </div>
                      </div>
                    </Link>
                  ))
                ) : (
                  <div>No Data Found</div>
                )}
              </div>
            </>
          )}
        </Await>
      </Suspense>
    </>
  );
}

export default Vans;

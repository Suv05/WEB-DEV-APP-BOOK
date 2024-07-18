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

function HostVan() {
  const { vans: items } = useLoaderData();
  return (
    <>
      <div className="px-5 mt-7">
        <h1 className="text-2xl font-bold text-slate-900 mb-7">
          Your Listed Vans
        </h1>
        <div>
          {items
            ? items.map((i) => (
                <Link key={i.id} to={i.id}>
                  <div
                    key={i.id}
                    className="flex mb-4 bg-[#EEEDEB] text-slate-800"
                  >
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
                </Link>
              ))
            : null}
        </div>
      </div>
    </>
  );
}

export default HostVan;

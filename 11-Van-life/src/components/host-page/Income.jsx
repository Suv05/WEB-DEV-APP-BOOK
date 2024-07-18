import IncomeImg from "../../assets/images/income-graph.png";
function Income({}) {
  return (
    <>
      <div className="px-5 mt-5">
        <h3 className="text-slate-900 text-xl font-semibold mb-3">Income</h3>
        <p className="text-[#758694] text-xs me-1">
          Last{" "}
          <span className="text-slate-700 underline underline-offset-2 text-xs font-semibold">
            30-days
          </span>
        </p>
        <h1 className="mt-3 text-slate-900 text-3xl font-extrabold pb-5">
          {" "}
          &#x24;2,260
        </h1>
        <img
          className="mt-3"
          src={IncomeImg}
          alt="about-image"
          style={{ width: "100vw" }}
        />
      </div>
      <div className="mt-10 px-5">
        <h5 className="text-slate-800 font-bold text-base">
          Your transaction(3){" "}
          <span
            className="text-slate-700 underline underline-offset-2 text-xs font-semibold"
            style={{ float: "right" }}
          >
            Last 30-days
          </span>
        </h5>
      </div>
      <div className="px-5 mt-4 mb-6">
        <div className="bg-slate-50 mb-3">
          <h1 className="text-slate-800 font-bold text-xl py-4 px-3">
            &#x24;720{" "}
            <span className="text-slate-700 text-xs font-normal mt-1" style={{ float: "right" }}>
              12/03/2022
            </span>
          </h1>
        </div>
        <div className="bg-slate-50 mb-3">
          <h1 className="text-slate-800 font-bold text-xl py-4 px-3">
            &#x24;560{" "}
            <span className="text-slate-700 text-xs font-normal mt-1" style={{ float: "right" }}>
              05/07/2023
            </span>
          </h1>
        </div>
        <div className="bg-slate-50 mb-3">
          <h1 className="text-slate-800 font-bold text-xl py-4 px-3">
            &#x24;980{" "}
            <span
              className="text-slate-700 text-xs mt-1 font-normal"
              style={{ float: "right" }}
            >
              21/10/2024
            </span>
          </h1>
        </div>
      </div>
    </>
  );
}

export default Income;

import ReviewImg from "../../assets/images/reviews-graph.png";
function Reviews({}) {
  return (
    <>
      <div className="reviews p-5 mt-5">
        <h1 className="text-slate-800 font-bold text-xl mb-5">
          Your reviews{" "}
          <span className="text-slate-700 underline underline-offset-2 text-xs font-semibold pl-3">
            last 30-days
          </span>
        </h1>
        <img src={ReviewImg} alt="" sizes="" />
      </div>
      <div className="px-5 mb-7 mt-2">
        <h3 className="text-slate-800 font-bold text-base mb-3">Reviews(2)</h3>
        <div className="mb-5">
          <p className="mb-3">⭐⭐⭐⭐⭐</p>
          <h1 className="text-slate-800 font-bold text-sm mb-2">
            Sakshi{" "}
            <span className="text-slate-700 text-xs font-semibold pl-3">
              December 1,2022
            </span>
          </h1>
          <p className="text-slate-800 text-xs mb-5 leading-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas iusto
            sit nostrum ullam repudiandae est similique. Quaerat numquam nemo
            repellat esse quidem recusandae magni, aliquid blanditiis. Nesciunt
            magnam harum obcaecati.
          </p>
          <hr
            style={{
              width: "80vw",
              border: "0",
              height: "1px",
              margin: "auto",
            }}
            className="bg-slate-600"
          />
        </div>
        <div className="mb-5">
          <p className="mb-3">⭐⭐⭐⭐⭐</p>
          <h1 className="text-slate-800 font-bold text-sm mb-2">
            Manoj{" "}
            <span className="text-slate-700 text-xs font-semibold pl-3">
              Febuary 14,2023
            </span>
          </h1>
          <p className="text-slate-800 text-xs mb-5 leading-normal">
            Incidunt sequi odit tempore, exercitationem, eveniet quo iste
            aperiam voluptate neque provident accusantium tempora placeat,
            doloremque doloribus.
          </p>
          <hr
            style={{
              width: "80vw",
              border: "0",
              height: "0.5px",
              margin: "auto",
            }}
            className="bg-slate-600"
          />
        </div>
      </div>
    </>
  );
}

export default Reviews;

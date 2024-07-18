import { Link } from "react-router-dom";
import pageNot from "../../assets/images/404.jpg";

function PageNotFound() {
  return (
    <>
      <div>
        <div>
          <img
            src={pageNot}
            alt="NOT FOUND"
            style={{ width: "30vw" }}
            className="m-auto mt-10 mb-5 rounded-xl"
          />
        </div>
        <h1 className="text-xl text-slate-800 px-7 text-center font-bold mb-5">
          😔Sorry, We can't found the page you are looking for.
        </h1>
        <center>
          <Link to="." relative="path">
            <button className="w-80 px-7 py-4 text-center text-lg text-slate-800 bg-transparent hover:bg-slate-800 hover:text-white border-2 border-slate-800 rounded-xl font-medium">
              Return To # Page
            </button>
          </Link>
        </center>
      </div>
    </>
  );
}

export default PageNotFound;

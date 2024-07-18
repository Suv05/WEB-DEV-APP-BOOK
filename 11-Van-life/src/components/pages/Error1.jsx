import { useRouteError } from "react-router-dom";
import Header from "../routes/Header";
import Footer from "../routes/Footer";

function Error1() {
  const err = useRouteError();
  console.log(err); // This should now log the error to the console

  return (
    <>
      <Header />
      <div className="flex items-center justify-center min-h-screen bg-red-100">
        <div
          className="bg-white border border-red-400 text-red-700 px-4 py-3 rounded relative shadow-md"
          role="alert"
        >
          <strong className="font-bold text-slate-800">Error: </strong>
          <span className="block sm:inline">{err.message}</span>
          <p className="text-slate-800 my-3 mx-3 text-sm">{err.statusText}</p>
          <p className="text-slate-800 my-3 mx-3 text-sm">{err.status}</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Error1;

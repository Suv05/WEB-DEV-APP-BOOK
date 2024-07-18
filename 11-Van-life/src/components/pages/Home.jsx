import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div className="myDiv flex-grow bg-cover bg-center relative">
        <div className="content-container mt-28">
          <h1 className="text-3xl font-bold px-6 text-white">
            You got the travel plans, We got the travel vans
          </h1>
          <p className="px-7 my-5 text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
            vel vitae ipsa aliquam eveniet dolor ducimus provident temporibus
            molestias dicta.
          </p>
        </div>
        <div className="button-container flex justify-center items-center h-auto mt-36">
          <Link to="vans">
            <button className="border-2 w-80 py-3 rounded-lg bg-[#FF6500] text-slate-100 text-lg transition duration-300 ease-in-out transform hover:bg-amber-300 hover:text-white hover:scale-105 px-4">
              Find Vans
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;

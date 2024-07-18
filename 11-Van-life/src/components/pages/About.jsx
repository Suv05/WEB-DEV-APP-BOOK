import { Link } from "react-router-dom";
function About({}) {
  return (
    <>
      <div>
        <div>
          <img
            src="src/assets/images/about-hero.png"
            alt="about-image"
            style={{ width: "100vw" }}
          />
        </div>
        <div className="text-slate-800 mt-8">
          <h1 className="text-2xl px-7 font-bold">
            Don't squeez in a sedan when you can enjoy in a van.
          </h1>
          <p className="mt-6 px-7 text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            architecto voluptates voluptatibus? Saepe ipsam distinctio autem.
            Blanditiis nulla neque 😘.
          </p>
          <p className="mt-4 px-7 text-base">
            Adipisicing elit ❤️‍🔥. Labore quaerat saepe amet cumque commodi earum
            cupiditate corrupti!
          </p>
        </div>
        <div className="mt-10 border-2 rounded-lg w-96 mx-auto bg-custom-orange mb-10">
          <div>
            <h1 className="text-lg px-7 font-bold text-slate-800 pt-6">
              Your destination is waiting.
            </h1>
            <h1 className="text-lg px-7 font-bold text-slate-800">
              Your van is ready
            </h1>
          </div>
          <div className="px-7 pt-4 pb-7">
            <Link to="/vans" relative="path">
              <button className="border-y-2 border-slate-800 text-lg font-medium bg-slate-800 rounded-t-lg rounded-b-lg p-2 hover:bg-slate-600">
                Explore Our Vans
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

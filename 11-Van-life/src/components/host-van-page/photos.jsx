import { useOutletContext } from "react-router-dom";

function Photos({}) {
  const [van] = useOutletContext();
  return (
    <div className="px-7 mt-8 pb-12">
      <img src={van.imageUrl} alt="" style={{ width: "15vw" }} className="rounded-lg" />
    </div>
  );
}

export default Photos;

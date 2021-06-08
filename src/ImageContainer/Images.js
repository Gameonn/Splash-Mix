import Image from "./Image";
import "./Images.css";

const images = (props) => {
  let imageData = null;
  console.log(props, "images");
  if (props.data) {
    imageData = props.data.map((obj, i) => <Image key={i} urls={obj.urls} />);
  }

  return (
    <div className="row1">
      <div className="column">{imageData}</div>
    </div>
  );
};

export default images;

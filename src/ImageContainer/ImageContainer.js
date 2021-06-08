import { useEffect, useState } from "react";
import Tabs from "../Tabs/Tabs";
import Images from "./Images";
// import axios from "../axios";
import useImages from "./useImages";
import "./ImageContainer.css";

const ImageContainer = (props) => {
  console.log(props, "imagecontainer");
  // const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  // const [trendingImages, setTrendingImages] = useState([]);
  // const [newImages, setNewImages] = useState([]);
  // const [relatedImages, setRelatedImages] = useState([]);
  // const apiUrls = [
  //   "collections/1580860/photos",
  //   "collections/139386/photos",
  //   "collections/2020111/photos",
  // ];
  // const { error, trendingImages, relatedImages, newImages } = useImages(page);
  // useEffect(() => {
  //   ;
  // }, [page]);

  return (
    <div className="row deep-purple lighten-4">
      <p className="flow text"> {props.error} </p>
      <div className="section">
        <Tabs>
          <div label="Trending">
            <Images data={props.trendingImages} />
          </div>
          <div label="New">
            <Images data={props.newImages} />
          </div>
          <div label="Following">
            <Images data={props.relatedImages} />
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default ImageContainer;

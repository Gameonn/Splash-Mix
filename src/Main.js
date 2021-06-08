import { useState, useEffect } from "react";
import Layout from "./Layout/Layout";
import ImageContainer from "./ImageContainer/ImageContainer";
import axios from "./axios";

const Main = () => {
  const [page, setPage] = useState(1);
  //   const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [trendingImages, setTrendingImages] = useState([]);
  const [newImages, setNewImages] = useState([]);
  const [relatedImages, setRelatedImages] = useState([]);
  //   const [hasMore, setHasMore] = useState(false);
  const apiUrls = [
    "collections/1580860/photos",
    "collections/139386/photos",
    "collections/2020111/photos",
  ];
  const [searchKey, setSearchKey] = useState();
  const getPhotos = () => {
    const one = searchKey
      ? apiUrls[0] + `?page=${page}`
      : apiUrls[0] + `?query={searchKey}`;
    const two = searchKey
      ? apiUrls[0] + `?page=${page}`
      : apiUrls[0] + `?query={searchKey}`;
    const three = searchKey
      ? apiUrls[0] + `?page=${page}`
      : apiUrls[0] + `?query={searchKey}`;
    const requestOne = axios.get(one);
    const requestTwo = axios.get(two);
    const requestThree = axios.get(three);
    Promise.all([requestOne, requestTwo, requestThree])
      .then(([res1, res2, res3]) => {
        console.log(res1.data, "res1");
        console.log(res2.data, "res2");
        console.log(res3.data, "res3");
        setTrendingImages(Object.values(res1.data));
        setNewImages(Object.values(res2.data));
        setRelatedImages(Object.values(res3.data));
      })
      .catch((error) => {   
        setError(true);
        console.log(error);
      });
  };
  useEffect(() => {
    // setLoading(true);
    // setError(false);
    getPhotos();
    // setHasMore(res1.data.length > 0);
    // setLoading(false);
  }, [page, searchKey]);

  const changeSearchKeyHandler = (search) => {
    setSearchKey(search);
    getPhotos();
  };
  return (
    <div>
      <Layout setSearch={changeSearchKeyHandler} />
      <ImageContainer
        trendingImages={trendingImages}
        newImages={newImages}
        relatedImages={relatedImages}
        error={error}
      />
    </div>
  );
};

export default Main;

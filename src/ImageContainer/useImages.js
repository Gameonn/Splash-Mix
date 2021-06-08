import axios from "../axios";
import { useEffect, useState } from "react";
export default function useImages(page, searchkey) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [trendingImages, setTrendingImages] = useState([]);
  const [newImages, setNewImages] = useState([]);
  const [relatedImages, setRelatedImages] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const apiUrls = [
    "collections/1580860/photos",
    "collections/139386/photos",
    "collections/2020111/photos",
  ];

  useEffect(() => {
    setLoading(true);
    setError(false);
    const one = searchkey
      ? apiUrls[0] + `?page=${page}`
      : apiUrls[0] + `?query={searchkey}`;
    const two = apiUrls[1] + `?page=${page}`;
    const three = apiUrls[2] + `?page=${page}`;
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
        setHasMore(res1.data.length > 0);
        setLoading(false);
      })
      .catch((error) => {
        //   setError(true);
        console.log(error);
      });
  }, [page, searchkey]);

  return { loading, error, trendingImages, relatedImages, newImages, hasMore };
}

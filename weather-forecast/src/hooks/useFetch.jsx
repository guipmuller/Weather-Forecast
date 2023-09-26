import { useEffect, useState } from "react";
import APIKey from "../helpers/APIKey";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((location) => {
      
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=${APIKey}`;
      
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setError(data.error)
          setData(data)
          setLoading(false)
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    }, (error) => {
      setError(error.message);
      setLoading(false);
    });
  }, []);

  return { data, loading, error };
};

export default useFetch;

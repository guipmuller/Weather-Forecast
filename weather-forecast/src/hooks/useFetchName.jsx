import { useEffect, useState } from "react";
import APIKey from "../helpers/APIKey";

const useFetchName = () => {
  const [dataName, setDataName] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((location) => {
      
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=${APIKey}&units=metric`;
      
      fetch(url)
        .then((res) => res.json())
        .then((dataName) => {
          setError(dataName.error)
          setDataName(dataName)
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

  return { dataName, loading, error };
};

export default useFetchName;

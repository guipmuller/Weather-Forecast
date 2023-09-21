import useFetch from "../../hooks/useFetch";
import APIKey from "../../helpers/APIKey";

const Home = () => {
//   const url = "https://sv443.net/jokeapi/v2/joke/Programming?type=single";
console.log(APIKey)
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${APIKey}`;
  const { data, loading, error } = useFetch(url);
  if (loading) return <div>Loading...</div>;
  return (
    <div>
      {error && <div>{error}</div>}
      {data && <div>{<div>{data}</div>}</div>}
    </div>
  );
};

export default Home;

import useFetch from "../../hooks/useFetch";
import TempConverter from "../../helpers/TempConverter";

const Home = () => {
  const { data, loading, error } = useFetch();
  if (loading) return <div>Loading...</div>;
  return (
    <div>
      {error && <div>{error}</div>}
      {data && (
        <div>
          {
            <div>
              <p>Nome: {data.name}</p>
              <p>Temp: {TempConverter(data.main.temp)}°C</p>
              <p>Temp Max: {TempConverter(data.main.temp_max)}°C</p>
              <p>Temp Min: {TempConverter(data.main.temp_min)}°C</p>
              <p>Umidade: {data.main.humidity}</p>
              <p>Clima: {data.weather[0].description}</p>
            </div>
          }
        </div>
      )}
    </div>
  );
};

export default Home;

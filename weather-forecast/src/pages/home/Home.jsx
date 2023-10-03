// Hooks
import useFetch from "../../hooks/useFetch";
import useFetchName from "../../hooks/useFetchName";
// Components
import Hourly from "../../components/hourly/Hourly";
import Search from "../../components/search/Search";

const Home = () => {
  const { data, loading, error } = useFetch();
  const { dataName } = useFetchName();

  if (loading) return <div>Loading...</div>;
  return (
    <div>
      {error && <div>{error}</div>}

      {dataName && (
        <div>
          <p>Nome: {dataName.name}</p>
        </div>
      )}

      {data && (
        <div>
          {
            <div>
              <p>Temp: {data.current.temp}°C</p>
              <p>Temp Max: {data.daily[0].temp.max}°C</p>
              <p>Temp Min: {data.daily[0].temp.min}°C</p>
              <p>Umidade: {data.current.humidity}%</p>
              <p>Clima: {data.current.weather[0].description}</p>
            </div>
          }
        </div>
      )}

{/* Modal */}
      <Hourly 
      data={data} />

    </div>
  );
};

export default Home;

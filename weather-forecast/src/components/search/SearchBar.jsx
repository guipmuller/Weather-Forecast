import { useState } from "react";
import APIKey from "../../helpers/APIKey";
import { Search } from "react-bootstrap-icons";

const SearchBar = () => {
  const [data, setData] = useState(null);
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    const encodedValue = encodeURIComponent(value.trim());
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${encodedValue}&limit=5&appid=${APIKey}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados:", error);
      });
  };

  const changeHandler = (value) => {
    setInput(value);
    fetchData(value);
  };

  const searchClickHandler = () => {
    // if (data && data[0]){
    //   setLat(data[0].lat);
    //   setLon(data[0].lon);
    //   return {lat: setLat, lon: setLon};
    // }
  }

  return (
    <div>
      <form action="submit">
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          value={input}
          onChange={(e) => changeHandler(e.target.value)}
          required
        />
        <button onClick={searchClickHandler}>
          <Search />
        </button>
      </form>
      {data && data[0] && (
        <div>
          <p>
            {data[0].name}, {data[0].country}
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchBar;

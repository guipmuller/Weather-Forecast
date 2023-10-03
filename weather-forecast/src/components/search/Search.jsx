import { useState } from "react";
import APIKey from "../../helpers/APIKey";

const Search = () => {
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

  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input
        type="text"
        id="name"
        name="name"
        value={input}
        onChange={(e) => changeHandler(e.target.value)}
        required
      />
      {data && data[0] && (
        <div>
          <p>
            {data[0].name}, {data[0].country}
          </p>
          <p>{data[0].lat}</p>
          <p>{data[0].lon}</p>
        </div>
      )}
    </div>
  );
};

export default Search;

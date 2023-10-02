import React from "react";

const Hourly = ({ data }) => {
  return (
    <div>
      {data.hourly.slice(0, 12).map((hourData, index) => (
     
     <div key={index}>
          <p> {new Date(hourData.dt * 1000).getHours()} H</p>
          <img
            src={`http://openweathermap.org/img/w/${data.current.weather[0].icon}.png`}
            alt="Weather Icon"
          />
          <p>{Math.floor(hourData.temp)}°C</p>
     </div>
     
     ))}
    </div>
  );
};

export default Hourly;

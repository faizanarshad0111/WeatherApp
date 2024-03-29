import React, { useState } from "react";

function SearchBox({updateInfo}) {
  let [city, setCity] = useState("");
  let [error, setError]= useState(false);

  let API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cf51fb245e59ddcba58f0f3f3a7aa018&units=metric
`;
  let getWeatherInfo = async () => {
    try{
    let response = await fetch(API_URL);
    let data = await response.json();
    let result = {
      cityName: data.name,
      date: new Date().toDateString(),
      temp: Math.floor(data.main.temp)+ "°C",
      mintemp: Math.floor(data.main.temp_min) + "°C",
      maxtemp: Math.floor(data.main.temp_max) + "°C",
      humidity: data.main.humidity,
      weather: data.weather[0].description,
      visibility: data.visibility / 1000,
      wind: data.wind.speed,
    };
    return result;
}catch (err){
    throw err;
}
  };
  let handleChange = (event) => {
    setCity(event.target.value);
  };
  let handleSubmit = async (event) => {
    try{
    event.preventDefault();
    console.log(city);
    setCity("");
    let  info = await getWeatherInfo(city);
    updateInfo(info);
    setError(false);
    } catch (e) {
        setError(true);
    }
};

  return (
    <>
      <form className="w-80 mx-auto pb-10">
        <label
          htmlFor="default-search"
          className=" text-3xl font-medium text-white"
        >
          Search
        </label>
        <div className="relative mt-4">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
          <input
            type="search"
            value={city}
            onChange={handleChange}
            id="default-search"
            class="block w-full p-4 ps-10 text-md text-white border border-gray-300 rounded-lg bg-gray-509 "
            placeholder="Search Weather"
            required
          />
          <button
            type="submit"
            className=" text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
            onClick={handleSubmit}
          >
            Search
          </button>
        </div>
      {error && "Invalid City Name"}
      </form>

      {/* card */}
    </>
  );
}

export default SearchBox;

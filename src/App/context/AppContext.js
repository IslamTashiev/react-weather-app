import axios from "axios";
import React, { useReducer } from "react";

const INIT_STATE = {
  weatherData: [],
  cityes: [],
};

const reduser = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_WEATHER_DATA":
      return {
        ...state,
        weatherData: [action.payload],
      };

    default:
      return state;
  }
};

export const appContext = React.createContext();

const API_URL = "https://api.openweathermap.org";
const path = "/data/2.5/weather";
const appId = "8ab486b1adbd26a170b516cce08f889e";
const query = `units=metric&lang=ru&appid=${appId}`;

export default function AppContextProvider({ children }) {
  const [state, dispatch] = useReducer(reduser, INIT_STATE);
  let city = "Бишкек";
  const fetchWeatherData = async () => {
    const response = await axios.get(`${API_URL}${path}?q=${city}&${query}`);
    const data = response.data;
    dispatch({
      type: "GET_WEATHER_DATA",
      payload: data,
    });
  };
  console.log(state.weatherData);

  return (
    <appContext.Provider
      value={{
        weatherData: state.weatherData,
        city,
        fetchWeatherData,
      }}
    >
      {children}
    </appContext.Provider>
  );
}

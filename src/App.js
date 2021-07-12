import React from "react";
import AppContextProvider from "./App/context/AppContext";
import WeatherApp from "./App/index";

function App() {
  return (
    <AppContextProvider>
      <WeatherApp />
    </AppContextProvider>
  );
}

export default App;

import React, { useState } from "react";
import { Route, Routes } from "react-router";
import WeatherDetail from "./WeatherDetail";
import Weathers from "./Weathers";

export const ThemeColorContext = React.createContext("default");

function Dashboard() {
    
    const [currentThemeColor, setCurrentThemeColor] = useState({
        color: "navy",
        changeColor: (color) => { setCurrentThemeColor({ ...currentThemeColor, color: color }) }
    });
    return (
        <ThemeColorContext.Provider value={currentThemeColor}>
            <div>
                <h1>Dashboard</h1>
            </div>
            <Routes>
                <Route path='/' element={<Weathers />} />
                <Route path='/weather-detail/:id' element={<WeatherDetail />} />
            </Routes>
        </ThemeColorContext.Provider>
    );
}

export default Dashboard;
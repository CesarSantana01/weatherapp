import "./style.css";

import { getDefaultWeather,getWeather,getBackground,getTime } from "./weather";
getBackground();
getDefaultWeather();
getTime();

const searchBtn = document.getElementById("searchBtn");
searchBtn.onclick = function(){getWeather();}





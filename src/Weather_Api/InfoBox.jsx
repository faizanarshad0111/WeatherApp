import React from "react";

function InfoBox({info}) {
 
  return (
    <>
      <div class="min-h-50 flex items-center justify-center">
        <div class="flex flex-col bg-white rounded p-10 w-full max-w-xs">
          <div class="font-bold text-xl text-blue-900 pb-2 ">{info.cityName}</div>
          <div class="text-sm text-gray-500">{info.date}</div>
          <div class="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
            <svg
              class="w-32 h-32"
              fill="none"
              stroke="currentColor "
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
              ></path>
            </svg>
          </div>
          <div class="flex flex-row items-center justify-center mt-1">
            <div class="font-medium text-7xl text-blue-900 ">{info.temp}</div>
            <div class="flex flex-col items-center ml-6">
              <div className="text-blue-900 font-bold">{info.weather}</div>
              <div class="mt-1">
                <span class="text-sm">
                  <i class="far fa-long-arrow-up"></i>
                </span>
                <span class="text-sm font-light text-gray-500">min {info.mintemp}</span>
              </div>
              <div>
                <span class="text-sm">
                  <i class="far fa-long-arrow-down"></i>
                </span>
                <span class="text-sm font-light text-gray-500">max {info.maxtemp}</span>
              </div>
            </div>
          </div>
          <div class="flex flex-row justify-between mt-6">
            <div class="flex flex-col items-center">
              <div class="text-sm text-blue-900 font-bold ">Wind</div>
              <div class="text-sm text-gray-500">{info.wind}/h</div>
            </div>
            <div class="flex flex-col items-center">
              <div class=" text-sm text-blue-900 font-bold">Humidity</div>
              <div class="text-sm text-gray-500">{info.humidity}%</div>
            </div>
            <div class="flex flex-col items-center">
              <div class="text-sm text-blue-900 font-bold">Visibility</div>
              <div class="text-sm text-gray-500">{info.visibility}km</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoBox;

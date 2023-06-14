"use client"

import { GeocodingResponse, fetchGeoCoding } from "@/lib/utils"
import { useState, useEffect } from "react"

export default function Page({ params }: { params: { slug: string } }) {
  const [weatherData, setWeatherData] = useState<GeocodingResponse | null>(null)
  //error state
  const [error, setError] = useState<string | null>(null)

  //select imperial or metric units
  const [metric, setMetric] = useState(true)

  useEffect(() => {
    const city = params.slug

    fetchGeoCoding(city, metric ? "metric" : "imperial")
      .then((data) => setWeatherData(data))
      .catch((err) => {
        setError("There was a problem fetching the weather data.")
        console.error(err)
      })
  }, [params.slug, metric])

  if (!weatherData) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>{error}</div>
  }
  console.log(weatherData)
  return (
    <div className="p-8">
      <h1 className="font-bold uppercase">{params.slug}</h1>
      <div className="grid grid-cols-1 grid-rows-2 place-items-center md:grid-cols-2 md:grid-rows-1">
        <div className="col-span-1 grid grid-cols-2 grid-rows-4 place-items-center">
          <h3 className="col-span-2">{weatherData.weather[0].main}</h3>
          <h2 className="col-span-2 row-span-2 text-2xl font-semibold">
            {weatherData.main.temp}°{metric ? "C" : "F"}
          </h2>
          <h3 className="px-4">
            H:{weatherData.main.temp_max}°{metric ? "C" : "F"}
          </h3>
          <h3 className="px-4">
            L:{weatherData.main.temp_min}°{metric ? "C" : "F"}
          </h3>
        </div>
        <div className="col-span-1 mt-4 grid grid-cols-2 grid-rows-2">
          <div className="grid grid-flow-row grid-rows-2 border-b-2 border-r-2">
            <p className="px-4">Sunrise</p>
            <p className="px-4">
              {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}
            </p>
          </div>
          <div className="grid grid-flow-row grid-rows-2 border-b-2 border-l-2">
            <p className="px-4">Sunset</p>
            <p className="px-4">
              {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}
            </p>
          </div>
          <div className="grid grid-flow-row grid-rows-2 border-r-2 border-t-2">
            <p className="px-4">Humidity</p>
            <p className="px-4">{weatherData.main.humidity}</p>
          </div>
          <div className="grid grid-flow-row grid-rows-2 border-l-2 border-t-2">
            <p className="px-4">Visibility</p>
            <p className="px-4">{weatherData.visibility / 1000} km</p>
          </div>
        </div>
      </div>
    </div>
  )
}

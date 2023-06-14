import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type GeocodingResponse = {
  coord: {
    lon: number
    lat: number
  }
  weather: [
    {
      id: number
      main: string
      description: string
      icon: string
    }
  ]
  base: string
  main: {
    temp: number
    feels_like: number
    pressure: number
    humidity: number
    temp_min: number
    temp_max: number
    sea_level?: number
    grnd_level?: number
  }
  visibility: number
  wind: {
    speed: number
    deg: number
    gust?: number
  }
  clouds: {
    all: number
  }
  rain?: {
    "1h"?: number
    "3h"?: number
  }
  snow?: {
    "1h"?: number
    "3h"?: number
  }
  dt: number
  sys: {
    type: number
    id: number
    message: number
    country: string
    sunrise: number
    sunset: number
  }
  timezone: number
  id: number
  name: string
  cod: number
}

// Helper function to fetch the lat,lon coordinates
export async function fetchGeoCoding(city: string, unit: string) {
  const API_KEY = "b1d0ced0452ac6963b5ca1e3cb0bc34e"
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${API_KEY}`
  ) //fetch using the geocoding-api
  const data: GeocodingResponse = await response.json()
  console.log(data)

  return data
}

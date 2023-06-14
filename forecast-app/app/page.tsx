"use client"
import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { fetchGeoCoding } from "@/lib/utils"
import { useEffect, useState } from "react"

export default function IndexPage() {
  const [myLocation, setMyLocation] = useState("Oslo")
  const [temp, setTemp] = useState<number | null>(null)
  const [tempBerlin, setTempBerlin] = useState<number | null>(null) //this should be exported to a separate component
  const [tempLondon, setTempLondon] = useState<number | null>(null)

  useEffect(() => {
    fetchGeoCoding(myLocation, "metric")
      .then((data) => setTemp(data.main.temp))
      .catch(console.error)
  }, [myLocation])

  useEffect(() => {
    fetchGeoCoding("Berlin", "metric").then((data) =>
      setTempBerlin(data.main.temp)
    )
    fetchGeoCoding("London", "metric").then((data) =>
      setTempLondon(data.main.temp)
    )
  }, [])

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Dashboard
        </h1>
      </div>
      <div className="border p-4">
        <p>Input your location here:</p>
        <input
          type="text"
          className="border"
          value={myLocation}
          onChange={(e) => setMyLocation(e.target.value)}
        />
      </div>
      <div className="grid grid-flow-row grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
        <Link
          href={`location/${myLocation}`}
          className={buttonVariants({ variant: "outline" })}
        >
          <p>{myLocation}</p> <span>{temp} °C</span>
        </Link>
        <Link
          href="location/berlin"
          className={buttonVariants({ variant: "outline" })}
        >
          <p>Berlin</p> <span>{tempBerlin} °C</span>
        </Link>
        <Link
          href="location/london"
          className={buttonVariants({ variant: "outline" })}
        >
          <p>London</p> <span>{tempLondon} °C</span>
        </Link>
      </div>
    </section>
  )
}

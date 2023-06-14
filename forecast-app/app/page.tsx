import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Dashboard
        </h1>
      </div>
      <div className="grid grid-flow-row grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
        <Link
          href="location/berlin"
          className={buttonVariants({ variant: "outline" })}
        >
          <p>My Location</p> <span>14 C</span>
        </Link>
        <Link
          href="location/berlin"
          className={buttonVariants({ variant: "outline" })}
        >
          Berlin
        </Link>
        <Link
          href="location/london"
          className={buttonVariants({ variant: "outline" })}
        >
          London
        </Link>
      </div>
    </section>
  )
}

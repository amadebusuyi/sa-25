/* eslint-disable tailwindcss/no-custom-classname */
import React from 'react'
import Flyer from '../assets/flyer.png'

export default function WhySection() {
  return (
    <section className="font-body bg-black px-4 py-16 text-white md:px-10 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-start md:gap-10">
          <div className="mb-8 md:mb-0 md:w-1/2">
            <p className="mb-2 flex items-center gap-2 text-xs uppercase tracking-wide text-white/80">
              <span className="inline-block h-px w-6 bg-white"></span>
              About Summer Academy
            </p>
            <h2 className="font-heading text-3xl leading-snug md:text-4xl">
              Why Summer
              <br />
              Academy 2025?
            </h2>
          </div>

          <div className="text-md space-y-4 leading-relaxed text-white/90 md:w-1/2">
            <p>
              In a world transformed by AI and rapid technological change, we’re
              equipping teenagers with the skills, mindset, and spiritual
              foundation to thrive.
            </p>
            <p>
              We’re living in an era of unprecedented transformation. Artificial
              intelligence is reshaping every industry, creating new
              opportunities while disrupting traditional career paths. Our
              teenagers need more than just academic knowledge—they need
              adaptability, creativity, and a strong foundation of values.
            </p>
            <p>
              This academy bridges the gap between cutting-edge education and
              spiritual development, preparing participants not just for future
              success, but for meaningful impact in their communities and
              beyond.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <img
            src={Flyer}
            alt="Flyer for Summer Academy 2025"
            className="w-full rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  )
}

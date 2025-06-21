/* eslint-disable tailwindcss/no-custom-classname */
import React from 'react'
import HeroBg from '../assets/hero-bg.png'
import Logo from '../assets/logo.png'

export default function HeroSection({ onApplyClick }) {
  return (
    <section
      className="relative flex min-h-screen flex-col justify-between bg-cover bg-center text-white"
      style={{ backgroundImage: `url('${HeroBg}')` }}
    >
      <div className="flex items-center justify-between p-4 md:px-10">
        <img src={Logo} alt="Glory Realms Logo" className="h-6 md:h-8" />
        <button
          onClick={onApplyClick}
          className="font-heading rounded-full bg-white px-5 py-2 text-sm text-black transition hover:bg-gray-200"
        >
          Apply Now
        </button>
      </div>

      <div className="flex flex-col items-center px-4 text-center">
        <h1 className="font-heading mb-4 text-4xl sm:text-6xl md:text-8xl">
          SUMMER <br /> ACADEMY
        </h1>
        <p className="font-body mb-6 max-w-xl text-base md:text-lg">
          Join GRTM Summer Aademy for a transformative future.
        </p>
        <button
          onClick={onApplyClick}
          className="font-heading rounded-full bg-white px-6 py-3 text-sm text-black transition hover:bg-gray-200 md:text-base"
        >
          Apply Now
        </button>
      </div>

      <div className="font-body flex flex-col items-center justify-center px-4 py-6 text-sm text-white md:flex-row md:justify-between md:px-10">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <span className="text-center">Ages 12 to 20</span>
          <span className="my-2 h-12 border-l border-gray-300 md:hidden" />
        </div>
        <div className="mx-2 hidden w-1/5 border-t border-gray-300 md:inline-block" />

        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <span className="text-center">August 4th - 26th 2025</span>
          <span className="my-2 h-12 border-l border-gray-300 md:hidden" />
        </div>
        <div className="mx-2 hidden w-1/5 border-t border-gray-300 md:inline-block" />

        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <span>5 Core Modules</span>
        </div>
      </div>
    </section>
  )
}

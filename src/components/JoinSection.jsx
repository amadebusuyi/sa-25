import React from 'react'

export default function JoinSection({ onApplyClick }) {
  return (
    <section className="bg-black px-4 py-16 text-white md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-heading mb-6 text-4xl leading-tight sm:text-6xl md:text-8xl">
          JOIN THE ACADEMY
        </h2>
        <p className="font-body mb-8 text-sm md:text-base">
          Ready to transform your future?
        </p>
        <p className="font-body mb-10 text-sm md:text-base">
          Apply now for Summer Academy 2025 and be part of <br /> the next
          generation of kingdom leaders.
        </p>
        <button
          onClick={onApplyClick}
          className="font-heading rounded-full bg-white px-6 py-2 text-black transition-all hover:bg-gray-200"
        >
          Apply Now
        </button>
      </div>
    </section>
  )
}

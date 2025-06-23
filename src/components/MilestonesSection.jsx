/* eslint-disable tailwindcss/migration-from-tailwind-2 */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Background from '../assets/bg-2.png'

const MilestonesSection = ({ onApplyClick }) => {
  return (
    <div
      className="flex min-h-screen w-full items-center justify-center bg-cover bg-center px-6 py-16"
      style={{ backgroundImage: `url('${Background}')` }}
    >
      <div className="flex w-full max-w-6xl flex-col items-start justify-between gap-10 text-white md:flex-row">
        <div className="w-full md:w-1/2">
          <h2 className="font-heading mb-4 text-4xl font-bold">
            Key Milestones
          </h2>
          <p className="mb-6 text-sm leading-relaxed">
            Each module is designed to build essential skills for thriving in
            today’s rapidly changing world.
          </p>
          <button
            onClick={onApplyClick}
            className="font-heading rounded-full bg-white px-6 py-3 text-sm text-black transition hover:bg-gray-200 md:text-base"
          >
            Apply Now
          </button>
        </div>

        <div className="w-full space-y-3 text-center md:w-1/2 md:pl-[100px]">
          <div className="rounded-xl border border-white/30 bg-white/10 p-6">
            <p className="mb-1 text-sm text-white/80">Registration Opens</p>
            <p className="text-xl font-semibold">June 22, 2025</p>
          </div>
          <div className="mx-2 inline-block h-[30px] border-l border-gray-300" />
          <div className="rounded-xl border border-white/30 bg-white/10 p-6">
            <p className="mb-1 text-sm text-white/80">Registration Closes</p>
            <p className="text-xl font-semibold">July 27, 2025</p>
          </div>
          <div className="mx-2 inline-block h-[30px] border-l border-gray-300" />
          <div className="rounded-xl border border-white/30 bg-white/10 p-6">
            <p className="mb-1 text-sm text-white/80">Program Begins</p>
            <p className="text-xl font-semibold">August 4, 2025</p>
          </div>
          <div className="mx-2 inline-block h-[30px] border-l border-gray-300" />
          <div className="rounded-xl border border-white/30 bg-white/10 p-6">
            <p className="mb-1 text-sm text-white/80">Program Completion</p>
            <p className="text-xl font-semibold">August 26, 2025</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MilestonesSection

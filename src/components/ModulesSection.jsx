/* eslint-disable react/no-unescaped-entities */
import React from 'react'

const modules = [
  {
    number: 1,
    title: 'Clarity Framework',
    description:
      'A practical design thinking approach for solving problems with creativity, character, and confidence.',
    items: [
      'Connect with problems deeply',
      'Look deeper for root causes',
      'Align solutions with values',
      'Reimagine creative possibilities',
      'Implement and iterate solutions'
    ]
  },
  {
    number: 2,
    title: 'Launch Lab',
    description:
      'Develop entrepreneurial mindset and skills for creating value from scratch, with no initial capital.',
    items: [
      'Entrepreneurial mindset development',
      'Identifying market opportunities',
      'Personal branding essentials',
      'MVP development process',
      'Pitching and presentation skills'
    ]
  },
  {
    number: 3,
    title: 'Creative Writing',
    description:
      'Develop thinking, emotional intelligence, and expression through powerful storytelling.',
    items: [
      'Writing as a tool for thinking',
      'Emotional expression techniques',
      'Multiple genres exploration',
      'Impactful communication'
    ]
  },
  {
    number: 4,
    title: 'AI Playground',
    description:
      'Explore artificial intelligence in everyday life and learn to create with it responsibly.',
    items: [
      'Understanding AI fundamentals',
      'AI in daily tools and platforms',
      'Creative AI applications',
      'Ethics and responsible AI use'
    ]
  },
  {
    number: 5,
    title: 'The Reading Circle',
    description:
      'Explore identity, values, and purpose through Holy Scripture and reflective reading.',
    items: [
      'Discovering personal identity',
      'Understanding purpose and calling',
      'Building resilience through faith',
      'Connecting Scripture to daily life',
      'Developing spiritual discernment'
    ]
  }
]

const ModuleSection = () => {
  return (
    <section className="bg-black px-4 py-12 text-white md:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-heading mb-12 text-center text-2xl font-bold leading-snug md:text-left md:text-4xl">
          Five Modules Designed To Build Essential Skills For Thriving In
          Today's Rapidly Changing World.
        </h2>

        <div className="mt-24 justify-between space-y-12">
          {modules.map((mod) => (
            <div
              key={mod.number}
              className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-8"
            >
              <div className="mb-2 w-full md:mb-0 md:w-1/5">
                <p className="text-left text-sm font-medium uppercase tracking-wide md:text-base">
                  Module {mod.number}
                </p>
              </div>
              <div className="w-full rounded-xl bg-zinc-900 p-6 shadow-md md:w-3/5 md:p-8">
                <h3 className="font-heading mb-2 text-lg font-[500] md:text-xl">
                  {mod.title}
                </h3>
                <p className="mb-4 text-sm text-zinc-300">{mod.description}</p>
                <ul className="list-none space-y-1 text-sm text-zinc-400">
                  {mod.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 p-1">
                      <span
                        className="h-[20px] text-zinc-500"
                        style={{ border: '1.5px solid #ffffff12' }}
                      ></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ModuleSection

import React, { useState } from 'react'
import HeroSection from './HeroSection'
import WhySection from './WhySection'
import ModulesSection from './ModulesSection'
import MilestonesSection from './MilestonesSection'
import JoinSection from './JoinSection'
import ApplyModal from './ApplyModal'
import Footer from './Footer'

export default function App() {
  const [showForm, setShowForm] = useState(false)
  return (
    // eslint-disable-next-line tailwindcss/no-custom-classname
    <div className="font-body">
      <HeroSection onApplyClick={() => setShowForm(true)} />
      <WhySection />
      <ModulesSection />
      <MilestonesSection onApplyClick={() => setShowForm(true)} />
      <JoinSection onApplyClick={() => setShowForm(true)} />
      <ApplyModal isOpen={showForm} onClose={() => setShowForm(false)} />
      <Footer />
    </div>
  )
}

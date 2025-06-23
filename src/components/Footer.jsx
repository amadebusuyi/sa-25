import React from 'react'
import { Mail, MapPin, Phone, Instagram } from 'lucide-react'
import Logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer className="w-full border-t border-white/20 bg-black px-6 py-12 text-sm text-white">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-10 md:flex-row">
        <div className="space-y-4 md:w-2/3">
          <div className="flex items-center gap-2">
            <img src={Logo} alt="Glory Realms Logo" className="h-6" />
          </div>
          <p className="max-w-xl text-sm text-white/70">
            Glory Realms Teens Ministry (GRTM) is the teens ministry of Glory
            Centre Community Church. We are committed to transforming the lives
            of young teenagers, sealing them for their God-given destiny.
          </p>
        </div>

        <div className="space-y-3 text-white/70 md:w-1/3">
          <p className="mb-2 font-semibold">Contact Us @</p>
          <div className="flex items-start gap-2">
            <MapPin className="mt-1 size-4" />
            <p className="text-sm">
              12, Efon Alaye close, Off Sule Olajide Street, Ojodu Berger, Lagos
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="size-4" />
            <a href="mailto:gloryrealmteensmin@gmail.com">
              gloryrealmteensmin@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="size-4" />
            <a href="tel:+2349154104675">+234 915 410 4675</a>
          </div>
          <div className="flex items-center gap-2">
            <Instagram className="size-4" />
            <a
              href="https://instagram.com/grtministry"
              target="_blank"
              rel="noreferrer"
            >
              @grtministry
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

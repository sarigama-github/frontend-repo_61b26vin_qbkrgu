import React from 'react'
import { Linkedin, Twitter, Github } from 'lucide-react'

export default function Footer(){
  return (
    <footer className="relative mt-24 border-t border-white/10 bg-gradient-to-b from-transparent to-slate-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 text-sm text-white/70">
          <div className="col-span-2">
            <h3 className="text-white font-semibold text-lg">AccesInt</h3>
            <p className="mt-3 max-w-md">We build intelligent, accessible digital products that move businesses forward. Custom software, AI, mobile, web, cloud — end to end.</p>
          </div>
          <div>
            <p className="text-white/80 font-medium">Company</p>
            <ul className="mt-3 space-y-2">
              <li><a href="/about" className="hover:text-white">About</a></li>
              <li><a href="/services" className="hover:text-white">Services</a></li>
              <li><a href="/products" className="hover:text-white">Products</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <p className="text-white/80 font-medium">Follow</p>
            <div className="mt-3 flex gap-3">
              <a href="#" className="hover:text-white"><Linkedin size={18}/></a>
              <a href="#" className="hover:text-white"><Twitter size={18}/></a>
              <a href="#" className="hover:text-white"><Github size={18}/></a>
            </div>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-between text-xs text-white/50">
          <p>© {new Date().getFullYear()} AccesInt, Inc. All rights reserved.</p>
          <p>Privacy • Terms</p>
        </div>
      </div>
    </footer>
  )
}

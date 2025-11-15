'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav style={{ position: 'sticky', top: 0, zIndex: 50, backgroundColor: 'white', borderBottom: '1px solid hsl(var(--border))' }} className="dark:bg-slate-950/95 backdrop-blur">
      <div className="container">
        <div className="flex justify-between items-center" style={{ height: '4rem' }}>
          {/* Logo */}
          <div className="flex items-center" style={{ gap: '0.25rem' }}>
            <div style={{ width: '2rem', height: '2rem', borderRadius: '9999px', border: '2px solid hsl(var(--accent))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span className="text-xs font-bold text-accent">ش</span>
            </div>
            <span className="font-serif text-xl font-bold text-foreground">Shahira</span>
          </div>

          {/* Desktop Navigation */}
          <div className="md:flex items-center hidden" style={{ gap: '2rem' }}>
            <a href="#collections" className="text-foreground hover:text-accent transition">
              Collections
            </a>
            <a href="#craftsmanship" className="text-foreground hover:text-accent transition">
              Craftsmanship
            </a>
            <a href="#about" className="text-foreground hover:text-accent transition">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-accent transition">
              Contact
            </a>
          </div>

          {/* Language & Mobile Menu */}
          <div className="flex items-center" style={{ gap: '1rem' }}>
            <button className="hidden sm:block text-sm text-muted-foreground hover:text-foreground transition">
              EN
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-foreground"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <a href="#collections" className="block px-4 py-2 text-foreground hover:bg-muted rounded">
              Collections
            </a>
            <a href="#craftsmanship" className="block px-4 py-2 text-foreground hover:bg-muted rounded">
              Craftsmanship
            </a>
            <a href="#about" className="block px-4 py-2 text-foreground hover:bg-muted rounded">
              About
            </a>
            <a href="#contact" className="block px-4 py-2 text-foreground hover:bg-muted rounded">
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

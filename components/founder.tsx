export default function Founder() {
  return (
    <section id="about" className="py-20 sm:py-32 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5 arabic-pattern"></div>

      <div className="container relative" style={{ zIndex: 10 }}>
        <div className="grid md:grid-cols-2" style={{ gap: '3rem', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-2">Our Story</p>
              <h2 className="text-4xl sm:text-5xl font-serif font-bold leading-tight">
                Founded on <span className="text-accent">Passion</span>
              </h2>
            </div>
            <p className="text-lg leading-relaxed" style={{ color: '#cbd5e1' }}>
              Shahira was born from a vision to celebrate Arabic heritage through fashion. Our founder, rooted in deep cultural traditions, set out to create pieces that honor the past while embracing contemporary elegance.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: '#cbd5e1' }}>
              Each collection represents our commitment to empowering individuals with fashion that tells their story—timeless, elegant, and unmistakably authentic.
            </p>
            <div className="pt-4">
              <p className="font-serif text-xl font-bold text-accent">Layla Al-Rashid</p>
              <p style={{ color: '#94a3b8' }}>Founder & Creative Director</p>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/elegant-woman-founder-portrait-professional.jpg"
                alt="Founder Layla Al-Rashid"
                className="w-full h-full object-cover"
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15, 23, 42, 0.6), transparent)' }}></div>
            </div>
            {/* Decorative Circles */}
            <div style={{ position: 'absolute', top: '-2rem', right: '-2rem', width: '8rem', height: '8rem', border: '2px solid hsl(var(--accent))', borderRadius: '9999px', opacity: 0.3 }}></div>
            <div style={{ position: 'absolute', bottom: '-3rem', left: '-3rem', width: '12rem', height: '12rem', border: '1px solid hsl(var(--accent))', borderRadius: '9999px', opacity: 0.2 }}></div>
          </div>
        </div>
      </div>
    </section>
  )
}

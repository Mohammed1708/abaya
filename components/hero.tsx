"use client"

export default function Hero() {
  return (
    <section className="py-20 sm:py-32 bg-gradient-to-br arabic-pattern" style={{ background: 'linear-gradient(135deg, hsl(var(--slate-50)), hsl(var(--slate-100)))' }}>
      <div className="container">
        <div className="grid md:grid-cols-2" style={{ gap: '3rem', alignItems: 'center' }}>
          {/* Text Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <p className="text-accent text-sm font-semibold tracking-widest uppercase">Premium Fashion</p>
              <h1 className="text-5xl sm:text-6xl font-serif font-bold text-foreground leading-tight">
                Where Heritage
                <br />
                Meets <span className="text-accent">Elegance</span>
              </h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Discover our exquisite collection of premium Arabic fashion, meticulously crafted to celebrate your unique style with timeless elegance and authentic tradition.
            </p>
            <div className="flex gap-4 pt-4">
              <button style={{ padding: '0.75rem 2rem', backgroundColor: 'hsl(var(--primary))', color: 'white', fontWeight: '600', borderRadius: '0.375rem', border: 'none', cursor: 'pointer', transition: 'all 150ms' }} onMouseOver={(e) => e.currentTarget.style.opacity = '0.9'} onMouseOut={(e) => e.currentTarget.style.opacity = '1'}>
                Explore Collection
              </button>
              <button style={{ padding: '0.75rem 2rem', border: '2px solid hsl(var(--accent))', color: 'hsl(var(--accent))', fontWeight: '600', borderRadius: '0.375rem', cursor: 'pointer', backgroundColor: 'transparent', transition: 'all 150ms' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'hsl(var(--accent))'; e.currentTarget.style.color = '#333'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'hsl(var(--accent))'; }}>
                Learn More
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square bg-accent rounded-2xl overflow-hidden shadow-lg" style={{ backgroundImage: 'url(/luxury-arabic-fashion-abaya-hijab-elegant.jpg)', backgroundSize: 'cover' }}>
              <img
                src="/luxury-arabic-fashion-abaya-hijab-elegant.jpg"
                alt="Premium Arabic Fashion Collection"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div style={{ position: 'absolute', top: '-1.5rem', right: '-1.5rem', width: '6rem', height: '6rem', border: '2px solid hsl(var(--accent))', borderRadius: '9999px', opacity: 0.5 }}></div>
            <div style={{ position: 'absolute', bottom: '-1rem', left: '-1rem', width: '8rem', height: '8rem', border: '1px solid hsl(var(--accent))', borderRadius: '9999px', opacity: 0.3 }}></div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

export default function Collections() {
  const collections = [
    {
      id: 1,
      name: "Abayas",
      description: "Timeless elegance redefined",
      image: "/luxury-black-abaya-embroidered.jpg",
    },
    {
      id: 2,
      name: "Kaftans",
      description: "Flowing grace and sophistication",
      image: "/luxury-kaftan-gold-embroidery.jpg",
    },
    {
      id: 3,
      name: "Hijabs",
      description: "Artistry meets comfort",
      image: "/luxury-hijab-silk-premium.jpg",
    },
  ]

  return (
    <section id="collections" className="py-20 sm:py-32 bg-background">
      <div className="container">
        <div className="mb-16 text-center" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <p className="text-accent text-sm font-semibold tracking-widest uppercase">Our Collections</p>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground">
            Curated Excellence
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Each collection represents our commitment to quality, heritage, and modern sophistication
          </p>
        </div>

        <div className="grid md:grid-cols-3" style={{ gap: '2rem' }}>
          {collections.map((collection) => (
            <div key={collection.id} style={{ cursor: 'pointer' }}>
              <div className="relative overflow-hidden rounded-2xl shadow-lg" style={{ aspectRatio: '3/4', marginBottom: '1.5rem', backgroundColor: 'hsl(var(--slate-900))' }}>
                <img
                  src={collection.image || "/placeholder.svg"}
                  alt={collection.name}
                  className="w-full h-full object-cover"
                  style={{ opacity: 0.8, transition: 'opacity 500ms' }}
                  onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
                  onMouseOut={(e) => e.currentTarget.style.opacity = '0.8'}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}></div>
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.5rem' }}>
                  <h3 className="text-2xl font-serif font-bold text-white mb-2">{collection.name}</h3>
                  <p className="text-accent text-sm" style={{ opacity: 0.8 }}>{collection.description}</p>
                </div>
              </div>
              <button style={{ width: '100%', padding: '0.75rem', border: '2px solid hsl(var(--accent))', color: 'hsl(var(--accent))', fontWeight: '600', borderRadius: '0.375rem', cursor: 'pointer', backgroundColor: 'transparent', transition: 'all 150ms' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'hsl(var(--accent))'; e.currentTarget.style.color = '#333'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'hsl(var(--accent))'; }}>
                Explore
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

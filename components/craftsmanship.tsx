"use client"

export default function Craftsmanship() {
  const features = [
    {
      number: "01",
      title: "Heritage Techniques",
      description: "Traditional embroidery and hand-stitching methods passed down through generations"
    },
    {
      number: "02",
      title: "Premium Materials",
      description: "Luxurious fabrics sourced from the finest mills, ensuring comfort and durability"
    },
    {
      number: "03",
      title: "Attention to Detail",
      description: "Every stitch, every seam, every embellishment is crafted with precision and care"
    },
  ]

  return (
    <section id="craftsmanship" className="py-20 sm:py-32" style={{ background: 'linear-gradient(to bottom, white, hsl(var(--slate-50)))' }}>
      <div className="container">
        <div className="grid md:grid-cols-2" style={{ gap: '3rem', alignItems: 'center', marginBottom: '5rem' }}>
          <div>
            <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">Excellence</p>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-6">
              Uncompromising Craftsmanship
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Every piece in our collection tells a story of dedication, artistry, and commitment to perfection. We blend traditional Arabic craftsmanship with contemporary luxury.
            </p>
          </div>
          <div className="relative">
            <img
              src="/detailed-embroidery-close-up-hands-stitching.jpg"
              alt="Craftsmanship Details"
              className="rounded-2xl shadow-lg"
            />
            <div style={{ position: 'absolute', bottom: '-1rem', left: '-1rem', width: '10rem', height: '10rem', border: '1px solid hsl(var(--accent))', borderRadius: '9999px', opacity: 0.2 }}></div>
          </div>
        </div>

        <div className="grid md:grid-cols-3" style={{ gap: '2rem' }}>
          {features.map((feature) => (
            <div key={feature.number} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '2rem', border: '1px solid hsl(var(--border))', borderRadius: '0.75rem', backgroundColor: 'hsl(var(--card-bg))', transition: 'all 150ms' }} onMouseOver={(e) => e.currentTarget.style.borderColor = 'hsl(var(--accent))'} onMouseOut={(e) => e.currentTarget.style.borderColor = 'hsl(var(--border))'}>
              <div className="text-4xl font-serif font-bold text-accent">{feature.number}</div>
              <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

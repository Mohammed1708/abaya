"use client"

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t" style={{ borderColor: 'hsl(var(--slate-800))' }}>
      <div className="container py-16">
        <div className="grid md:grid-cols-4" style={{ gap: '2rem', marginBottom: '3rem' }}>
          {/* Brand */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="flex items-center" style={{ gap: '0.5rem' }}>
              <div style={{ width: '2rem', height: '2rem', borderRadius: '9999px', border: '2px solid hsl(var(--accent))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span className="text-xs font-bold text-accent">ش</span>
              </div>
              <span className="font-serif text-xl font-bold text-white">Shahira</span>
            </div>
            <p className="text-sm">Premium Arabic fashion celebrating heritage and elegance.</p>
          </div>

          {/* Collections */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h4 className="font-semibold text-white">Collections</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }} className="text-sm">
              <li><a href="#" className="hover:text-accent transition">Abayas</a></li>
              <li><a href="#" className="hover:text-accent transition">Kaftans</a></li>
              <li><a href="#" className="hover:text-accent transition">Hijabs</a></li>
              <li><a href="#" className="hover:text-accent transition">Accessories</a></li>
            </ul>
          </div>

          {/* Company */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h4 className="font-semibold text-white">Company</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }} className="text-sm">
              <li><a href="#" className="hover:text-accent transition">About Us</a></li>
              <li><a href="#" className="hover:text-accent transition">Craftsmanship</a></li>
              <li><a href="#" className="hover:text-accent transition">Contact</a></li>
              <li><a href="#" className="hover:text-accent transition">Lookbook</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h4 className="font-semibold text-white">Connect</h4>
            <div className="flex" style={{ gap: '1rem' }}>
              <a href="#" style={{ width: '2.5rem', height: '2.5rem', borderRadius: '9999px', border: '1px solid hsl(var(--accent))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.875rem', fontWeight: 'bold', transition: 'all 150ms', cursor: 'pointer' }} className="hover:bg-accent hover:text-slate-950" onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'hsl(var(--accent))'; e.currentTarget.style.color = '#1a202c'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'hsl(var(--accent))'; }}>
                f
              </a>
              <a href="#" style={{ width: '2.5rem', height: '2.5rem', borderRadius: '9999px', border: '1px solid hsl(var(--accent))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.875rem', fontWeight: 'bold', transition: 'all 150ms', cursor: 'pointer' }} className="hover:bg-accent hover:text-slate-950" onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'hsl(var(--accent))'; e.currentTarget.style.color = '#1a202c'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'hsl(var(--accent))'; }}>
                in
              </a>
              <a href="#" style={{ width: '2.5rem', height: '2.5rem', borderRadius: '9999px', border: '1px solid hsl(var(--accent))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.875rem', fontWeight: 'bold', transition: 'all 150ms', cursor: 'pointer' }} className="hover:bg-accent hover:text-slate-950" onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'hsl(var(--accent))'; e.currentTarget.style.color = '#1a202c'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'hsl(var(--accent))'; }}>
                ig
              </a>
            </div>
          </div>
        </div>

        <div className="border-t" style={{ borderColor: 'hsl(var(--slate-800))', paddingTop: '2rem' }}>
          <div className="flex flex-col md:flex-row justify-between items-center text-xs">
            <p>&copy; 2025 Shahira. All rights reserved.</p>
            <div className="flex md:mt-0" style={{ gap: '1.5rem', marginTop: '1rem' }}>
              <a href="#" className="hover:text-accent transition">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition">Terms of Service</a>
              <a href="#" className="hover:text-accent transition">Returns</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

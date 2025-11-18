import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About(){
  const team = [
    {name:'Avery Steele', role:'Founder & CEO'},
    {name:'Rin Kaede', role:'Head of Design'},
    {name:'Noah Voss', role:'Lead Engineer'},
    {name:'Zara Quinn', role:'Product Manager'},
  ]

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <section id="about" className="pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-100">Our Story</h1>
            <p className="mt-4 text-slate-300/90">We build tools that feel forged — solid, reliable, and future-forward. Our mission is to craft experiences that look and perform like high-grade hardware: durable, minimal, and beautiful.</p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m, i) => (
              <div key={i} className="rounded-2xl border border-slate-700/70 chrome-edges glass-metal neon-underglow p-4 flex flex-col items-center text-center">
                <div className="h-32 w-32 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/70 shadow-inner mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(167,139,250,0.25),transparent_40%)]"></div>
                </div>
                <div className="text-slate-100 font-semibold">{m.name}</div>
                <div className="text-slate-400 text-sm">{m.role}</div>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-2xl border border-slate-700/70 chrome-edges glass-metal neon-underglow p-6">
            <h2 className="text-2xl font-semibold text-slate-100">Mission</h2>
            <p className="mt-2 text-slate-300/90">Design software that pairs material depth with minimal UX — heavy-duty visuals, featherlight interactions.</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

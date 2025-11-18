import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Services(){
  const items = [
    {title:'Core Platform', desc:'Battle-tested SaaS foundation with chrome-neon UI system.'},
    {title:'Custom Integrations', desc:'Secure APIs and workflow automation.'},
    {title:'Design System', desc:'Reusable components with metallic surfaces and neon tokens.'},
    {title:'Analytics', desc:'High-contrast, real-time dashboards with glowing accents.'},
    {title:'Consulting', desc:'Architecture guidance with performance at the core.'},
    {title:'Support', desc:'Priority support and success engineering.'},
  ]

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-100">Our Services</h1>
            <p className="mt-3 text-slate-400">Everything you need to launch and scale with a premium visual identity.</p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((s, i) => (
              <div key={i} className="group rounded-2xl border border-slate-700/70 chrome-edges glass-metal neon-underglow p-6 transition-all hover:-translate-y-0.5">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-violet-500/30 to-fuchsia-500/20 border border-violet-400/30 shadow-[0_0_30px_4px_rgba(167,139,250,0.35)] mb-4 group-hover:shadow-[0_0_36px_6px_rgba(167,139,250,0.55)] transition-shadow"></div>
                <h3 className="text-lg font-semibold text-slate-100">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

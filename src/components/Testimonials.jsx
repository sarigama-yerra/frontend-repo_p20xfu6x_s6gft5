export default function Testimonials(){
  const items = [
    {name:'Alex', role:'CTO, VectorGrid', quote:'This aesthetic makes our platform feel premium and ahead of the curve.'},
    {name:'Maya', role:'Founder, NeonOps', quote:'The metallic depth and glow accents are stunning and performant.'},
    {name:'Jin', role:'Design Lead, BlackForge', quote:'Truly unique visual system — heavy, industrial, yet minimal.'},
  ]
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 text-center">What customers say</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <div key={i} className="rounded-2xl border border-slate-700/70 chrome-edges glass-metal p-6 neon-underglow">
              <p className="text-slate-300">“{t.quote}”</p>
              <div className="mt-4 text-sm text-slate-400">{t.name} • {t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Features() {
  const features = [
    {
      title: 'Industrial-grade UI',
      desc: 'Metallic surfaces with glass layers. Heavy yet minimal.',
    },
    {
      title: 'Neon Reactive',
      desc: 'Violet glow system with subtle hover lighting and depth.',
    },
    {
      title: 'Production Engineered',
      desc: 'Clean code, reusable tokens, and performance tuned.',
    },
    {
      title: 'Responsive Grid',
      desc: 'Meticulous spacing, rounded chrome edges across breakpoints.',
    },
    {
      title: 'Animation System',
      desc: 'Smooth fades, parallax hints, and microinteractions.',
    },
    {
      title: 'Secure & Fast',
      desc: 'Best practices, accessibility, and fast load times.',
    },
  ]

  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100">Why teams choose us</h2>
          <p className="mt-3 text-slate-400">Engineered design language for modern SaaS — robust, elegant, and unmistakably premium.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div key={i} className="group relative rounded-2xl border border-slate-700/70 chrome-edges glass-metal p-6 neon-underglow hover:-translate-y-0.5 transition-all duration-300">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-white/6 via-white/0 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-violet-500/30 to-fuchsia-500/20 border border-violet-400/30 shadow-[0_0_30px_4px_rgba(167,139,250,0.35)] mb-4"></div>
              <h3 className="text-lg font-semibold text-slate-100">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

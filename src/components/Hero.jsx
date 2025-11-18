import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 md:pt-40 md:pb-28">
      {/* Background gradients */}
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[1000px] rounded-full opacity-30 blur-3xl" style={{background:'radial-gradient(circle at 50% 50%, rgba(168,85,247,0.25), rgba(15,23,42,0.2) 60%)'}} />
        <div className="pointer-events-none absolute -bottom-40 right-1/2 translate-x-1/2 h-[600px] w-[1000px] rounded-full opacity-20 blur-3xl" style={{background:'radial-gradient(circle at 50% 50%, rgba(139,92,246,0.2), rgba(2,6,23,0.2) 60%)'}} />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-100 leading-tight">
              Futuristic SaaS built in <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-fuchsia-300 to-violet-400">Chrome Neon Dark Metal</span>
            </h1>
            <p className="mt-5 text-slate-300/90 text-lg md:text-xl max-w-xl">
              Premium, industrial design with metallic depth, neon-violet highlights and glass-metal interfaces. Performance-focused and production-ready.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#features" className="futuristic-btn">Start Free Trial</a>
              <a href="#about" className="btn-outline-chrome">Learn More</a>
            </div>

            <div className="mt-8 flex items-center gap-6 text-slate-400/80 text-sm">
              <div className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_12px_2px_rgba(167,139,250,0.85)]"></span> 99.9% uptime</div>
              <div className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_12px_2px_rgba(167,139,250,0.85)]"></span> SOC2-ready</div>
              <div className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_12px_2px_rgba(167,139,250,0.85)]"></span> Blazing fast</div>
            </div>
          </div>

          <div className="relative h-[420px] md:h-[520px] rounded-3xl border border-slate-700/60 chrome-edges glass-metal neon-underglow">
            <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />

            {/* chrome top bar */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-10 rounded-t-3xl bg-gradient-to-b from-white/10 to-transparent border-b border-white/10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

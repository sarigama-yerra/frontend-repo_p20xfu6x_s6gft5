import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'

export default function Contact(){
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="rounded-2xl border border-slate-700/70 chrome-edges glass-metal neon-underglow p-6">
              <h1 className="text-4xl font-bold text-slate-100">Contact Us</h1>
              <p className="mt-2 text-slate-400">We usually respond within 1 business day.</p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="block text-sm text-slate-300 mb-1">Name</label>
                  <input required className="w-full rounded-xl bg-slate-900/80 border border-slate-700/80 px-3 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-violet-500/60 focus:border-violet-400/60 transition-shadow neon-focus" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm text-slate-300 mb-1">Email</label>
                  <input required type="email" className="w-full rounded-xl bg-slate-900/80 border border-slate-700/80 px-3 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-violet-500/60 focus:border-violet-400/60 transition-shadow neon-focus" placeholder="you@company.com" />
                </div>
                <div>
                  <label className="block text-sm text-slate-300 mb-1">Message</label>
                  <textarea required rows="5" className="w-full rounded-xl bg-slate-900/80 border border-slate-700/80 px-3 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-violet-500/60 focus:border-violet-400/60 transition-shadow neon-focus" placeholder="Tell us about your project..." />
                </div>
                <button className="futuristic-btn w-full">Send Message</button>
                {sent && <div className="text-violet-300 text-sm">Thanks! We will get back to you shortly.</div>}
              </form>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl border border-slate-700/70 chrome-edges glass-metal neon-underglow p-6">
                <h2 className="text-xl font-semibold text-slate-100">Location</h2>
                <div className="mt-3 h-56 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/70 shadow-inner relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(167,139,250,0.15),transparent_50%)]"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-slate-500">Map Placeholder</div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-700/70 chrome-edges glass-metal neon-underglow p-6">
                <h2 className="text-xl font-semibold text-slate-100">Contact</h2>
                <div className="mt-2 text-slate-300/90">team@yoursaas.com</div>
                <div className="text-slate-300/90">+1 (555) 000-0000</div>
                <a href="#" className="mt-4 inline-block btn-outline-chrome">Book a Call</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Separator from '../components/Separator'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

export default function Home(){
  return (
    <div className="min-h-screen bg-slate-950 selection:bg-violet-500/30 selection:text-violet-100">
      <Navbar />
      <Hero />
      <Separator />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  )
}

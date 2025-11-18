export default function Footer(){
  return (
    <footer className="relative mt-24">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-700/80 to-transparent"></div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="rounded-2xl border border-slate-700/70 chrome-edges glass-metal p-6 neon-underglow">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-slate-400 text-sm">© 2025 Your SaaS. All rights reserved.</div>
            <div className="flex items-center gap-4 text-slate-400 text-sm">
              <a className="hover:text-slate-200" href="#">Privacy</a>
              <a className="hover:text-slate-200" href="#">Terms</a>
              <a className="hover:text-slate-200" href="#">Security</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

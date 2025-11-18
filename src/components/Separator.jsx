export default function Separator() {
  return (
    <div className="relative my-16">
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-slate-600/60 to-transparent"></div>
      <div className="absolute left-1/2 -translate-x-1/2 -top-1.5 h-3 w-3 rounded-full bg-violet-400 shadow-[0_0_16px_4px_rgba(167,139,250,0.7)]"></div>
    </div>
  )
}

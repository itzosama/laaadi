export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-[#050505] border-t border-[rgba(16,185,129,0.1)]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="transition-opacity hover:opacity-80">
          <img src="./laaadi.png" alt="laaadi logo" className="h-8 w-auto" />
        </a>
        
        <div className="flex gap-8 text-[#e7e9ee] font-light">
          <a href="#problem" className="hover:text-[#10b981] transition-colors">Problem</a>
          <a href="#how-we-work" className="hover:text-[#10b981] transition-colors">How it Works</a>
          <a href="#pricing" className="hover:text-[#10b981] transition-colors">Pricing</a>
        </div>
        
        <div className="text-[rgba(231,233,238,0.5)] text-sm font-light">
          © {new Date().getFullYear()} laaadi. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

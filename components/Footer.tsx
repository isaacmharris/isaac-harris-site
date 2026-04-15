export default function Footer() {
  return (
    <footer className="bg-[#060810] border-t border-[#2a3441] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-[#f97316] font-black text-lg tracking-tight">METALTECH</span>
            <span className="text-white/40 text-sm ml-2">INC.</span>
            <p className="text-white/30 text-xs mt-1">Design, Welding and Fabrication</p>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-white/40">
            <a href="#services" className="hover:text-white/70 transition-colors cursor-pointer">Services</a>
            <a href="#gallery" className="hover:text-white/70 transition-colors cursor-pointer">Gallery</a>
            <a href="#reviews" className="hover:text-white/70 transition-colors cursor-pointer">Reviews</a>
            <a href="#contact" className="hover:text-white/70 transition-colors cursor-pointer">Contact</a>
          </div>
          <div className="text-white/30 text-xs text-center md:text-right">
            <div>7714 Melrose Ln, Oklahoma City, OK 73127</div>
            <div className="mt-1">
              <a href="tel:4056599911" className="hover:text-white/60 transition-colors cursor-pointer">(405) 659-9911</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-[#1a2030] text-center text-white/20 text-xs">
          &copy; {new Date().getFullYear()} MetalTech, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

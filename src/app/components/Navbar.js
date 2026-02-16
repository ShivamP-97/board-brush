export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full backdrop-blur-md bg-white/70 border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold tracking-widest">
          Board Brush & Lights
        </h1>

        <div className="space-x-8 hidden md:block text-sm font-medium">
          <a href="#" className="hover:text-[#C6A75E] transition">
            Home
          </a>
          <a href="#projects" className="hover:text-[#C6A75E] transition">
            Projects
          </a>
          <a href="#services" className="hover:text-[#C6A75E] transition">
            Services
          </a>
          <a href="#contact" className="hover:text-[#C6A75E] transition">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

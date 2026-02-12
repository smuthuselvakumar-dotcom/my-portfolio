import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-blue-600">
            <a href="#hero">Muthuselvakumar</a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-medium">
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#experience" className="hover:text-blue-600">Experience</a>
          <a href="#projects" className="hover:text-blue-600">Projects</a>
          <a href="#skills" className="hover:text-blue-600">Skills</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>☰</button>
        </div>
      </div>

      {/*Mobile Menu*/}
      {isOpen && (
        <div className="md:hidden bg-white  shadow-md px-6 pb-4 flex flex-col gap-4">
            <a href="#about" onClick={() => setIsOpen(false)}>About</a>
            <a href="#experience" onClick={() => setIsOpen(false)}>Experience</a>
            <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
            <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
            <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

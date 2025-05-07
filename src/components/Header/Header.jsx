import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 ${isScrolled
        ? "bg-white shadow-md"
        : "bg-white"
        }`}
    >
      {/* logo section */}
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-primary">
            Car<span className="text-secondary">Guyz</span>
          </span>
        </Link>

        {/* navigation buttons - Desktop */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-800 hover:text-secondary font-medium transition">Home</Link>
          <Link to="/services" className="text-gray-800 hover:text-secondary font-medium transition">Services</Link>
          <Link to="/booking" className="text-gray-800 hover:text-secondary font-medium transition">Book Now</Link>
          <Link to="/about" className="text-gray-800 hover:text-secondary font-medium transition">About</Link>
          <Link to="/blog" className="text-gray-800 hover:text-secondary font-medium transition">Blog</Link>
          <Link to="/contact" className="text-gray-800 hover:text-secondary font-medium transition">Contact</Link>
        </nav>

        {/* responsive hamburger menu */}
        <div className="md:hidden">
          <button
            className="p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24" height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-primary"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* book now btn - Desktop */}
        <div className="hidden md:block">
          <Link to="/booking">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium bg-primary text-white h-10 px-4 py-2 cta-button">
              Book Now
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4">
          <nav className="flex flex-col space-y-3">
            <Link to="/" className="text-gray-800 hover:text-secondary font-medium transition">Home</Link>
            <Link to="/services" className="text-gray-800 hover:text-secondary font-medium transition">Services</Link>
            <Link to="/booking" className="text-gray-800 hover:text-secondary font-medium transition">Book Now</Link>
            <Link to="/about" className="text-gray-800 hover:text-secondary font-medium transition">About</Link>
            <Link to="/blog" className="text-gray-800 hover:text-secondary font-medium transition">Blog</Link>
            <Link to="/contact" className="text-gray-800 hover:text-secondary font-medium transition">Contact</Link>
            <Link to="/booking">
              <button className="mt-2 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium bg-primary text-white h-10 px-4 py-2 w-full">
                Book Now
              </button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
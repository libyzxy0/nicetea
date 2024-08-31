import { useEffect, useState } from 'react';
import logo from '@/assets/logo.svg';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom'

export function Navbar() {
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  useEffect(() => {
    const heroSection = document.getElementById('hero');
    if (!heroSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.8,
      }
    );

    observer.observe(heroSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 h-16 flex justify-between items-center z-40 px-7 md:px-20 transition-colors duration-300 ${isHeroVisible ? 'bg-transparent' : 'bg-white backdrop-filter backdrop-blur-md bg-opacity-30'}`}>
      <div className="flex items-center space-x-2">
        <img className="h-8 w-8" src={logo} alt="Logo" />
        <h1 className="font-mono text-xl text-gray-950">nicetea</h1>
      </div>
      
      <div className="flex items-center md:hidden">
        <button className="text-gray-950 flex items-center space-x-1 hover:text-amber-800">
          <Menu className="h-5 w-5" />
        </button>
      </div>
      
      <ul className="hidden md:flex flex-row items-center space-x-8">
        <li>
          <Link className="font-mono hover:underline hover:cursor-pointer hover:text-amber-800" to="/">Home</Link>
        </li>
        <li>
          <Link className="font-mono hover:underline hover:cursor-pointer hover:text-amber-800" to="/about">About</Link>
        </li>
        <li>
          <Link className="font-mono hover:underline hover:cursor-pointer hover:text-amber-800" to="/products">Products</Link>
        </li>
        <li>
          <Link className="font-mono hover:underline hover:cursor-pointer hover:text-amber-800" to="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}

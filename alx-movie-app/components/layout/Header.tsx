

import Link from 'next/link';
import { useRouter } from 'next/router'; 
const Header = () => {
  const router = useRouter(); 

  return (
    <header className="h-28 flex items-center bg-[#171D22] px-4 md:px-16 lg:px-44 text-white">
      <div className="flex items-center justify-between w-full">
        <h2 className="text-xl md:text-4xl font-semibold">Cine<span className="text-[#E2D609]">Seek</span></h2>
        <nav className="hidden md:flex flex-1 justify-center space-x-8">
          
          <Link href="/" className={`px-4 md:px-8 text-xl transition-colors duration-300 font-semibold ${
            router.pathname === '/' 
            ? 'text-[#E2D609]'
            : 'hover:text-[#E2D609]' 
          }`}>
            Home
          </Link>
          
          <Link href="/movies" className={`px-4 md:px-8 text-xl transition-colors duration-300 font-semibold ${
            router.pathname === '/movies' 
            ? 'text-[#E2D609]' 
            : 'hover:text-[#E2D609]' 
          }`}>
            Movies
          </Link>

        </nav>
      </div>
    </header>
  );
};

export default Header;
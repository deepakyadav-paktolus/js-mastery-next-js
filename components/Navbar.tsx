import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <nav className="flex justify-between bg-black/30 mb-4">
        <Link href={"/"} className="flex items-center space-x-2">
        <Image src={'globe.svg'} className="rounded-full" alt="Logo" width={10} height={10}/>
        
        <span className="text-xl font-bold text-gray-800">DevEvent</span>
        </Link>
        <ul className="flex gap-6 justify-end mr-4 m-5">
          <Link href="/">Home</Link>
          <Link href="/">Events</Link>
          <Link href="/">Create Event</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

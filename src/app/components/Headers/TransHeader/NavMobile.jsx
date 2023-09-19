"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";


const NavMobile = ({ navMobile }) => {
  const router = useRouter();

  return (
    <nav
      className={`${
        navMobile ? "min-h-screen" : "min-h-0"
      } w-full fixed top-0 left-0 right-0 bg-neutral-500 -bottom-12 -z-10 lg:hidden overflow-hidden transition-all h-0`}
    >
      <ul className="w-full top-0 left-0 h-full flex flex-col justify-center items-center gap-y-8">
    

        <li>
          <Link className="text-white text-body-md" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="text-white text-body-md" href="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="text-white text-body-md" href="/services">
            Services
          </Link>
        </li>
        <li>
          <Link className="text-white text-body-md" href="/blog">
            Blog
          </Link>
        </li>
        <li>
          <Link className="text-white text-body-md" href="/contact">
            Contact
          </Link>
        </li>
      </ul>
      
    </nav>
  );
};

export default NavMobile;

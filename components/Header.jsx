"use client";

import Link from "next/link";
import Image from "next/image";
import { useScrollDirection } from "@/hooks/useScrollDirection";

export default function Header() {
  const scrollDirection = useScrollDirection();

  return (
    <header
      className={`fixed z-[100] top-4 w-full px-80 transition-transform duration-300
        ${scrollDirection === "down" ? "-translate-y-32" : "translate-y-0"}`}
    >
      <div className="flex justify-between items-center bg-white text-black rounded-full px-8 py-4">
        <h2>Logo</h2>
        <div>
          <ul className="flex gap-8 items-center">
            <li>
              <Link href="/" className="hover:opacity-70 transition-opacity">Home</Link>
            </li>
            <li>
              <Link href="/" className="hover:opacity-70 transition-opacity">Home</Link>
            </li>
            <li>
              <Link href="/" className="hover:opacity-70 transition-opacity">Home</Link>
            </li>
            <button className="hover:opacity-70 transition-opacity">
              <Image src="/assets/search.svg" alt="search" width={20} height={20} />
            </button>
          </ul>
        </div>
      </div>
    </header>
  );
}

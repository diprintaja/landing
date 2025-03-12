"use client";

import { Menu, Printer } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

type Props = Record<string, unknown>;

export const Navbar: FC<Props> = ({}) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 px-4 items-center justify-start md:justify-around">
        <div className="flex items-center gap-2">
          <button className="md:hidden">
            <Menu className="h-6 w-6 text-primary hover:opacity-50" />
          </button>
          <Printer className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">Diprint</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="#pros" className="text-sm font-medium hover:text-primary">
            Kelebihan
          </Link>
          <Link
            href="#how-it-works"
            className="text-sm font-medium hover:text-primary"
          >
            Kemitraan
          </Link>
          <Link
            href="#testimonials"
            className="text-sm font-medium hover:text-primary"
          >
            Testimoni
          </Link>
        </nav>
      </div>
    </header>
  );
};

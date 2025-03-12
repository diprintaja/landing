import { Printer } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="border-t bg-muted">
      <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
        <div className="flex items-center gap-2">
          <Printer className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">Diprint</span>
        </div>
        <nav className="flex gap-4 md:gap-6">
          <Link href="#" className="text-sm font-medium hover:text-primary">
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-primary">
            Features
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-primary">
            Pricing
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-primary">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Diprint. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

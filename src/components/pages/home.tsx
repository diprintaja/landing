"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FC } from "react";

export const Home: FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-28 flex justify-center">
        <div className="container px-4 md:px-6">
          <div className="text-start md:text-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2 md:space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Ngeprint jadi lebih mudah 🤙
                </h1>
                <p className="max-w-[400px] md:max-w-screen-2xl text-muted-foreground md:text-xl">
                  <strong>Upload</strong> File. <strong>Pilih</strong> Tempat
                  Print. <strong>Cetak</strong> Dokumenmu.
                </p>
              </div>
              <div className="flex items-center gap-2 max-[390px]:flex-col md:justify-center">
                <Button size="lg" asChild>
                  <Link href="#">
                    Mau Jadi Mitra Dongggg <span className="text-xl">🤝</span>
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#">
                    Coba Ngeprint dulu deh <span className="text-xl">🖨️</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

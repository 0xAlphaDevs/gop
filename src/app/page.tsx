"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";
import { cinzel, cinzel600, cinzel500 } from "@/components/ui/fonts";
import { cn } from "@/lib/utils";

export default function Home() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col relative overflow-hidden">
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 z-0"
        options={{
          background: {
            color: {
              value: "#000000",
            },
          },
          fpsLimit: 90,
          particles: {
            color: {
              value: "#10b981",
            },
            links: {
              color: "#10b981",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 0.7,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 400,
              },
              value: 80,
            },
            opacity: {
              value: 0.6,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
      />

      {/* Header */}
      <header className="w-full py-6 px-4 sm:px-8 relative z-10">
        <div className="flex items-center justify-between">
          <nav className="flex items-center space-x-8">
            <Link
              href="/"
              className={cn(
                "text-lg hover:text-green-400 transition-colors",
                cinzel500.className
              )}
            >
              Home
            </Link>
            <Link
              href="https://docs.gameofpots.fun/"
              className={cn(
                "text-lg hover:text-green-400 transition-colors",
                cinzel500.className
              )}
            >
              Docs
            </Link>
          </nav>

          <Button
            onClick={() =>
              window.open("https://t.me/+vuy2WgghLUwyNTU1", "_blank")
            }
            className={cn(
              "rounded-[10px] text-xl bg-green-500 text-black hover:bg-green-400",
              cinzel600.className
            )}
          >
            <Image src="/telegram.svg" alt="GOP Logo" width={34} height={34} />
            Get Started
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col md:flex-row items-center px-4 sm:px-8 py-10 md:py-0 relative z-10">
        <div className="md:w-1/2 space-y-6 md:space-y-8 max-w-xl">
          <div>
            <h1
              className={cn(
                "text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-serif tracking-tighter",
                cinzel.className
              )}
            >
              Game of Pots
            </h1>
            <h4
              className={cn(" text-green-500 md:pl-4 pl-2", cinzel.className)}
            >
              Powered by Ethena&apos;s USDe
            </h4>
          </div>
          <p
            className={cn(
              "text-gray-200 max-w-md text-sm sm:text-base",
              cinzel500.className
            )}
          >
            In the Game of Pots, you stake or you gain—no losses, only rewards!
          </p>

          <div className="pt-4">
            <Button
              onClick={() =>
                window.open("https://t.me/+vuy2WgghLUwyNTU1", "_blank")
              }
              className={cn(
                "rounded-[10px] text-xl bg-green-500 text-black hover:bg-green-400",
                cinzel600.className
              )}
            >
              <Image
                src="/telegram.svg"
                alt="GOP Logo"
                width={34}
                height={34}
                className=""
              />
              Get Started
            </Button>
          </div>

          <div className="pt-8">
            <Link
              href="https://x.com/gopdotfun"
              target="_blank"
              className="text-green-500 hover:text-green-400 transition-colors"
            >
              <Image
                src="/x.svg"
                alt="GOP Logo"
                width={34}
                height={34}
                className="opacity-80 hover:opacity-100"
              />
            </Link>
          </div>
        </div>

        <div className="md:w-1/2 h-full flex items-center justify-center mt-16 md:mt-0 pointer-events-none">
          {/* This is an empty div that helps with layout on mobile */}
          <div className="w-full max-w-lg aspect-square md:hidden"></div>
        </div>
      </main>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent z-[1]"></div>
    </div>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LightRays from "@/components/LightRays";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "DevEvent",
  description: "The Event for developers around the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-screen flex flex-col font-sans relative overflow-x-hidden text-white bg-black">
        
        <div className="fixed top-0 left-0 w-full h-[50vh] -z-10">
          <LightRays
            raysOrigin="top-center"
            raysColor="#ffffff"
            raysSpeed={1}
            lightSpread={0.5}
            rayLength={3}
            followMouse={true}
            mouseInfluence={0.01}
            noiseAmount={0}
            distortion={0}
            className="w-full h-full"
            pulsating={false}
            fadeDistance={1}
            saturation={1}
          />
        </div>

        {/* Bottom Black Section */}
        <div className="fixed bottom-0 left-0 w-full h-[50vh] bg-black -z-10" />

        {/* Optional smooth gradient blend */}
        <div className="fixed top-[40vh] left-0 w-full h-[20vh] bg-gradient-to-b from-transparent to-black -z-10" />

        <Navbar />

        <main className="flex-1 relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
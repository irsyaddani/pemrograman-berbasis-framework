import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Saya",
  description: "Halaman Tentang Saya",
  openGraph: {
    title: "Tentang Saya",
    description: "Halaman Tentang Saya",
  },
};

export default function Home() {
  return (
    <header>
      <h1 className="font-bold text-4xl text-zinc-800">Tentang Saya</h1>
    </header>
  );
}
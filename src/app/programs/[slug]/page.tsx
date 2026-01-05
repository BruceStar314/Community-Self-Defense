import Link from "next/link";
import { Header } from './_components/Header';
import { Hero } from './_components/Hero';
import { EightLimbs } from './_components/EightLimbs';
import { Curriculum } from './_components/Curriculum';
import { FAQ } from './_components/FAQ';
import { Footer } from './_components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <EightLimbs />
      <Curriculum />
      <FAQ />
      <Footer />
    </div>
  );
}


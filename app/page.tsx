import Navbar from "../src/components/Navbar";
import Hero from "../src/components/Hero";
import Footer from "../src/components/Footer";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />
      <Footer />
    </main>
  );
}
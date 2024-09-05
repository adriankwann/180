import NavBar from '@/components/ui/navbar';
import HeroSection from '@/components/ui/herosection';
import Footer from '@/components/ui/footer';
import { CardGrid } from '@/components/ui/cardgrid';

export default function Home() {
  return (
    <>
      <NavBar />
      {/* // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //   <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
    //   </div>
    // </main> */}
      <HeroSection />
      <CardGrid />
      <Footer />
    </>
  );
}

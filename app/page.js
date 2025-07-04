import CallToAction from './Components/CallToAction';
import Features from './Components/Features';
import Footer from './Components/Footer';
import Hero from './Components/Hero'

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Features />
      <CallToAction />
      <Footer/>
    </main>
  );
}

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import AboutSection from "./components/About";
import Gallery from "./components/Gallery";
import BookingInvitation from "./components/BookingInvitation";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <Gallery />
        <BookingInvitation />
      </main>
      <Footer />
    </>
  );
}
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import OurStory from "./components/OurStory";
import WeddingDetails from "./components/WeddingDetails";
import FamilyDetails from "./components/FamilyDetails";
import Venue from "./components/Venue";
import RSVP from "./components/RSVP";
import Gallery from "./components/Gallery";
import QuoteSection from "./components/QuoteSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Countdown />
      <OurStory />
      <WeddingDetails />
      <FamilyDetails />
      <Venue />
      <RSVP />
      <Gallery />
      <QuoteSection />
      <Footer />
    </main>
  );
}

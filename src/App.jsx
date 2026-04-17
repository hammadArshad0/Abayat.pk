import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import TrustStrip from './components/TrustStrip';
import Categories from './components/Categories';
import FeaturedProducts from './components/FeaturedProducts';
import AboutBrand from './components/AboutBrand';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import PageLoader from './components/PageLoader';

export default function App() {
  return (
    <>
      <PageLoader />
      <div className="relative min-h-screen bg-black text-beige overflow-x-hidden">
        <Navbar />
        <main>
          <HeroSlider />
          <TrustStrip />
          <Categories />
          <FeaturedProducts />
          <AboutBrand />
          <Testimonials />
          <Newsletter />
        </main>
        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
      </div>
    </>
  );
}

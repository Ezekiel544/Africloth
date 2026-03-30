import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { TrustedSection } from './components/TrustedSection';
import { BestSellingSection } from './components/BestSellingSection';
import { QualitySection } from './components/QualitySection';
import { FabricSection } from './components/FabricSection';
import { SimpleStyleSection } from './components/SimpleStyleSection';
import { ComfortSection } from './components/ComfortSection';
import { TestimonialSection } from './components/TestimonialSection';
import { PromoSection } from './components/PromoSection';
import { UpgradeSection } from './components/UpgradeSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <TrustedSection />
      <BestSellingSection />
      <QualitySection />
      <FabricSection />
      <SimpleStyleSection />
      <ComfortSection />
      <TestimonialSection />
      {/* <PromoSection /> */}
      <UpgradeSection />
      <Footer />
    </div>
  );
}

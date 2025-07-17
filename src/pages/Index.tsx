
import ThreeBackground from '@/components/ThreeBackground';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import MerchSection from '@/components/MerchSection';
import DarkModeToggle from '@/components/DarkModeToggle';

const Index = () => {
  return (
    <div className="min-h-screen bg-cyber-dark relative overflow-x-hidden">
      <ThreeBackground />
      <Navbar />
      <HeroSection />
      <MerchSection />
      <DarkModeToggle />
      
      {/* Footer */}
      <footer className="bg-accent/10 backdrop-blur-md border-t border-accent/30 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-primary mb-4">
            BITS PILANI,<span className="text-accent"> Dubai</span>
          </h3>
          <p className="text-secondary mb-6">
            Connecting the digital generation through immersive experiences
          </p>
          <div className="flex justify-center space-x-6 text-accent">
            <a href="#" className="hover:text-secondary transition-colors interactive">Privacy</a>
            <a href="#" className="hover:text-secondary transition-colors interactive">Terms</a>
            <a href="#" className="hover:text-secondary transition-colors interactive">Support</a>
          </div>
          <p className="text-primary/50 text-sm mt-6">
            © 2024 BITS PILANI, Dubai. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

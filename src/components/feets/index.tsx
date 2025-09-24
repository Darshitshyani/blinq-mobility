import { useState, useEffect } from 'react';
import { Button } from '@/components/shared/Button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import fleetLineup from '@/untils/images/fleet/flt1.png';
import fleetHighway from '@/untils/images/fleet/flt2.png';
import fleetRoad from '@/untils/images/fleet/flt3.png';
import fleetMountains from '@/untils/images/fleet/flt4.png';
import singleVehicle from '@/untils/images/fleet/flt5.png';
import Image from 'next/image';
import { ProblemsSection } from './components/ProblemsSection';
import { AdvantagesSection } from './components/AdvantagesSection';
import { CalculatorSection } from './components/CalculatorSection';
import { ImpactSection } from './components/ImpactSection';
import { CTASection } from './components/CTASection';

const slides = [
  {
    image: fleetLineup,
    alt: "Blinq Pods fleet lineup showing scalability",
    title: "Scalable Fleet Solutions"
  },
  {
    image: fleetHighway,
    alt: "Blinq Pods convoy on highway",
    title: "Seamless Operations"
  },
  {
    image: fleetRoad,
    alt: "Blinq Pods in action on road",
    title: "Urban Mobility"
  },
  {
    image: fleetMountains,
    alt: "Fleet lineup with mountain backdrop",
    title: "Built for Any Terrain"
  },
  {
    image: singleVehicle,
    alt: "Single Blinq vehicle in urban setting",
    title: "Customer Experience"
  }
];

export const FeetPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);



  return (
    <>
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-background/70" />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
   


      {/* Hero Content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          <span className="text-gradient">Drive More.</span>{' '}
          <span className="text-gradient">Earn More.</span>{' '}
          <span className="text-foreground">Worry Less.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
          Purpose-built electric fleets that maximize uptime and slash operating costs.
        </p>

       
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[40px] bg-gradient-to-t from-card to-transparent pointer-events-none" /> 
    </section>
     <ProblemsSection />
      <AdvantagesSection />
      <CalculatorSection />
      <ImpactSection />
      <CTASection />
    </>
  );
};
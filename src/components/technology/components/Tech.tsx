import { useState, useEffect } from "react";
import { Button } from "@/components/shared/Button";
import { Card } from "@/components/shared/Card";
import { useTechScrollAnimation } from "@/hooks/useTechScrollAnimation";
import AnimatedBattery from "@/components/technology/components/AnimatedBattery";
import AnimatedCar from "@/components/technology/components/AnimatedCar";
import SwapAnimation from "@/components/technology/components/SwapAnimation";
import FeatureIcon from "@/components/technology/components/FeatureIcon";

// Import vehicle images
import heroCarImage from "@/untils/images/tech/tech page 1st photo car side.jpg";
import topCoverImage from "@/untils/images/tech/top cover.png";
import sideRealistic2 from "@/untils/images/tech/side realistic 2.png";
import sideRealistic3 from "@/untils/images/tech/side realistic 3.png";
import sideRealistic4 from "@/untils/images/tech/side realistic 4.png";
import rearViewImage from "@/untils/images/tech/REAR.png";
import Image from "next/image";

const Tech = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const heroAnimation = useTechScrollAnimation(0.3);
  const statsAnimation = useTechScrollAnimation(0.3);
  const swapHeroAnimation = useTechScrollAnimation(0.3);

  // Counter animation for stats
  const [counters, setCounters] = useState({
    speed: 0,
    efficiency: 0,
    range: 0,
    cost: 0
  });

  useEffect(() => {
    if (statsAnimation.isVisible) {
      const targets = { speed: 8, efficiency: 12, range: 250, cost: 4 };
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setCounters({
          speed: Math.floor(targets.speed * progress),
          efficiency: Math.floor(targets.efficiency * progress),
          range: Math.floor(targets.range * progress),
          cost: Math.floor(targets.cost * progress)
        });

        if (step >= steps) {
          clearInterval(timer);
          setCounters(targets);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [statsAnimation.isVisible]);

  const techFeatures = [
    {
      id: 'platform',
      title: 'Skateboard Platform',
      description: 'Flat, modular base enabling multiple vehicle form factors and low center of gravity.',
      image: sideRealistic4
    },
    {
      id: 'chassis',
      title: 'Space Frame Chassis',
      description: 'Lightweight yet rigid structure ensuring safety and durability.',
      image: sideRealistic3
    },
    {
      id: 'design',
      title: 'Sleek & Elegant Design',
      description: 'Aerodynamic form optimized for urban commute.',
      image: heroCarImage
    },
    {
      id: 'cabin',
      title: 'Spacious Cabin',
      description: 'Comfortable seating for 4 adults with extra legroom.',
      image: topCoverImage
    },
    {
      id: 'composite',
      title: 'Composite Body',
      description: 'Thermoplastic composites for strength, lightweighting, and easy manufacturing.',
      image: sideRealistic2
    },
    {
      id: 'maneuver',
      title: 'Compact Maneuverability',
      description: 'Effortless navigation in narrow streets and traffic.',
      image: rearViewImage
    },
    {
      id: 'ai',
      title: 'AI-Enabled Features',
      description: 'Driver drowsiness detection, predictive maintenance, and smart alerts.',
      image: topCoverImage
    },
    {
      id: 'braking',
      title: 'Advanced Braking',
      description: 'Regenerative braking, ABS, and hill assist for safety.',
      image: sideRealistic4
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Car Technology */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 " />
        
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-electric-blue rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-electric-cyan rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}} />
        </div>

        <div className="relative z-10 container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero content */}
          <div ref={heroAnimation.ref} className={`space-y-8 ${heroAnimation.isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div>
              <h1 className="text-5xl lg:text-7xl font-black mb-4">
                <span className="text-gradient">BLINQ</span>
                MOBILITY

                <br />
                <span className="text-foreground">TECHNOLOGY</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Built for the chaos and charm of Indian cities – compact, efficient, and always ready.
              </p>
            </div>

            {/* Key stats */}
            <div ref={statsAnimation.ref} className="grid grid-cols-2 gap-6">
              <Card className="p-6 bg-card-gradient border-electric-blue/20 shadow-electric">
                <div className="text-3xl font-black text-electric-blue mb-2">
                  0–50 in {counters.speed}s
                </div>
                <div className="text-sm text-muted-foreground">Performance punch</div>
              </Card>
              <Card className="p-6 bg-card-gradient border-electric-cyan/20 shadow-accent">
                <div className="text-3xl font-black text-electric-cyan mb-2">
                  {counters.efficiency} km/kWh
                </div>
                <div className="text-sm text-muted-foreground">Efficiency benchmark</div>
              </Card>
              <Card className="p-6 bg-card-gradient border-electric-green/20">
                <div className="text-3xl font-black text-electric-green mb-2">
                  {counters.range} km in 5min
                </div>
                <div className="text-sm text-muted-foreground">Swap advantage</div>
              </Card>
              <Card className="p-6 bg-card-gradient border-primary/20">
                <div className="text-3xl font-black text-primary mb-2">
                  ₹{counters.cost}/km
                </div>
                <div className="text-sm text-muted-foreground">Cost efficiency</div>
              </Card>
            </div>
          </div>

          {/* Hero image */}
          <div className={`relative ${heroAnimation.isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
            <div className="relative">
              <Image 
                src={heroCarImage} 
                alt="Blinq Pod Technology" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent rounded-2xl" />
              
              {/* Floating tech indicators */}
              <div className="absolute top-4 right-4 animate-bounce-in h-fit">
                <div className="bg-card/90 backdrop-blur-sm rounded-lg flex  h-[80px] shadow-electric">
                  <AnimatedBattery />
                </div>
              </div>
              
              <div className="absolute bottom-4 left-4 animate-bounce-in" style={{animationDelay: '0.5s'}}>
                <div className="bg-card/90 backdrop-blur-sm rounded-lg p-4">
                  <AnimatedCar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Features Section */}
      <section className="py-24 ">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-6">
              <span className="text-gradient">Engineering</span> Excellence
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every component designed for the future of urban mobility
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Feature navigation */}
            <div className="lg:col-span-1 space-y-4">
              <div className="sticky top-24">
                {techFeatures.map((feature, index) => (
                  <button
                    key={feature.id}
                    onClick={() => setActiveFeature(index)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                      activeFeature === index 
                        ? 'bg-primary text-primary-foreground shadow-electric' 
                        : 'hover:bg-card/50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="min-w-[3rem] flex items-center justify-center">
                        <FeatureIcon 
                          type={feature.id as any} 
                          className={activeFeature === index ? 'text-primary-foreground w-8 h-6' : 'text-primary w-8 h-6'} 
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm">{feature.title}</h3>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Feature content */}
          <div className="lg:col-span-3">
  <Card className="overflow-hidden bg-card-gradient border-electric-blue/20 shadow-xl h-full w-full">
    <div className="relative overflow-hidden aspect-[16/9] sm:aspect-[4/3] md:aspect-video">
      <Image
        src={techFeatures[activeFeature].image}
        alt={techFeatures[activeFeature].title}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

      {/* Feature overlay */}
      <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
        <div className="flex items-center space-x-3 sm:space-x-4">
          <div className="bg-primary/20 backdrop-blur-sm rounded-lg p-3 sm:p-4 min-w-[2.5rem] sm:min-w-[3rem] flex items-center justify-center">
            <FeatureIcon
              type={techFeatures[activeFeature].id as any}
              className="text-primary w-6 h-6 sm:w-8 sm:h-6"
            />
          </div>
          <div>
            <h3 className="text-base sm:text-lg md:text-2xl font-bold text-foreground mb-1 md:mb-2">
              {techFeatures[activeFeature].title}
            </h3>
            <p className="text-xs sm:text-sm md:text-md text-muted-foreground leading-snug">
              {techFeatures[activeFeature].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  </Card>
</div>

          </div>
        </div>
      </section>

      {/* Battery Swapping Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute " />
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-electric-cyan/20 rounded-full blur-3xl animate-glow-pulse" />
        </div>

        <div className="relative z-10 container mx-auto px-6">
          {/* Swap Hero */}
          <div ref={swapHeroAnimation.ref} className={`text-center mb-16 ${swapHeroAnimation.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-5xl lg:text-6xl font-black mb-6">
              <span className="text-gradient">Swap. Drive. Repeat.</span>
            </h2>
            <p className="text-2xl text-muted-foreground mb-8">
              Full power in 5 minutes.
            </p>
            
            {/* Swap Animation */}
            <div className="mb-12">
              <SwapAnimation />
            </div>

            {/* Swap highlights */}
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="p-8 bg-card-gradient border-electric-green/30 shadow-lg">
                <div className="text-4xl font-black text-electric-green mb-4">₹625</div>
                <div className="text-lg text-muted-foreground">per swap (250 km range)</div>
              </Card>
              <Card className="p-8 bg-card-gradient border-primary/30 shadow-electric">
                <div className="text-4xl font-black text-primary mb-4">&lt;5 min</div>
                <div className="text-lg text-muted-foreground">swap time</div>
              </Card>
              <Card className="p-8 bg-card-gradient border-electric-cyan/30">
                <div className="text-4xl font-black text-electric-cyan mb-4">Zero</div>
                <div className="text-lg text-muted-foreground">range anxiety</div>
              </Card>
            </div>
          </div>

          {/* Problems We Solve */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-12">
              The 3 Big Problems We <span className="text-gradient">Solve</span>
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  problem: 'Downtime',
                  before: 'Hours wasted on charging',
                  after: 'Solved with 5-minute swaps',
                  color: 'destructive'
                },
                {
                  problem: 'High Operating Costs',
                  before: 'Expensive per-km running',
                  after: 'Solved with ₹4/km efficiency',
                  color: 'warning'
                },
                {
                  problem: 'Driver Anxiety',
                  before: 'Worrying about battery life',
                  after: 'Solved with guaranteed health + 250km range',
                  color: 'electric-green'
                }
              ].map((item, index) => (
                <Card key={index} className="p-6 bg-card-gradient">
                  <h4 className="text-xl font-bold mb-4 text-foreground">{item.problem}</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-destructive" />
                      <span className="text-sm text-muted-foreground">{item.before}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-electric-green animate-glow-pulse" />
                      <span className="text-sm font-medium text-foreground">{item.after}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* How BlinqSwap Works */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-12">
              How <span className="text-gradient">BlinqSwap</span> Works
            </h3>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Drive In',
                  description: 'Pull into the nearest BlinqSwap station. No bookings, no waiting queues — just drive up.'
                },
                {
                  step: '02', 
                  title: 'Quick Alignment',
                  description: 'Our smart guidance system ensures perfect vehicle alignment with the swap rails.'
                },
                {
                  step: '03',
                  title: 'Automated Swap',
                  description: 'In less than 5 minutes, the depleted battery is safely removed and replaced.'
                },
                {
                  step: '04',
                  title: 'Instant Drive-Off',
                  description: "You're back on the road with 250 km range — no anxiety, just pure uptime."
                }
              ].map((step, index) => (
                <Card key={index} className="p-6 bg-card-gradient text-center">
                  <div className="text-4xl font-black text-electric-blue mb-4">{step.step}</div>
                  <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Microfactory Section */}
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-6">
              The Future of Manufacturing – <span className="text-gradient">Blinq Microfactories</span>
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Blinq isn't just reinventing the EV — we're reinventing how EVs are built. 
              Our compact microfactories deliver pods where they're needed most.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                'Local, Modular & Scalable',
                'Pressless Composite Panels', 
                'Agility at Its Core',
                'Jobs & Sustainability'
              ].map((feature, index) => (
                <Card key={index} className="p-4 bg-card-gradient">
                  <div className="text-sm font-medium">{feature}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 text-center ">
        <div className="container mx-auto px-6 ">
          <h2 className="text-4xl font-black mb-6">
            Experience the <span className="text-gradient">Future</span> of Urban Transport
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join the Swap Revolution
          </p>
       
        </div>
      </section>
    </div>
  );
};

export default Tech;
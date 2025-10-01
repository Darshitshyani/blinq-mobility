import { useEffect, useRef, useState } from "react";
import { Battery, Car, DollarSign, Clock, Leaf } from "lucide-react";

interface AnimationStep {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  color: string;
  
}

const animationSteps: AnimationStep[] = [
  {
    id: "battery",
    title: "Instant Refuelling",
    subtitle: "Our battery swapping tech allows you to leave with a fully charged battery in less than 5 minutes, just like filling petrol.",
    icon: <Battery className="h-16 w-16" />,
    color: "electric-blue",
    
  },
  {
    id: "commute",
    title: "Built for the City",
    subtitle: "Compact for crowded streets yet roomy enough for comfort, Blinq is designed with safety at its core. Easy to ride, efficient to run, and built for the everyday rhythm of the city.",
    icon: <Car className="h-16 w-16" />,
    color: "electric-cyan",
    
  },
  {
    id: "cost",
    title: "Lower Vehicle Cost",
    subtitle: "With Blinq, you own the car while the battery comes as a service. This means 40% lower vehicle cost, easier entry, and faster ROI for drivers and fleet operators.",
    icon: <DollarSign className="h-16 w-16" />,
    color: "electric-green",
   
  },
  {
    id: "uptime",
    title: "Efficiency That Pays Back",
    subtitle: "Blinq is engineered for energy efficiency, letting you go farther while spending less. Its electric powertrain cuts running costs by over 60%, making every ride smarter and more sustainable.",
    icon: <Clock className="h-16 w-16" />,
    color: "electric-purple"
  },
  {
    id: "sustainability",
    title: "Always on the Road",
    subtitle: "Engineered for nonstop operations, Blinq is designed to withstand the daily wear and tear of taxi fleet use with minimal maintenance.",
    icon: <Leaf className="h-16 w-16" />,
    color: "electric-green"
  },
  {
    id: "drivers",
    title: "Happier Drivers, Safer Rides",
    subtitle: "Comfortable seating, ergonomic design, and safety systems keep drivers alert and passengers protected.",
    icon: <Leaf className="h-16 w-16" />,
    color: "electric-green"
  }
];

const SolvingModule = () => {
  const [visibleSteps, setVisibleSteps] = useState<Set<string>>(new Set());
  const [hasMounted, setHasMounted] = useState(false);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Ensure we only run animations client-side
  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!hasMounted) return;

    const observers = sectionsRef.current.map((section, index) => {
      if (!section) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleSteps((prev) => new Set([...prev as any, animationSteps[index].id]));
            }
          });
        },
        { threshold: 0.6 }
      );

      observer.observe(section);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, [hasMounted]);

  // Fix hydration mismatch by not rendering until mounted
  if (!hasMounted) {
    return null;
  }

  // --- Animations ---
  const BatteryAnimation = ({ isVisible }: { isVisible: boolean }) => (
    <div className="relative w-24 h-40 mx-auto">
      <div className="w-full h-full border-2 border-electric-green rounded-lg bg-card">
        <div
          className={`w-full bg-gradient-to-t from-electric-green to-electric-green rounded-md ${
            isVisible ? "animate-battery-loop" : "h-0"
          }`}
        />
      </div>
      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-6 h-4 bg-electric-green rounded-sm" />
    </div>
  );

  const CarAnimation = ({ isVisible }: { isVisible: boolean }) => (
    <div className="relative w-32 h-20 mx-auto">
      <div
        className={`w-full h-full bg-electric-cyan rounded-xl shadow-lg transition-all duration-1000 ${
          isVisible ? "animate-car-drive" : ""
        }`}
      >
        <div className="absolute inset-2 bg-card rounded-lg opacity-80" />
        <div className="absolute bottom-1 left-2 w-4 h-4 bg-background rounded-full" />
        <div className="absolute bottom-1 right-2 w-4 h-4 bg-background rounded-full" />
      </div>
      {isVisible && (
        <div className="absolute -bottom-8 left-0 right-0 flex justify-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-8 h-2 bg-muted rounded-full animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      )}
    </div>
  );

  const FleetAnimation = ({ isVisible }: { isVisible: boolean }) => (
    <div className="flex justify-center space-x-4">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className={` w-10 md:w-12 h-8 bg-electric-green rounded-lg transition-all duration-500 ${
            isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
          style={{ transitionDelay: `${i * 100}ms` }}
        />
      ))}
    </div>
  );

  const ClockAnimation = ({ isVisible }: { isVisible: boolean }) => (
    <div className="relative w-24 h-24 mx-auto">
      <div className="w-full h-full border-2 border-electric-purple rounded-full bg-card">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-4 bg-muted rounded-full"
            style={{
              top: "4px",
              left: "50%",
              transformOrigin: "50% 44px",
              transform: `translateX(-50%) rotate(${i * 30}deg)`
            }}
          />
        ))}
        <div
          className={`absolute w-1 h-8 bg-electric-purple rounded-full transition-transform duration-2000 ${
            isVisible ? "rotate-[720deg]" : "rotate-0"
          }`}
          style={{
            top: "12px",
            left: "50%",
            transformOrigin: "50% 36px",
            transform: `translateX(-50%) ${isVisible ? "rotate(720deg)" : "rotate(0deg)"}`
          }}
        />
      </div>
    </div>
  );

  const EmissionAnimation = ({ isVisible }: { isVisible: boolean }) => (
    <div className="text-center space-y-4">
      <div
        className={`text-6xl font-bold transition-all duration-1000 ${
          isVisible ? "text-electric-green scale-110" : "text-muted-foreground scale-100"
        }`}
      >
        -70%
      </div>
      <div className="text-sm text-muted-foreground">CO₂ Emissions</div>
      {isVisible && (
        <div className="animate-float">
          <Leaf className="h-12 w-12 text-electric-green mx-auto" />
        </div>
      )}
    </div>
  );

  const renderAnimation = (step: AnimationStep, isVisible: boolean) => {
    switch (step.id) {
      case "battery":
        return  <video
          className="w-full h-full rounded-2xl object-cover"
          src="https://res.cloudinary.com/doze8mibh/video/upload/v1759293585/Swapping_ahhmkx.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        /> 
      case "commute":
        return <video
          className="w-full h-full rounded-2xl object-cover"
          src="https://res.cloudinary.com/doze8mibh/video/upload/v1759293585/Car_in_City_ibiqsy.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        /> ;
      case "cost":
        return <video
          className="w-full h-full rounded-2xl object-cover"
          src="https://res.cloudinary.com/doze8mibh/video/upload/v1759293584/Less_Cost_gmnw7o.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        />;
      case "uptime":
        return <video
          className="w-full h-full rounded-2xl object-cover"
          src="https://res.cloudinary.com/doze8mibh/video/upload/v1759293584/profits_sjxyua.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        />;
      case "sustainability":
        return <video
          className="w-full h-full rounded-2xl object-cover"
          src="https://res.cloudinary.com/doze8mibh/video/upload/v1759293585/Infinity_sqalxg.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        />;
         case "drivers":
        return <video
          className="w-full h-full rounded-2xl object-cover"
          src="https://res.cloudinary.com/doze8mibh/video/upload/v1759293585/Cheering_lg8nu3.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        />;
      default:
        return step.icon;
    }
  };

  return (
    <section className="py-20 bg-background mt-[100px]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Solving the <span className="text-gradient">Commuter's Problems</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every challenge in urban mobility solved through innovative engineering and smart
            technology.
          </p>
        </div>

        <div className="space-y-32 mt-[120px]">
          {animationSteps.map((step, index) => (
            <div
              key={step.id}
              ref={(el) => (sectionsRef.current[index] = el) as any}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="text-center md:text-left">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">{step.title}</h3>
                  <p className="text-xl text-muted-foreground">{step.subtitle}</p>
                </div>
              </div>

              <div
                className={`flex justify-center ${index % 2 === 1 ? "md:order-1" : ""}`}
              >
                <div className="bg-card-gradient border border-border rounded-2xl  shadow-accent  md:w-[350px]  flex items-center justify-center">
                  {renderAnimation(step, visibleSteps.has(step.id))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolvingModule;

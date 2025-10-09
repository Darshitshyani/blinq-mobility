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
    subtitle: "Our battery swapping tech allows you to leave with a fully charged battery in <span class='text-electric-blue font-semibold'> less than 5 minutes </span>, just like filling petrol.",
    icon: <Battery className="h-16 w-16" />,
    color: "electric-blue",
    
  },
  {
    id: "commute",
    title: "Built for the City",
    subtitle: "Compact for crowded streets yet roomy enough for comfort, Blinq is designed with <span class='text-electric-blue font-semibold'>safety at its core. Easy to ride, efficient to run </span>, and built for the everyday rhythm of the city.",
    icon: <Car className="h-16 w-16" />,
    color: "electric-cyan",
    
  },
  {
    id: "cost",
    title: "Lower Vehicle Cost",
    subtitle: "With Blinq, you own the car while the battery comes as a service. This means <span class='text-electric-blue font-semibold'>40% lower</span> vehicle cost, easier entry, and <span class='text-electric-blue font-semibold'>faster ROI</span> for drivers and fleet operators.",
    icon: <DollarSign className="h-16 w-16" />,
    color: "electric-green",
   
  },
  {
    id: "uptime",
    title: "Efficiency That Pays Back",
    subtitle: "Blinq is engineered for energy efficiency, letting you go farther while spending less. Its electric powertrain <span class='text-electric-blue font-semibold'>cuts running costs by over 60%</span>, making every ride smarter and more sustainable.",
    icon: <Clock className="h-16 w-16" />,
    color: "electric-purple"
  },
  {
    id: "sustainability",
    title: "Always on the Road",
    subtitle: "Engineered for <span class='text-electric-blue font-semibold'>nonstop operations</span>, Blinq is designed to withstand the daily wear and tear of taxi fleet use with minimal maintenance.",
    icon: <Leaf className="h-16 w-16" />,
    color: "electric-green"
  },
  {
    id: "drivers",
    title: "Happier Drivers, Safer Rides",
    subtitle: "Comfortable seating, ergonomic design, and safety systems <span class='text-electric-blue font-semibold'>keep drivers alert and passengers protected.</span> A happier driver means a better ride for everyone.",
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
            Unlocking Mass EV Adoption every challenge in urban mobility
 <span className="text-gradient ml-2">solved through innovative engineering and smart technology.
</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
           Every challenge in Electric mobility solved through Clever design and cuttinf-edge technology.
          </p>
        </div>

        <div className="space-y-32 mt-[150px]">
          {animationSteps.map((step, index) => (
            <div
              key={step.id}
              ref={(el) => (sectionsRef.current[index] = el) as any}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="text-center md:text-left">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">{step.title}</h3>
                  <div
className="text-xl text-muted-foreground"
  dangerouslySetInnerHTML={{ __html: step.subtitle }}
/>
                
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

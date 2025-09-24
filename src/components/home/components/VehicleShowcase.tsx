import { Button } from "@/components/shared/Button";
import { ArrowRight, MapPin, Zap, Shield ,Leaf, Recycle, Sun, TreePine, Clock} from "lucide-react";
import home1 from "@/untils/images/home1.jpeg";
import home2 from "@/untils/images/home2.jpeg";
import home3 from "@/untils/images/home3.jpeg";
import home4 from "@/untils/images/home4.jpeg";
import Image from "next/image";
import { useRouter } from "next/router";

const VehicleShowcase = () => {
  const features = [
    {
      icon: MapPin,
      title: "Built for Indian Cities",
      description: "Designed specifically for narrow lanes and urban environments"
    },
    {
      icon: Zap,
      title: "Smart Mobility",
      description: "AI-powered systems for efficient urban transportation"
    },
    {
      icon: Shield,
      title: "Reliable & Safe",
      description: "Advanced safety features for peace of mind"
    }
  ];

  const showcaseImages = [
    {
      src: home1,
      alt: "Electric vehicle in scenic landscape",
      title: "Future of Mobility",
      subtitle: "Sustainable transportation for every journey"
    },
    {
      src: home2,
      alt: "Blinq EV in traditional Indian architecture",
      title: "Built for Narrow Lanes",
      subtitle: "Designed for Indian cities"
    },
    {
      src: home3,
      alt: "Blinq EV in heritage location",
      title: "Heritage Meets Innovation",
      subtitle: "Not every vehicle is made for these streets. Blinq is."
    },
    {
      src: home4,
      alt: "Blinq EV at night near India Gate",
      title: "City Ready",
      subtitle: "Electrifying commute across iconic landmarks"
    }
  ];
  const sustainabilityFeatures = [
    {
      icon: Leaf,
      title: "Zero Emissions",
      description: "100% electric propulsion with zero direct emissions, contributing to cleaner air in urban areas.",
      impact: "Reduces CO2 by 2.3 tons annually per vehicle"
    },
    {
      icon: Sun,
      title: "Solar Integration",
      description: "Battery swapping stations powered by renewable solar energy for truly sustainable operations.",
      impact: "90% renewable energy usage"
    },
    {
      icon: Recycle,
      title: "Circular Economy",
      description: "Comprehensive battery recycling program and sustainable manufacturing processes.",
      impact: "95% battery material recovery rate"
    },
    {
      icon: TreePine,
      title: "Carbon Negative",
      description: "Our manufacturing and operations offset more carbon than they produce through green initiatives.",
      impact: "1.5x carbon offset ratio"
    }
  ];
 const router = useRouter()

  return (
    <section >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Designed for <span className="text-gradient">Every Street</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our electric vehicles are purpose-built for Indian roads, from heritage sites to modern cityscapes. 
            Experience the perfect blend of innovation and practicality.
          </p>
        </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
          {showcaseImages.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Image  
                src={image.src} 
                alt={image.alt}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">{image.title}</h3>
                <p className="text-muted-foreground">{image.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
    


         
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sustainabilityFeatures.map((feature, index) => (
            <div key={index} className="flex items-start space-x-6  bg-electric-green/5 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex-shrink-0">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-electric-green/10 rounded-full">
                  <feature.icon className="h-8 w-8 text-electric-green" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{feature.description}</p>
                <div className="inline-flex items-center bg-electric-green/10 rounded-full px-4 py-2">
                  <span className="text-sm font-medium text-electric-green">{feature.impact}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      
 
        
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 mt-[50px] rounded-3xl p-8 md:p-12 text-center">
            <div className="flex justify-center mb-6">
                <div className="flex items-center space-x-4">
                <Shield className="h-12 w-12 text-primary" />
                <Clock className="h-12 w-12 text-accent" />
                <Leaf className="h-12 w-12 text-electric-green" />
                </div>
            </div>
            <h3 className="text-3xl font-bold mb-4">Safety. Speed. Sustainability.</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Our vehicles undergo rigorous testing and are built with the highest safety standards. 
                Advanced materials and smart engineering ensure reliability in all conditions.
            </p>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" onClick={()=>{
                router.push("/technology")
            }}>
                Learn More About Our Technology
            </Button>
            </div>
      </div>
    </section>
  );
};

export default VehicleShowcase;
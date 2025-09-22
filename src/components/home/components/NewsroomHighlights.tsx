import { Card } from "@/components/shared/Card";
import { Badge } from "@/components/shared/Badge";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import fiireImg from "@/untils/images/1.png";
import dpiitImg from "@/untils/images/6.png";
import wadhwaniImg from "@/untils/images/2.png";
import deshpandeImg from "@/untils/images/4.png";
import razorpayImg from "@/untils/images/3.png";
import iitImg from "@/untils/images/5.png";
import atalImg from "@/untils/images/Atal_Incubation_Centre_Banasthali_Vidyapith_0e560e4ffa.png";
import Image from "next/image";

const highlights = [
  {
    category: "Energy Transition",
    title: "FIIRE Goa Acceleration Program",
    description: "Selected for the prestigious FIIRE (Forum for Innovation, Incubation and Research in Energy) acceleration program in Goa, focusing on renewable energy solutions.",
    image: fiireImg,
    type: "Grant",
    delay: "0"
  },
  {
    category: "Urban Mobility",
    title: "DPIIT Startup India Recognition",
    description: "Recognized by the Department for Promotion of Industry and Internal Trade under the Government of India's Startup India initiative.",
    image: dpiitImg,
    type: "Recognition",
    delay: "100"
  },
  {
    category: "Meet the Innovators",
    title: "Wadhwani Foundation Fellowship",
    description: "Awarded fellowship for innovative solutions in sustainable transportation and urban mobility sectors.",
    image: wadhwaniImg,
    type: "Fellowship",
    delay: "200"
  },
  {
    category: "Ride-Hailing",
    title: "Deshpande Foundation Incubation",
    description: "Incubated by the Deshpande Foundation for developing next-generation ride-hailing platform with sustainable mobility focus.",
    image: deshpandeImg,
    type: "Incubation",
    delay: "300"
  },
  {
    category: "Urban Mobility",
    title: "Razorpay Tech Partnership",
    description: "Strategic technology partnership with Razorpay for seamless payment integration in mobility solutions.",
    image: razorpayImg,
    type: "Partnership",
    delay: "400"
  },
  {
    category: "Energy Transition",
    title: "IIT Startups Accelerator",
    description: "Part of the elite IIT Startups accelerator program, leveraging cutting-edge research for clean energy innovations.",
    image: iitImg,
    type: "Accelerator",
    delay: "500"
  },
  {
    category: "Meet the Innovators",
    title: "Atal Incubation Centre",
    description: "Supported by Atal Incubation Centre, Banasthali Vidyapith under the Atal Innovation Mission for women-led innovation in mobility.",
    image: atalImg,
    type: "Incubation",
    delay: "600"
  }
];



export default function NewsroomHighlights() {
  return (
    <div className="lg:min-h-screen bg-background py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20">
            Innovation Ecosystem
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">Newsroom</span>
            <br />
            <span className="text-foreground">& Highlights</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Showcasing our journey through partnerships, recognitions, and innovations in sustainable mobility, 
            energy transition, and urban transportation solutions.
          </p>
        </div>

 {/* <div className="mt-20 grid grid-cols-2 mt-[80px] md:grid-cols-4 gap-8 animate-fade-in" style={{ animationDelay: "800ms" }}>
          {[
            { number: "7+", label: "Strategic Partners" },
            { number: "4", label: "Key Categories" },
            { number: "5+", label: "Awards & Grants" },
            { number: "3", label: "Incubation Programs" }
          ].map((stat, index) => (
            <div key={index} className="text-center animate-glow-pulse" style={{ animationDelay: `${index * 200}ms` }}>
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div> */}
        {/* Highlights Carousel */}
        <div className="relative py-16 mt-[40px]">
          <Slider
            dots={false}
            infinite={true}
            speed={3000}
            slidesToShow={3}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={0}
            cssEase="linear"
            pauseOnHover={false}
            pauseOnFocus={false}
            arrows={false}
            responsive={[
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  arrows: false,
                }
              },
              {
                breakpoint: 640,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: false,
                }
              }
            ]}
          >
            {highlights.map((highlight, index) => (
              <div key={index} className="px-4">
                <Card
                  className="gradient-border shadow-enhanced backdrop-blur-sm transition-all duration-500 animate-fade-in animate-bounce-gentle"
                  style={{ 
                    animationDelay: `${highlight.delay}ms`,
                    animationDuration: `${2 + index * 0.3}s`
                  }}
                >
                  <div className="relative p-4 text-center bg-card-gradient rounded-lg">
                    {/* Logo */}
                    <div className="flex justify-center mb-3">
                      <div className="relative bg-background/80 backdrop-blur-sm rounded-xl p-4 shadow-lg transition-all duration-300">
                        <Image
                          src={highlight.image as any}
                          alt={highlight.title}
                          className="h-16 w-20 object-contain filter transition-all duration-300"
                        />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xs font-medium text-foreground transition-all duration-300 leading-tight">
                      {highlight.title}
                    </h3>
                  </div>
                </Card>
              </div>
            ))}
          </Slider>
        </div>

        {/* Stats Section */}
       
      </div>
    </div>
  );
}
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/shared/Card";
import { Button } from "@/components/shared/Button";
import { ArrowRight, Calendar, User } from "lucide-react";
import blog1 from "@/untils/images/blog/blog1.jpg"
import blog2 from "@/untils/images/blog/blog2.webp"
import blog3 from "@/untils/images/blog/blog3.png"
import blog4 from "@/untils/images/blog/blog4.jpg"
import blog5 from "@/untils/images/blog5.png"
import Image from "next/image";

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      title: "IIT Startup India Cohort 12",
      description: "Blinq Mobility selected for prestigious IIT Startup India Cohort 12, marking a significant milestone in our journey to revolutionize urban mobility.",
      date: "2024",
      author: "Blinq Team",
      image: blog1,
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7290788013968703488",
      category: "Achievement"
    },
    {
      id: 2,
      title: "Driving Change in Urban Mobility: The Blinq Mobility Journey",
      description: "From Formula Student to revolutionary electric pods - discover how IIT Delhi graduate Ankit Kumar is transforming urban transport with purpose-built vehicles.",
      date: "2024",
      author: " Startup time",
      image: blog2,
      url: "https://startuptimes.net/blinq-mobility-1#",
      category: "Founder Story"
    },
    {
      id: 3,
      title: "Meet Abhilasha & Sushmita: Innovators Behind Blinq Mobility",
      description: "Two trailblazing women entrepreneurs transforming urban mobility with electric pods that promise smarter, sustainable, and efficient transportation solutions.",
      date: "2024",
      author: " Biz Bracket",
      image: blog3,
      url: "https://bizbracket.in/womenpreneurs/meet-abhilasha-and-sushmita-innovators-behind-blinq-mobility-success-story/",
      category: "Team Spotlight"
    },
    {
      id: 4,
      title: "How Energy Transition Is Disrupting the Ride-Hailing Market",
      description: "Exploring how the shift to electric vehicles is transforming India's ride-hailing industry and creating new opportunities for sustainable transportation.",
      date: "2024",
      author: "Blinq Research",
      image: blog4,
      url: "https://www.linkedin.com/pulse/how-energy-transition-disrupting-ride-hailing-market-sushmita-patil-ctzyf/",
      category: "Industry Insights"
    },
     {
      id: 5,
      title: "Battery Swapping: Powering the Next Wave of EV Adoption",
      description: "If charging is “plug in and wait,” battery swapping is “pull in and go.” Instead of tethering a vehicle for 30–90 minutes, drivers exchange a depleted battery for a fully charged one in just a couple of minutes and get back on the road. It’s quick, clean, and built for high-utilization fleets and everyday riders alike.",
      date: "2024",
      author: "Blinq Research",
      image: blog5,
      url: "https://www.linkedin.com/pulse/battery-swapping-powering-next-wave-ev-adoption-blinq-mobility-pbkgf/",
      category: "Industry Insights"
    }
  ];

  return (
    <section className="py-10 px-4 bg-background" id="blog">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="bg-electric-blue/10 text-electric-blue px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">
              Latest Insights
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            From Our <span className="text-electric-blue">Blog</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest developments, insights, and stories from the Blinq Mobility journey
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Card key={blog.id} className="group rounded-2xl hover:shadow-electric transition-all duration-500 border-border/50 bg-card/50 backdrop-blur shadow-[0_0_30px_rgba(59,166,255,0.3)]">
              <div className="relative overflow-hidden">
                <Image 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-electric-blue text-white px-3 py-1 rounded-full text-xs font-medium">
                    {blog.category}
                  </span>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{blog.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{blog.author}</span>
                  </div>
                </div>
                <CardTitle className="text-xl leading-tight group-hover:text-electric-blue transition-colors">
                  {blog.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <CardDescription className="text-muted-foreground leading-relaxed mb-6">
                  {blog.description}
                </CardDescription>
                
                <Button 
                  variant="ghost" 
                  className="group/btn p-0 h-auto font-medium text-electric-blue hover:text-white hover:bg-electric-blue/20 rounded-lg px-3 py-2 transition-all duration-300"
                  onClick={() => window.open(blog.url, '_blank')}
                >
                  Read Full Article
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        
      </div>
    </section>
  );
};

export default BlogSection;
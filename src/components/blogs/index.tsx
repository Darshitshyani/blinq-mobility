
import {  Calendar, User, Share2, ArrowRight } from "lucide-react";
import { Button } from "@/components/shared/Button";
import { Badge } from "@/components/shared/Badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/shared/Card";
import { useRouter } from "next/router";
import blog1group from "@/untils/images/1738258039827.jpg";
import blog2group from "@/untils/images/whatsapp-image-2025-01-13-at-193205-56e41b1b.jpg";
import blog1 from "@/untils/images/blog/blog1.jpg"
import blog2 from "@/untils/images/blog/blog2.webp"
import blog3 from "@/untils/images/blog/blog3.png"
import blog4 from "@/untils/images/blog/blog4.jpg"
import blogbottom1 from "@/untils/images/blogbottom1.webp"
import blogbottom2 from "@/untils/images/blogbottom2.png"
import Image from "next/image";
import blogsecondImage from "@/untils/images/blogIamgesecond.webp"

const BlogPost = (slug:any) => {

const router =useRouter()

  const allBlogPosts = [
    {
      slug: "iitstartupindia-cohort-12",
      title: "IIT Startup India Cohort 12",
      category: "Achievement",
      date: "2024",
      author: "Blinq Team",
      readTime: "3 min read",
      image: blog1,
      excerpt: "Blinq Mobility selected for prestigious IIT Startup India Cohort 12, marking a significant milestone in our journey to revolutionize urban mobility."
     
    },
    {
      slug: "driving-change-in-urban-mobility",
      title: "Driving Change in Urban Mobility: The Blinq Mobility Journey",
      category: "Founder Story",
      date: "2024",
      author: "Ankit Kumar",
      readTime: "5 min read",
      image: blog2,
      excerpt: "From Formula Student to revolutionary electric pods - discover how IIT Delhi graduate Ankit Kumar is transforming urban transport."
    },
    {
      slug: "meet-abhilasha-sushmita",
      title: "Meet Abhilasha & Sushmita: Innovators Behind Blinq Mobility",
      category: "Team Spotlight",
      date: "2024",
      author: "Blinq Team",
      readTime: "4 min read",
      image: blog3,
      excerpt: "Two trailblazing women entrepreneurs transforming urban mobility with electric pods that promise smarter, sustainable solutions."
    },
    {
      slug: "energy-transition-ride-hailing",
      title: "How Energy Transition Is Disrupting the Ride-Hailing Market",
      category: "Industry Insights",
      date: "2024",
      author: "Blinq Research",
      readTime: "6 min read",
      image: blog4,
      excerpt: "Exploring how the shift to electric vehicles is transforming India's ride-hailing industry and creating new opportunities."
    }
  ];

  const blogPosts:any = {
    "iitstartupindia-cohort-12": {
      title: "IIT Startup India Cohort 12",
      category: "Achievement",
      date: "2024",
      author: "Blinq Team",
      readTime: "3 min read",
      
      buttomImages:[blogbottom1,blogbottom2],
      image: blog1,
       content: `
        <p class="text-lg leading-relaxed mb-6">
          IITStartups is thrilled to share that Nikesh Bisht, Sushmita Patil, 
          #IITStartupsIndia cohort members and BlinqMobility Founders, have received 
          multiple global investor interests in PIWOT 25 Demo Day!
        </p>
        
        <p class="mb-6">
          Blinq is on a mission to tackle the challenges of sustainable urban transport 
          by creating innovative electric vehicles (EVs) that are cost-effective, modular, 
          and equipped with quick battery swaps. The solution directly addresses range anxiety 
          which is one of the biggest barriers to EV adoption.
        </p>
        
        <h2 class="text-2xl font-bold mb-4 text-electric-blue">The Team Behind Innovation</h2>
        <p class="mb-6">
          Started by a group of five co-founders, all graduates of #IITDelhi, Blinq has a highly skilled team, 
          passionate and prepared to tackle the massive challenge of building the perfect city ride. 
          The Founders' journey began in their student days, where they designed and built electric 
          formula race cars as part of Axlr8r Formula Racing, an international Formula Student team.
        </p>

        <img src="${blog1group.src}" alt="Blinq Founders Group" class="mb-6 rounded-lg" />

        <p class="mb-6">
          Nikesh Bisht is a second time founder in EV space, having built and scaled 
          Vecmocon technologies before this. Blinq's CTO, Ankit Kumar has rich experience 
          from Tesla, having worked on Cybertruck, and robotaxi. Sushmita Patil, 
          Abhilasha Marmat, and Yashdeep Singhha bring complementary skills in design, 
          engineering, and operations.
        </p>
        
        <h2 class="text-2xl font-bold mb-4 text-electric-blue">A Global Recognition</h2>
        <p class="mb-6">
          Being selected for IIT Startup India Cohort 12 marks a significant milestone 
          in our journey to revolutionize urban mobility. This prestigious program provides 
          us with the platform to showcase our innovative solutions to a global audience 
          of investors and industry leaders.
        </p>
        <div class="flex gap-2 justify-center flex-wrap">
          <img src="${blogbottom1.src}" alt="Blinq Founders Group" class="mb-6 rounded-lg w-[350px] h-[300px]" />
            <img src="${blogbottom2.src}" alt="Blinq Founders Group" class="mb-6 rounded-lg w-[350px] h-[300px]" />
        </div>
        <p class="mb-6">
          The multiple global investor interests received during PIWOT 25 Demo Day 
          validate our vision of creating sustainable, cost-effective urban transportation 
          solutions that address real-world challenges faced by millions of commuters daily.
        </p>
      `

    },
    "driving-change-in-urban-mobility": {
      title: "Driving Change in Urban Mobility: The Blinq Mobility Journey",
      category: "Founder Story",
      date: "2024",
      author: "Ankit Kumar",
      readTime: "5 min read",
      image: blog2,
      content: `
        <p class="text-lg leading-relaxed mb-6">Blinq Mobility, founded by IIT Delhi graduate and ex-Tesla engineer Ankit Kumar, aims to revolutionize urban transport with purpose-built electric pods tailored for ride-hailing services. Combining affordability, safety, and sustainability, the pods offer a 4-wheeler experience at a 3-wheeler price.</p>
        
        <p class="mb-6">In the bustling corridors of India's startup ecosystem, Blinq Mobility is emerging as a beacon of innovation and purpose. Founded by Ankit Kumar, an IIT Delhi graduate and former Tesla engineer, the company is set to redefine urban transportation with its purpose-built electric vehicles.</p>
        
        <h2 class="text-2xl font-bold mb-4 text-electric-blue">A Founder's Drive: From Formula Racecars to Urban Commutes</h2>
        <p class="mb-6">Ankit Kumar's journey is as inspiring as his startup's vision. A 2023 graduate of IIT Delhi, Ankit honed his engineering acumen as a member and eventual captain of the institute's Formula Student team, crafting electric racecars and leading them to international acclaim.</p>
        
        <blockquote class="border-l-4 border-electric-blue pl-6 my-8 italic text-lg">
          "Being part of Formula Student felt like living in a startup—managing the team, building the product, raising funds, and solving operational challenges together."
        </blockquote>
        
        <p class="mb-6">This experience proved invaluable when Ankit transitioned to Tesla, where he worked on cutting-edge projects like the Cybertruck and Robotaxi. His time at Tesla wasn't just about engineering; it was a masterclass in innovation, precision, and the relentless pursuit of excellence.</p>
        <img src="${blog2group.src}" alt="Blinq Founders Group" class="mb-6 rounded-lg" />
        <h2 class="text-2xl font-bold mb-4 text-electric-blue">From Tesla to Transformation</h2>
        <p class="mb-6">While Tesla provided Ankit with unparalleled exposure to the future of mobility, he realized that the solutions being developed there, though revolutionary, weren't tailored to the unique challenges of Indian urban transport. This realization sparked the idea for Blinq Mobility.</p>
        
        <p class="mb-6">"I saw firsthand how electric vehicles could transform transportation, but I also recognized that India needed purpose-built solutions that address local challenges like affordability, infrastructure limitations, and specific use cases like ride-hailing," Ankit explains.</p>
        
        <h2 class="text-2xl font-bold mb-4 text-electric-blue">The Vision: Purpose-Built for India</h2>
         <img src="${blogsecondImage.src}" alt="Blinq Founders Group" class="mb-6 rounded-lg w-full h-[500px]" />
        <p class="mb-6">Blinq Mobility's mission is ambitious yet clear: to revolutionize city commuting with affordable, safe, and sustainable solutions tailored for ride-hailing services. The company's electric pods are designed to offer a 4-wheeler experience at a 3-wheeler price, making them ideal for urban transportation needs.</p>
        
        <p class="mb-6">With a strong team and innovative design, Blinq is set to transform India's mobility landscape, one electric pod at a time.</p>
      `
    },
    "meet-abhilasha-sushmita": {
      title: "Meet Abhilasha & Sushmita: Innovators Behind Blinq Mobility",
      category: "Team Spotlight",
      date: "2024",
      author: "Blinq Team",
      readTime: "4 min read",
      image: blog3,
      content: `
        <p class="text-lg leading-relaxed mb-6">In the world of urban transport, challenges like inefficiency and cost-effectiveness are common. However, two women, Abhilasha and Sushmita, are changing this narrative. Co-founders of Blinq Mobility, these trailblazing entrepreneurs are transforming urban mobility by introducing electric pods that promise to make transportation smarter, more sustainable, and efficient.</p>
        
        <p class="mb-6">Their inspiring journey from IIT Delhi to launching a groundbreaking startup is a story of innovation, resilience, and purpose.</p>
        
        <h2 class="text-2xl font-bold mb-4 text-electric-blue">Breaking Barriers in Tech</h2>
        <p class="mb-6">Abhilasha and Sushmita represent the new generation of women entrepreneurs who are not just participating in the tech ecosystem but actively shaping its future. As IIT Delhi graduates, they bring both technical expertise and a deep understanding of market needs to Blinq Mobility.</p>
       
        <p class="mb-6">Their complementary skills in design, engineering, and operations have been instrumental in developing Blinq's innovative electric pods that address the specific challenges of urban transportation in India.</p>
        
        <h2 class="text-2xl font-bold mb-4 text-electric-blue">A Vision for Sustainable Mobility</h2>
        <p class="mb-6">What sets Abhilasha and Sushmita apart is their holistic approach to problem-solving. They don't just see electric vehicles as a technological upgrade; they envision a complete transformation of how people move within cities.</p>
        
        <p class="mb-6">Their electric pods are designed with the end-user in mind, focusing on affordability without compromising on safety or sustainability. This user-centric approach has been key to Blinq Mobility's innovative solutions.</p>
        
        <h2 class="text-2xl font-bold mb-4 text-electric-blue">Leading the Change</h2>
        <p class="mb-6">As women leaders in the automotive and mobility sector, Abhilasha and Sushmita are inspiring a new generation of female entrepreneurs. Their success story demonstrates that with the right vision, skills, and determination, it's possible to create solutions that can transform entire industries.</p>
        
        <p class="mb-6">Through Blinq Mobility, they are not just building a company; they are paving the way for a more sustainable and efficient urban transportation ecosystem in India and beyond.</p>
        
        <blockquote class="border-l-4 border-electric-blue pl-6 my-8 italic text-lg">
          "We believe that innovation happens when diverse perspectives come together to solve real-world problems. Our electric pods are a testament to this philosophy."
        </blockquote>
      `
    },
    "energy-transition-ride-hailing": {
      title: "How Energy Transition Is Disrupting the Ride-Hailing Market",
      category: "Industry Insights",
      date: "2024",
      author: "Blinq Research",
      readTime: "6 min read",
      image: blog4,
      content: `
        <p class="text-lg leading-relaxed mb-6">India's ride-hailing market is a vibrant and fast-growing sector fueled by urbanization, a burgeoning middle class, and increasing smartphone penetration. Dominated by giants like Ola and Uber, this market is a lifeline for millions of commuters navigating urban traffic chaos.</p>
        
        <p class="mb-6">However, the backbone of this industry—internal combustion engine (ICE) vehicles—comes with significant drawbacks, making them increasingly unsustainable in today's world:</p>
        
        <h2 class="text-2xl font-bold mb-4 text-electric-blue">The ICE Vehicle Challenge</h2>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Rising Fuel Costs:</strong> Skyrocketing petrol and CNG prices erode driver earnings and increase operational costs for ride-hailing platforms.</li>
          <li><strong>Environmental Impact:</strong> ICE vehicles contribute heavily to urban air pollution, a pressing issue in Indian cities like Delhi, Mumbai, and Bengaluru.</li>
          <li><strong>Maintenance Overheads:</strong> With complex mechanical systems, ICE vehicles require frequent servicing, adding to downtime and costs.</li>
          <li><strong>Government Regulations:</strong> Stringent emissions norms like BS-VI are putting additional financial strain on ICE vehicle owners.</li>
        </ul>
        
        <p class="mb-6">Did you know that the typical life cycle of a taxi is much shorter than that of a private vehicle—usually around five years or less? That's because taxis are driven hard every day, racking up high mileage and facing constant wear and tear. This means the costs of fuel and maintenance can really add up, making it tough to stay profitable in the long run.</p>
        
        <h2 class="text-2xl font-bold mb-4 text-electric-blue">The Electric Shift 🌍 🔋</h2>
        <p class="mb-6">Enter electric vehicles—the game-changer that's set to disrupt the ride-hailing industry. EVs offer numerous advantages that directly address the pain points of ICE vehicles:</p>
        
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Lower Operating Costs:</strong> Electricity is significantly cheaper than petrol or CNG, reducing per-kilometer costs.</li>
          <li><strong>Minimal Maintenance:</strong> Electric motors have fewer moving parts, resulting in lower maintenance requirements.</li>
          <li><strong>Environmental Benefits:</strong> Zero tailpipe emissions contribute to cleaner air in urban areas.</li>
          <li><strong>Government Incentives:</strong> Subsidies, tax benefits, and preferential policies make EV adoption financially attractive.</li>
        </ul>
        
        <h2 class="text-2xl font-bold mb-4 text-electric-blue">The Blinq Advantage</h2>
        <p class="mb-6">At Blinq Mobility, we're not just participating in this transition—we're leading it. Our purpose-built electric pods are specifically designed for the ride-hailing market, offering:</p>
        
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Optimized Design:</strong> Built from the ground up for ride-hailing, not adapted from personal vehicles</li>
          <li><strong>Quick Battery Swaps:</strong> Addressing range anxiety with innovative battery-swapping technology</li>
          <li><strong>Cost Efficiency:</strong> 4-wheeler experience at 3-wheeler operational costs</li>
          <li><strong>Modular Architecture:</strong> Adaptable to different city requirements and use cases</li>
        </ul>
        
        <h2 class="text-2xl font-bold mb-4 text-electric-blue">The Road Ahead</h2>
        <p class="mb-6">The energy transition in the ride-hailing market is not just about switching from ICE to electric—it's about reimagining urban mobility entirely. As this transformation accelerates, companies that can provide purpose-built, cost-effective, and sustainable solutions will lead the way.</p>
        
        <p class="mb-6">The future of ride-hailing is electric, and that future is closer than we think. With supportive government policies, improving charging infrastructure, and innovative solutions like Blinq's electric pods, we're on the cusp of a transportation revolution that will benefit drivers, passengers, and the environment alike.</p>
      `
    }
  };

  const currentPost = blogPosts[slug.value as keyof typeof blogPosts];
  
  // Get other posts (excluding current post) for the "More from our blog" section
  const otherPosts = allBlogPosts.filter(blogPost => blogPost.slug !== slug).slice(0, 3);


  

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
   
      {/* Hero Section */}
      <div className="relative h-[60vh] ">
<div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />
        <div className="aspect-[21/9] md:aspect-[21/9] overflow-hidden h-full w-full">
          <Image 
            src={currentPost?.image} 
            alt={currentPost?.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-4xl mx-auto">
            <Badge variant="secondary" className="bg-electric-blue text-white mb-4">
              {currentPost?.category}
            </Badge>
            <h1 className="text-xl md:text-6xl font-bold text-white md:mb-6 leading-tight">
              {currentPost?.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Article Meta */}
        <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-border/50">
          <div className="flex items-center gap-2 text-muted-foreground">
            <User className="w-4 h-4" />
            <span>{currentPost?.author}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>{currentPost?.date}</span>
          </div>
          <div className="text-muted-foreground">
            {currentPost?.readTime}
          </div>
        
        </div>

        {/* Article Content */}
        <div 
          className="prose prose-lg max-w-none text-foreground prose-headings:text-foreground prose-p:text-foreground prose-li:text-foreground prose-blockquote:text-muted-foreground prose-strong:text-foreground"
          dangerouslySetInnerHTML={{ __html: currentPost?.content }}
        />
        { currentPost?.burromImages&&
            currentPost?.buttomImages.map((val:any)=>{
                <div className="w-[300px] z-10">
                 <Image src={val} alt="not found" className="w-full h-full" />
                </div>
            })

        }

        {/* Call to Action */}
        <div className="mt-16 p-8 bg-electric-blue/5 rounded-2xl border border-electric-blue/20">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Interested in Blinq Mobility?
          </h3>
          <p className="text-muted-foreground mb-6">
            Learn more about our innovative electric pods and how we're revolutionizing urban transportation.
          </p>
         
            <Button className="bg-electric-blue hover:bg-electric-blue/90 text-white" onClick={()=>{
                router.push("/")
            }}>
              Explore Our Solutions
            </Button>
         
        </div>

        {/* More from our blog */}
        {otherPosts.length > 0 && (
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-foreground mb-12 text-center">
              More from our <span className="text-electric-blue">Blog</span>
            </h3>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {allBlogPosts
    .filter((blogPost) => blogPost.slug !== slug.value) // ✅ only filtering
    .map((blogPost) => ( // ✅ then mapping to JSX
      <Card
        key={blogPost.slug}
        className="group rounded-2xl hover:shadow-electric transition-all duration-500 border-border/50 bg-card/50 backdrop-blur shadow-[0_0_20px_rgba(59,166,255,0.2)] cursor-pointer h-full"
      >
        <div className="relative overflow-hidden rounded-t-2xl">
          <Image
            src={blogPost.image}
            alt={blogPost.title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <Badge variant="secondary" className="bg-electric-blue text-white text-xs">
              {blogPost.category}
            </Badge>
          </div>
        </div>

        <CardHeader className="pb-3">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>{blogPost.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="w-3 h-3" />
              <span>{blogPost.author}</span>
            </div>
          </div>
          <CardTitle className="text-lg leading-tight group-hover:text-electric-blue transition-colors line-clamp-2">
            {blogPost.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="pt-0">
          <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
            {blogPost.excerpt}
          </p>

          <div
            onClick={() => {
              router.push(`/blogs/${blogPost.slug}`);
            }}
            className="flex items-center text-electric-blue text-sm font-medium group-hover:text-electric-blue/80 transition-colors"
          >
            Read Article
            <ArrowRight className="w-3 h-3 ml-1 transition-transform group-hover:translate-x-1" />
          </div>
        </CardContent>
      </Card>
    ))}
</div>

          </div>
        )}
      </article>
    </div>
  );
};

export default BlogPost;
import React from 'react';
import { Card } from '@/components/shared/Card';
import { Badge } from '@/components/shared/Badge';
import { Zap, Target, Eye, Users, Award, Car, Linkedin } from 'lucide-react';

import abhilashaImage from '@/untils/images/Abhilasha.jpg';
import gp4 from "@/untils/images/gp4.jpg"
import ajeetImg from '@/untils/images/Ajeet.jpg';
import ankitImg from '@/untils/images/ankit.jpg.png';
import manasiImg from '@/untils/images/Manasi.jpg';
import nikeshImg from '@/untils/images/nikesh  1.png';
import pritishImg from '@/untils/images/Pritish.jpg';
import ritikImg from '@/untils/images/ritik.jpeg';
import sohamImg from '@/untils/images/Soham .jpg';
import sushmitaImg from '@/untils/images/Sushmita.jpg';
import teamGroup1 from '@/untils/images/1738258039827.jpg';
import nexusAlumni from '@/untils/images/grp .jpg';
import formulaTeam from '@/untils/images/whatsapp-image-2025-01-13-at-193205-56e41b1b.jpg';
import yashDeep from '@/untils/images/Yashdeep.png';
import Image from 'next/image';
import { useRouter } from 'next/router';

const boardMembers = [
  { name: 'Nikesh', image: nikeshImg, role: 'CEO', department: 'Business', linkedin: 'https://www.linkedin.com/in/nikeshbisht/' },
  { name: 'Sushmita', image: sushmitaImg, role: 'COO', department: 'Business', linkedin: 'https://www.linkedin.com/in/sushmita-patil-687404219/' },
  { name: 'Ankit', image: ankitImg, role: 'CTO(M)', department: 'Technical', linkedin: 'https://www.linkedin.com/in/ankit-kumar-119396208/' },
  { name: 'Abhilasha', image: abhilashaImage, role: 'CTO(E)', department: 'Technical', linkedin: 'https://www.linkedin.com/in/abhilasha-marmat/' },
  { name: 'Yashdeep', image: yashDeep, role: 'Co-Founder', department: 'Technical', linkedin: 'https://www.linkedin.com/in/yashdeep0/' },
];

const coreTeam = [
  { name: 'Manasi', image: manasiImg, role: 'Business & Strategy', department: 'Business', fullTitle: "Founder's Office", linkedin: 'https://www.linkedin.com/in/manasi-korade-1949611a4/' },
  { name: 'Pritish', image: pritishImg, role: 'Automotive Designer', department: 'Technical', fullTitle: 'Design Lead', linkedin: 'https://www.linkedin.com/in/pritish-karmi-91124717b/' },
  { name: 'Ritik', image: ritikImg, role: 'Founding Engineer', department: 'Technical', fullTitle: 'Mechanical Systems', linkedin: 'https://www.linkedin.com/in/ritwik-mukherjee1/' },
  { name: 'Soham', image: sohamImg, role: 'Firmware Engineer', department: 'Technical', fullTitle: 'Electronics Systems', linkedin: 'https://www.linkedin.com/in/soham-patil-660621225/' },
  { name: 'Ajeet', image: ajeetImg, role: 'Technical Associate', department: 'Technical', fullTitle: 'Engineering Support', linkedin: 'https://www.linkedin.com/in/ajeet-jangid-33b2bb1a5/' },
];
const About = () => {
  const router = useRouter()
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center py-20">
        <div className="absolute inset-0 bg-hero-gradient" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <Badge className="mb-6 bg-electric-blue/20 text-electric-blue border-electric-blue/30 hover:bg-electric-blue/30">
            <Zap className="w-4 h-4 mr-2" />
            From Formula Student to Fleet-First EV Platform
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            About <span className="text-gradient">Blinq</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Revolutionizing urban mobility with modular electric vehicles, 
            powered by IIT Delhi innovation and Formula Student expertise.
          </p>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-20 w-20 h-20 bg-electric-blue/20 rounded-full animate-float" />
        <div className="absolute bottom-32 right-16 w-16 h-16 bg-electric-cyan/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-10 w-12 h-12 bg-electric-green/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      </section>

      {/* Story Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
           <div className="space-y-8 animate-fade-in">
            <div>
              <Badge className="mb-4 bg-electric-cyan/20 text-electric-cyan border-electric-cyan/30 backdrop-blur-sm">
                <Award className="w-4 h-4 mr-2" />
                Our Story
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                From Racing Circuits to <span className="text-gradient">City Streets</span> 🚗⚡
              </h2>
            </div>
            
            <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p className="hover:text-foreground/80 transition-colors">
                Blinq Mobility was founded in 2024 with a bold vision to make electric mobility the default choice for the masses. 
                The company was started by <span className="text-primary font-semibold">Nikesh, Ankit, Abhilasha, Sushmita, and Yashdeep</span>, 
                all of whom share a common DNA. They were part of <span className="text-accent font-semibold">IIT Delhi's AXLR8R Formula Racing team</span>, 
                where they designed, built, and raced Formula-style electric cars at international competitions.
              </p>
              
              <p className="hover:text-foreground/80 transition-colors">
                Those years on the racing circuit taught us far more than just speed. We learned how to 
                <span className="text-electric-blue font-semibold"> engineer reliable EVs from scratch</span>, lead diverse teams, 
                manage limited resources like a startup, and innovate under pressure.
              </p>
              
              <p className="hover:text-foreground/80 transition-colors">
                Today, we are channeling that experience into the city streets. Our first product, the 
                <span className="text-gradient font-semibold"> Blinq Pod</span>, is a lightweight, modular electric vehicle 
                with <span className="text-electric-cyan font-semibold">less than 5-minute swappable batteries</span>, built to deliver safe, 
                comfortable, and affordable rides without the downtime of charging.
              </p>
            </div>
          </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <Image 
                src={formulaTeam} 
                alt="Formula Student team building"
                className="rounded-2xl shadow-electric w-full aspect-[4/3] object-cover"
              />
              <Image 
                src={nexusAlumni} 
                alt="IIT Delhi Nexus Alumni Achievement"
                className="rounded-2xl shadow-accent w-full aspect-[4/3] object-cover"
              />
            </div>
            <div className="space-y-4">
              <Image 
                src={teamGroup1} 
                alt="Blinq founding team"
                className="rounded-2xl shadow-electric w-full aspect-[4/3] object-cover"
              />
              <Image 
                src={gp4} 
                alt="Team collaborating in workspace"
                className="rounded-2xl shadow-accent w-full aspect-[4/3] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
     
      {/* Team Section */}
  <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-electric-purple/20 text-electric-purple border-electric-purple/30">
              <Users className="w-4 h-4 mr-2" />
              Meet Our Team
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The <span className="text-gradient">Innovators</span> Behind Blinq
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A diverse team of engineers and visionaries united by our passion for sustainable mobility
            </p>
          </div>
          
          {/* Board of Directors */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Board of Directors</h3>
            <div className="relative">
              {/* Connecting lines background */}
              {/* <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                <div className="w-full h-px bg-electric-blue/30 relative">
                  <div className="absolute top-0 left-1/4 w-px h-16 bg-electric-blue/30 -translate-y-8"></div>
                  <div className="absolute top-0 left-2/4 w-px h-16 bg-electric-blue/30 -translate-y-8"></div>
                  <div className="absolute top-0 left-3/4 w-px h-16 bg-electric-blue/30 -translate-y-8"></div>
                </div>
              </div> */}
              
              <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
                {boardMembers.map((member, index) => (
                  <Card 
                    key={member.name}
                    className="p-6 bg-card-gradient border-2 border-electric-blue/30 hover:border-electric-blue/60 hover:shadow-electric transition-all duration-300 group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative mb-4">
                      <Image 
                        src={member.image} 
                        alt={member.name}
                        className="w-full aspect-square object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-electric-blue flex items-center justify-center">
                        <div className="w-2 h-2 bg-background rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="text-center ">
                      <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                      <p className="text-sm font-medium mb-1 text-electric-blue">{member.role}</p>
                     
                      <a 
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex mt-2 items-center justify-center w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/20 hover:border-white/30 transition-all duration-300 shadow-lg"
                      >
                        <Linkedin className="w-4 h-4 text-electric-blue" />
                      </a>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Core Team */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-8">Core Team</h3>
            <div className="relative">
              {/* Department connecting lines */}
              <div className="absolute inset-0 flex justify-center items-start pointer-events-none pt-20">
                <div className="w-3/4 flex justify-between">
                  <div className="flex flex-col items-center">
                    <div className="w-px h-12 bg-electric-cyan/30"></div>
                    <div className="text-xs text-electric-cyan font-medium">Business</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-px h-12 bg-electric-purple/30"></div>
                    <div className="text-xs text-electric-purple font-medium">Technical</div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 relative z-10">
                {coreTeam.map((member, index) => (
                  <Card 
                    key={member.name}
                    className="p-6 bg-card-gradient border border-electric-blue/20 hover:border-electric-blue/40 hover:shadow-electric transition-all duration-300 group"
                    style={{ animationDelay: `${(index + 4) * 0.1}s` }}
                  >
                    <div className="relative mb-4">
                      <Image 
                        src={member.image} 
                        alt={member.name}
                        className="w-full aspect-square object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-electric-blue/60"></div>
                    </div>
                    
                    <div className="text-center">
                      <h3 className="font-semibold text-base mb-1">{member.name}</h3>
                      <p className="text-sm font-medium mb-1 text-electric-blue">{member.role}</p>
                      <p className="text-xs text-muted-foreground mb-4">{member.fullTitle}</p>
                      <a 
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-9 h-9 bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/20 hover:border-white/30 transition-all duration-300 shadow-lg"
                      >
                        <Linkedin className="w-4 h-4 text-electric-blue" />
                      </a>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-card/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join the <span className="text-gradient">Electric Revolution</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Together, we're building the future of urban mobility. 
            One electric vehicle at a time.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
            <button onClick={()=>{
              router.push("https://www.notion.so/Blinq-Build-the-Future-of-Mobility-With-Us-27853783cf5b807e90f9c9524c5393c6?source=copy_link")
            }} className="px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:bg-secondary/80 transition-colors">
             Careers
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
import React from 'react';
import { Card } from '@/components/shared/Card';
import { Badge } from '@/components/shared/Badge';
import { Zap, Target, Eye, Users, Award, Car } from 'lucide-react';

// Import team images
import abhilashaImg from '@/untils/images/Abhilasha.jpg';
import ajeetImg from '@/untils/images/Ajeet.jpg';
import ankitImg from '@/untils/images/ankit.jpg.png';
import manasiImg from '@/untils/images/Manasi.jpg';
import nikeshImg from '@/untils/images/nikesh .jpg';
import pritishImg from '@/untils/images/Pritish.jpg';
import ritikImg from '@/untils/images/ritik.jpeg';
import sohamImg from '@/untils/images/Soham .jpg';
import sushmitaImg from '@/untils/images/Sushmita.jpg';
import teamGroup1 from '@/untils/images/1738258039827.jpg';
import teamWorkspace from '@/untils/images/WhatsApp Image 2025-05-15 at 13.41.09_2ae1e071.jpg';
import nexusAlumni from '@/untils/images/grp .jpg';
import formulaTeam from '@/untils/images/whatsapp-image-2025-01-13-at-193205-56e41b1b.jpg';
import Image from 'next/image';

const teamMembers = [
  { name: 'Abhilasha', image: abhilashaImg, role: 'Co-Founder' },
  { name: 'Ajeet', image: ajeetImg, role: 'Co-Founder' },
  { name: 'Ankit', image: ankitImg, role: 'Co-Founder' },
  { name: 'Manasi', image: manasiImg, role: 'Engineer' },
  { name: 'Nikesh', image: nikeshImg, role: 'Co-Founder' },
  { name: 'Pritish', image: pritishImg, role: 'Co-Founder' },
  { name: 'Ritik', image: ritikImg, role: 'Engineer' },
  { name: 'Soham', image: sohamImg, role: 'Engineer' },
  { name: 'Sushmita', image: sushmitaImg, role: 'Engineer' },
];

const About = () => {
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
            <div>
              <Badge className="mb-4 bg-electric-cyan/20 text-electric-cyan border-electric-cyan/30">
                <Award className="w-4 h-4 mr-2" />
                Our Story
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                From Racing Circuits to <span className="text-gradient">City Streets</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Our founding team, composed of <span className="text-primary font-semibold">IIT Delhi graduates</span>, 
                has a rich history of building and racing Formula-style electric vehicles internationally.
              </p>
              
              <p>
                From winning prestigious engineering competitions to pioneering sustainable mobility solutions,
                our journey represents the perfect blend of <span className="text-accent font-semibold">academic excellence</span> and 
                <span className="text-electric-green font-semibold"> real-world innovation</span>.
              </p>
              
              <p>
                This experience, combined with a burning desire to solve mobility problems with technology, 
                has fueled our commitment to build <span className="text-gradient font-semibold">Blinq</span>.
              </p>
              
              <p>
                We've taken our racing expertise and channeled it into creating practical, 
                efficient electric vehicles for urban transportation, backed by our proven track record
                of <span className="text-electric-cyan font-semibold">engineering excellence</span>.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 bg-card-gradient border-electric-blue/20">
                <Car className="w-8 h-8 text-electric-blue mb-3" />
                <h3 className="font-semibold mb-2">Formula Student</h3>
                <p className="text-sm text-muted-foreground">International racing experience</p>
              </Card>
              
              <Card className="p-6 bg-card-gradient border-electric-cyan/20">
                <Users className="w-8 h-8 text-electric-cyan mb-3" />
                <h3 className="font-semibold mb-2">IIT Delhi</h3>
                <p className="text-sm text-muted-foreground">Top engineering talent</p>
              </Card>
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
                src={teamWorkspace} 
                alt="Team collaborating in workspace"
                className="rounded-2xl shadow-accent w-full aspect-[4/3] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-electric-green/20 text-electric-green border-electric-green/30">
              <Target className="w-4 h-4 mr-2" />
              Our Purpose
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Mission & <span className="text-gradient">Vision</span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Mission */}
            <Card className="p-8 bg-card-gradient border-electric-blue/20 shadow-electric">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-electric-blue/20 rounded-full">
                  <Target className="w-6 h-6 text-electric-blue" />
                </div>
                <h3 className="text-2xl font-bold">Mission</h3>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Replace ICE taxis with <span className="text-primary font-semibold">cheaper, modular EVs</span> 
                that transform urban transportation economics and environmental impact.
              </p>
              
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-electric-blue/10 rounded-lg">
                  <div className="text-2xl font-bold text-electric-blue">100%</div>
                  <div className="text-sm text-muted-foreground">Electric Fleet</div>
                </div>
                <div className="text-center p-4 bg-electric-blue/10 rounded-lg">
                  <div className="text-2xl font-bold text-electric-blue">30%</div>
                  <div className="text-sm text-muted-foreground">Cost Reduction</div>
                </div>
              </div>
            </Card>
            
            {/* Vision */}
            <Card className="p-8 bg-card-gradient border-electric-cyan/20 shadow-accent">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-electric-cyan/20 rounded-full">
                  <Eye className="w-6 h-6 text-electric-cyan" />
                </div>
                <h3 className="text-2xl font-bold">Vision</h3>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Integrated platform for <span className="text-accent font-semibold">vehicles, batteries, 
                swap infrastructure & data analytics</span> creating a complete mobility ecosystem.
              </p>
              
              <div className="mt-6 space-y-3">
                {['Modular Vehicles', 'Battery Swapping', 'Smart Analytics', 'Fleet Management'].map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-electric-cyan rounded-full" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

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
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {teamMembers.map((member, index) => (
              <Card 
                key={member.name}
                className="p-6 bg-card-gradient border-electric-blue/20 hover:shadow-electric transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-4">
                  <Image 
                    src={member.image} 
                    alt={member.name}
                    className="w-full aspect-square object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-electric-blue/0 group-hover:bg-electric-blue/10 rounded-lg transition-colors duration-300" />
                </div>
                
                <div className="text-center">
                  <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              </Card>
            ))}
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
            
            <button className="px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:bg-secondary/80 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
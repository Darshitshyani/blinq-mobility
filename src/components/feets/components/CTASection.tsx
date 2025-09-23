import { Button } from '@/components/shared/Button';
import { ArrowRight, Calendar, Calculator } from 'lucide-react';
import fleetMountains from '@/untils/images/fleet/flt6.png';
import Image from 'next/image';

export const CTASection = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={fleetMountains}
          alt="Fleet of Blinq Pods at swap station"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          Join the <span className="text-gradient">Blinq Fleet</span>
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Scale smarter, faster, greener.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Button 
            size="lg" 
            className="group bg-gradient-electric text-primary-foreground hover:shadow-electric transition-all duration-300 px-8 py-6 text-lg font-semibold"
          >
            <Calendar className="w-5 h-5 mr-2 group-hover:animate-glow-pulse" />
            Book a Pilot
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="group border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary/50 px-8 py-6 text-lg font-semibold"
          >
            <Calculator className="w-5 h-5 mr-2 group-hover:animate-glow-pulse" />
            Calculate Your Savings
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">₹3.5L</div>
            <div className="text-muted-foreground">Affordable Entry Point</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">5 min</div>
            <div className="text-muted-foreground">Battery Swap Time</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">16-20h</div>
            <div className="text-muted-foreground">Daily Uptime</div>
          </div>
        </div>

        {/* Commuter Benefits */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="bg-card-gradient p-6 rounded-xl border border-border/20 backdrop-blur-sm">
            <h3 className="font-bold text-foreground mb-2">For Passengers</h3>
            <ul className="text-sm text-muted-foreground space-y-1 text-left">
              <li>✓ Forget range anxiety. Drive where you want.</li>
              <li>✓ No waiting, just swapping.</li>
              <li>✓ Built for your everyday commute.</li>
              <li>✓ Pay for the ride, not the battery.</li>
            </ul>
          </div>
          <div className="bg-card-gradient p-6 rounded-xl border border-border/20 backdrop-blur-sm">
            <h3 className="font-bold text-foreground mb-2">For Fleet Operators</h3>
            <ul className="text-sm text-muted-foreground space-y-1 text-left">
              <li>✓ 40% lower running cost/km vs petrol taxis</li>
              <li>✓ Cars run 16–20 hrs/day with 5-min swaps</li>
              <li>✓ Battery-as-a-service removes upfront cost</li>
              <li>✓ Smart telematics & driver analytics</li>
            </ul>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-12 p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl ">
          <p className=" font-semibold text-lg mb-4">
            Ready to transform your fleet operations?
          </p>
          <Button 
            variant="secondary"
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-4 font-semibold border border-electric"
          >
            Start Your Blinq Journey Today
          </Button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-electric-blue/20 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-electric-green/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />
    </section>
  );
};
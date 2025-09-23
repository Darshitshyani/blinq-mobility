import { Leaf, Users, Shield } from 'lucide-react';

const impacts = [
  {
    icon: Leaf,
    title: "Greener Cities",
    description: "Every swap reduces emissions",
    stat: "1,200+ tonnes",
    statLabel: "CO₂ saved per 100-car fleet annually",
    color: "text-success"
  },
  {
    icon: Users,
    title: "Job Creation",
    description: "Drivers, technicians, swap station staff",
    stat: "500+",
    statLabel: "jobs created per 1000 vehicles",
    color: "text-electric-blue"
  },
  {
    icon: Shield,
    title: "Reliable Service",
    description: "Predictable uptime builds passenger trust",
    stat: "99.9%",
    statLabel: "fleet availability with battery swapping",
    color: "text-electric-cyan"
  }
];

export const ImpactSection = () => {
  return (
    <section className="py-20 px-4 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-electric-blue/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-electric-green/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-6 py-3 border border-primary/30 bg-primary/10 backdrop-blur-md text-foreground rounded-full  font-semibold mb-6">
            <Leaf className="w-5 h-5" />
            <span>Beyond Economics</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            The <span className="text-gradient">Impact</span> We Create
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Blinq doesn't just transform fleets—it transforms communities and cities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {impacts.map((impact, index) => (
            <div
              key={index}
              className="group relative bg-card-gradient p-8 rounded-2xl border border-border/20 hover:border-primary/30 transition-all duration-500 hover:shadow-accent-glow hover:-translate-y-2"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-background/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <impact.icon className={`w-8 h-8 ${impact.color} group-hover:animate-glow-pulse`} />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-gradient transition-colors duration-300">
                {impact.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {impact.description}
              </p>

              {/* Stat */}
              <div className="border-t border-border/20 pt-6">
                <div className={`text-3xl font-bold ${impact.color} mb-1 group-hover:animate-glow-pulse`}>
                  {impact.stat}
                </div>
                <div className="text-sm text-muted-foreground">
                  {impact.statLabel}
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-electric opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Additional Impact Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-6 text-center">
          <div className="group bg-card-gradient p-6 rounded-xl border border-border/20 hover:border-success/30 transition-all duration-300">
            <div className="text-3xl font-bold text-success mb-2 group-hover:animate-glow-pulse">15M+</div>
            <div className="text-sm text-muted-foreground">KM driven emission-free</div>
          </div>
          <div className="group bg-card-gradient p-6 rounded-xl border border-border/20 hover:border-electric-blue/30 transition-all duration-300">
            <div className="text-3xl font-bold text-electric-blue mb-2 group-hover:animate-glow-pulse">2,500+</div>
            <div className="text-sm text-muted-foreground">Happy passengers daily</div>
          </div>
          <div className="group bg-card-gradient p-6 rounded-xl border border-border/20 hover:border-electric-cyan/30 transition-all duration-300">
            <div className="text-3xl font-bold text-electric-cyan mb-2 group-hover:animate-glow-pulse">50+</div>
            <div className="text-sm text-muted-foreground">Swap stations operational</div>
          </div>
          <div className="group bg-card-gradient p-6 rounded-xl border border-border/20 hover:border-electric-green/30 transition-all duration-300">
            <div className="text-3xl font-bold text-electric-green mb-2 group-hover:animate-glow-pulse">98%</div>
            <div className="text-sm text-muted-foreground">Driver satisfaction rate</div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 text-foreground p-8 rounded-2xl  max-w-4xl mx-auto">
            <blockquote className="text-xl md:text-2xl  font-medium mb-4">
              "Switching to Blinq has been a game-changer. Our drivers love the reliability, passengers appreciate the comfort, and our bottom line has never looked better."
            </blockquote>
            <div className=" font-semibold">
              - Fleet Partner, Delhi NCR
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
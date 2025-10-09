import { TrendingDown, Clock, Shield, CreditCard, Wrench, DollarSign, Users } from 'lucide-react';

const advantages = [
  // {
  //   icon: TrendingDown,
  //   title: "40% Lower Operating Costs",
  //   description: "₹4/km vs ₹6–12/km",
  //   highlight: "₹4/km",
  //   color: "text-success"
  // },
  {
    icon: Clock,
    title: "Zero Downtime",
    description: "5-min swaps, 16–20 hrs daily",
    highlight: "5-min swaps",
    color: "text-electric-blue"
  },
  {
    icon: Shield,
    title: "No Battery Headaches",
    description: "Swapping removes range anxiety",
    highlight: "250 km range",
    color: "text-electric-cyan"
  },
  // {
  //   icon: CreditCard,
  //   title: "Affordable Entry",
  //   description: "₹3.5 lakh, battery-as-a-service",
  //   highlight: "₹3.5L",
  //   color: "text-electric-green"
  // },
  {
    icon: Wrench,
    title: "Built for Fleets",
    description: "A robust and durable ride with Predictive maintenance alerts.",
    highlight: "5,00,000+ km",
    color: "text-electric-purple"
  }
];

export const AdvantagesSection = () => {
  return (
    <>
    <section className="py-20 px-4 bg-background">
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            The <span className="text-gradient">Blinq Advantage</span> for Fleets
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Not just an EV  a fleet partner engineered for profitability.
          </p>
          
          <div className="inline-flex items-center px-6 py-3  border border-primary/30 bg-primary/10 backdrop-blur-md text-foreground rounded-full  font-semibold text-lg ">
            🚀 Why Leading Fleets Choose Blinq
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="group relative bg-card-gradient p-6 rounded-2xl border border-border/20 hover:border-primary/30 transition-all duration-500 hover:shadow-accent-glow hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-background/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <advantage.icon className={`w-6 h-6 ${advantage.color}`} />
                </div>
                <div className={`text-2xl font-bold ${advantage.color}`}>
                  {advantage.highlight}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-gradient transition-colors duration-300">
                {advantage.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {advantage.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-electric opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
              
              {/* Corner Accent */}
              <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-electric opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="group bg-card-gradient p-8 rounded-2xl border border-border/20 hover:border-primary/30 transition-all duration-500 hover:shadow-accent-glow">
            <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 backdrop-blur-md rounded-2xl border border-primary/30 flex items-center justify-center group-hover:bg-primary/15 group-hover:border-primary/40 transition-all duration-300">
              <DollarSign className="w-8 h-8 text-primary group-hover:animate-glow-pulse" />
            </div>
            <div className="text-lg text-muted-foreground mb-2">Massive OPEX Savings</div>
            <div className="text-lg font-semibold text-foreground">Faster payback with lower running costs</div>
          </div>
          <div className="group bg-card-gradient p-8 rounded-2xl border border-border/20 hover:border-electric-blue/30 transition-all duration-500 hover:shadow-accent-glow">
            <div className="w-16 h-16 mx-auto mb-4 bg-electric-blue/10 backdrop-blur-md rounded-2xl border border-electric-blue/30 flex items-center justify-center group-hover:bg-electric-blue/15 group-hover:border-electric-blue/40 transition-all duration-300">
              <Clock className="w-8 h-8 text-electric-blue group-hover:animate-glow-pulse" />
            </div>
            <div className="text-lg text-muted-foreground mb-2">Maximum Utilization</div>
            <div className="text-lg font-semibold text-foreground">Higher uptime, more trips, more revenue</div>
          </div>
          <div className="group bg-card-gradient p-8 rounded-2xl border border-border/20 hover:border-electric-cyan/30 transition-all duration-500 hover:shadow-accent-glow">
            <div className="w-16 h-16 mx-auto mb-4 bg-electric-cyan/10 backdrop-blur-md rounded-2xl border border-electric-cyan/30 flex items-center justify-center group-hover:bg-electric-cyan/15 group-hover:border-electric-cyan/40 transition-all duration-300">
              <Users className="w-8 h-8 text-electric-cyan group-hover:animate-glow-pulse" />
            </div>
            <div className="text-lg text-muted-foreground mb-2">Trusted by Passengers</div>
            <div className="text-lg font-semibold text-foreground">Safe, comfortable rides for urban commute</div>
          </div>
        </div>
      </div>
    </section>
   
    </>
  );
};
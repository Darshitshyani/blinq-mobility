import { Clock, DollarSign, Battery, Frown } from 'lucide-react';

const problems = [
  {
    icon: Clock,
    problem: "Downtime",
    description: "Hours wasted on charging",
    solution: " with 5-minute swaps",
    color: "text-danger"
  },
  {
    icon: DollarSign,
    problem: "High Asset Costs",
    description: "Expensive per km running with 40% of an EV’s cost is the battery",
    solution: " through B-A-A-S model.",
    color: "text-warning"
  },
  {
    icon: Frown,
    problem: "Driver Anxiety",
    description: "Battery life & range worries",
    solution: " with guaranteed battery health + instant 250 km range",
    color: "text-electric-purple"
  }
];

export const ProblemsSection = () => {
  return (
    <section className="py-20 px-4 bg-card">
            <div className="absolute bottom-0 left-0 w-full h-[40px] bg-gradient-to-t from-card to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            The <span className="text-gradient">3 Big Problems</span> We Solve
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fleet operators face critical challenges that drain profits. Blinq eliminates them all.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((item, index) => (
            <div
              key={index}
              className="relative group bg-card-gradient p-8 rounded-2xl border border-border/20 hover:border-primary/30 transition-all duration-500 hover:shadow-electric"
            >
              {/* Problem Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-background/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className={`w-8 h-8 ${item.color}`} />
              </div>

              {/* Problem Statement */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">{item.problem}</h3>
                <p className="text-muted-foreground mb-4">{item.description}</p>
                <div className="w-full h-2 bg-danger/20 rounded-full">
                  <div className="h-full bg-success rounded-full animate-glow-pulse" style={{ width: '100%' }} />
                </div>
              </div>

              {/* Arrow Transformation */}
              {/* <div className="flex items-center justify-center mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-1 bg-danger rounded-full" />
                  <div className="w-0 h-0 border-l-8 border-l-danger border-t-4 border-t-transparent border-b-4 border-b-transparent" />
                  <div className="w-8 h-1 bg-success rounded-full animate-glow-pulse" />
                </div>
              </div> */}

              {/* Solution */}
              <div className="text-center">
                <div className="inline-flex items-center px-4 py-2 bg-success/20 rounded-full border border-success/30 mb-2">
                  <span className="text-sm font-semibold text-success">SOLVED</span>
                </div>
                <p className="text-sm text-muted-foreground">{item.solution}</p>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-electric opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
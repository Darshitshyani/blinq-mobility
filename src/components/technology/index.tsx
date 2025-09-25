
import Tech from "./components/Tech";

const TechPage = () => {
  return (
    <div className="min-h-screen">
       <div className="video-container relative bg-card  h-[50vh] md:h-full overflow-hidden shadow-2xl">
      <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />
<div className="absolute bottom-0 left-0 w-full h-[40px] bg-gradient-to-t from-background to-transparent pointer-events-none" />
        <video
  className="w-full h-full object-cover"
  src="Battery.mp4"
  autoPlay
  loop
  muted
  playsInline
  preload="metadata"
/>
</div>
      {/* <div className="flex min-h-screen items-center justify-center pt-20 ">
        <div className="text-center space-y-8 container mx-auto px-6">
          <div className="space-y-4">
            <h1 className="text-6xl lg:text-8xl font-black">
              <span className="text-gradient">BLINQ</span> MOBILITY
            </h1>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              The Future of Urban Mobility
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Revolutionary electric vehicles with instant battery swapping. 
              Zero downtime, maximum efficiency.
            </p>
          </div>

        
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Card className="p-6 bg-card-gradient border-electric-blue/20 shadow-electric">
              <div className="text-2xl font-black text-electric-blue mb-2">5 min</div>
              <div className="text-sm text-muted-foreground">Battery Swap</div>
            </Card>
            <Card className="p-6 bg-card-gradient border-electric-cyan/20">
              <div className="text-2xl font-black text-electric-cyan mb-2">250 km</div>
              <div className="text-sm text-muted-foreground">Range</div>
            </Card>
            <Card className="p-6 bg-card-gradient border-electric-green/20">
              <div className="text-2xl font-black text-electric-green mb-2">₹4/km</div>
              <div className="text-sm text-muted-foreground">Operating Cost</div>
            </Card>
            <Card className="p-6 bg-card-gradient border-primary/20">
              <div className="text-2xl font-black text-primary mb-2">0-50</div>
              <div className="text-sm text-muted-foreground">in 8 seconds</div>
            </Card>
          </div>
        </div>
      </div> */}

      {/* Floating animation elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-electric-blue/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-electric-cyan/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1.5s'}} />
        <div className="absolute top-3/4 left-3/4 w-32 h-32 bg-electric-green/20 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}} />
      </div>
      <Tech />
    </div>
  );
};

export default TechPage;
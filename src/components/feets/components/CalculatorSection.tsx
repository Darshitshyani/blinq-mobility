import { useState } from 'react';
import { Button } from '@/components/shared/Button';
import { Input } from '@/components/shared/input';
import { Label } from '@/components/shared/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/shared/Card';
import { Calculator, TrendingUp, Leaf } from 'lucide-react';

export const CalculatorSection = () => {
  const [fleetSize, setFleetSize] = useState(1);
  const [dailyKm, setDailyKm] = useState(200);
  const [fuelPrice, setFuelPrice] = useState(100);

  // Calculation formulas
  const blinqCostPerKm = 1.5;
  const iceCostPerKm = 10;
  const co2SavedPerKm = 0.15; // tonnes

  const totalKmPerYear = fleetSize * dailyKm * 365;
  const annualSavings = (iceCostPerKm - blinqCostPerKm) * totalKmPerYear;
  const co2Saved = co2SavedPerKm * totalKmPerYear;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section className="py-20 px-4 bg-card">
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-6 py-3  rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md text-foreground font-semibold mb-6 shadow-lg hover:bg-primary/15 hover:border-primary/40 transition-all duration-300">
            <Calculator className="w-5 h-5" />
            <span>Savings & Impact Calculator</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            See Your <span className="text-gradient">Real Savings</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Calculate exactly how much your fleet will save with Blinq Pods
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Calculator Inputs */}
          <Card className="bg-card/10 backdrop-blur-md border border-primary/20 shadow-xl hover:bg-card/15 hover:border-primary/30 hover:shadow-electric transition-all duration-500">
            <CardHeader>
              <CardTitle className="text-2xl text-gradient">Fleet Calculator</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="fleet-size" className="text-foreground font-medium">
                  Fleet Size (Number of vehicles)
                </Label>
                <Input
                  id="fleet-size"
                  type="number"
                  value={fleetSize}
                  onChange={(e) => setFleetSize(Number(e.target.value))}
                  className="text-lg bg-background/20 backdrop-blur-sm border-primary/30 hover:border-primary/50 focus:border-primary focus:bg-background/30 transition-all duration-300"
                  min="1"
                  max="1000"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="daily-km" className="text-foreground font-medium">
                  Daily KM per vehicle
                </Label>
                <Input
                  id="daily-km"
                  type="number"
                  value={dailyKm}
                  onChange={(e) => setDailyKm(Number(e.target.value))}
                  className="text-lg bg-background/20 backdrop-blur-sm border-primary/30 hover:border-primary/50 focus:border-primary focus:bg-background/30 transition-all duration-300"
                  min="50"
                  max="500"
                />
              </div>

              {/* <div className="space-y-2">
                <Label htmlFor="fuel-price" className="text-foreground font-medium">
                  Current Fuel Price (₹/L)
                </Label>
                <Input
                  id="fuel-price"
                  type="number"
                  value={fuelPrice}
                  onChange={(e) => setFuelPrice(Number(e.target.value))}
                  className="text-lg bg-background/20 backdrop-blur-sm border-primary/30 hover:border-primary/50 focus:border-primary focus:bg-background/30 transition-all duration-300"
                  min="50"
                  max="200"
                />
              </div> */}

              {/* Cost Comparison */}
              <div className=" gap-4 pt-4 w-full">
                {/* <div className="text-center p-4 bg-danger/5 backdrop-blur-sm rounded-xl border border-danger/20 hover:bg-danger/10 hover:border-danger/30 transition-all duration-300">
                  <div className="text-2xl font-bold text-danger">₹{iceCostPerKm}</div>
                  <div className="text-sm text-muted-foreground">ICE Cost/km</div>
                </div> */}
                <div className="text-center p-4 bg-success/5 backdrop-blur-sm rounded-xl border border-success/20 hover:bg-success/10 hover:border-success/30 w-full transition-all duration-300">
                  <div className="text-2xl font-bold text-success">1.5₹</div>
                  <div className="text-sm text-muted-foreground">Blinq Cost/km</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          <div className="space-y-6">
            {/* Annual Savings */}
            <Card className="bg-primary/10 backdrop-blur-lg text-foreground border-0  ">
              <CardContent className="p-8 text-center bg-primary/5 backdrop-blur-md border border-primary/20 rounded-2xl shadow-lg hover:bg-primary/10 hover:border-primary/30 transition-all duration-300">
                <TrendingUp className="w-12 h-12 mx-auto mb-4 animate-float" />
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {formatCurrency(annualSavings)}
                </div>
                <div className="text-lg opacity-90 mb-4">Annual Savings</div>
                <div className="text-sm opacity-75">
                  That's {formatCurrency(annualSavings / 12)} saved every month!
                </div>
              </CardContent>
            </Card>

            {/* Environmental Impact */}
            <Card className="bg-success/5 backdrop-blur-sm border-border/20">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-success/20 rounded-2xl flex items-center justify-center">
                    <Leaf className="w-8 h-8 text-success animate-glow-pulse" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-success">
                      {co2Saved.toFixed(0)} tonnes
                    </div>
                    <div className="text-muted-foreground">CO₂ eliminated annually</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Fleet Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-card-gradient border-border/20">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-primary">{totalKmPerYear.toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground">Total KM/Year</div>
                </CardContent>
              </Card>
              <Card className="bg-card-gradient border-border/20">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-accent">{(fleetSize * 16).toFixed(0)}h</div>
                  <div className="text-sm text-muted-foreground">Daily Uptime</div>
                </CardContent>
              </Card>
            </div>

            {/* <Button className="w-full bg-gradient-electric text-primary-foreground hover:shadow-electric transition-all duration-300 py-6 text-lg font-semibold">
              Get Detailed Fleet Analysis
            </Button> */}
          </div>
        </div>

        {/* Bottom Tagline */}
        <div className="text-center mt-16 p-8 bg-gradient-hero rounded-2xl border border-border/20">
          <p className="text-xl text-muted-foreground mb-4">
            "A 100-car fleet saves over ₹2 crore annually and eliminates 1,200 tonnes of CO₂ with Blinq."
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-success rounded-full animate-glow-pulse" />
              <span>Blinq: ₹4/km</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-danger rounded-full" />
              <span>ICE: ₹10/km</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-electric-green rounded-full animate-glow-pulse" />
              <span>0.15 tonnes CO₂ saved per km</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
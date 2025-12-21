import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingDown, Building2, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 hero-gradient opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl animate-pulse-slow" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="gradient-text">OpsMan AI</span>
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl text-foreground/90 leading-relaxed">
                Экономьте до <span className="text-primary font-semibold">30%</span> от затрат на облачную и on-premise инфраструктуру с помощью FinOps-платформы на базе ИИ
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 opacity-0 animate-fade-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border text-sm font-medium">
                <Building2 className="w-4 h-4 text-primary" />
                МСБ и крупный бизнес
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border text-sm font-medium">
                <Users className="w-4 h-4 text-primary" />
                Государство
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border text-sm font-medium">
                <TrendingDown className="w-4 h-4 text-primary" />
                Ощутимая экономия
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              <Button variant="hero" size="xl" className="group">
                Подключить
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="heroOutline" size="xl">
                Узнать больше
              </Button>
            </div>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div className="relative opacity-0 animate-fade-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-primary/20 rounded-2xl blur-2xl animate-pulse-slow" />
              
              {/* Dashboard Card */}
              <div className="relative glass-card p-6 rounded-2xl shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-destructive/70" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <div className="w-3 h-3 rounded-full bg-primary/70" />
                  </div>
                  <span className="text-xs text-muted-foreground font-medium">OpsMan Dashboard</span>
                </div>
                
                {/* Mock Dashboard Content */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Экономия за месяц</span>
                    <span className="text-2xl font-bold text-primary">₽847,200</span>
                  </div>
                  
                  {/* Progress Bars */}
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-muted-foreground">Cloud Infrastructure</span>
                        <span className="text-primary">-28%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full w-[72%] bg-gradient-to-r from-primary to-primary/60 rounded-full" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-muted-foreground">On-Premise</span>
                        <span className="text-primary">-24%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full w-[76%] bg-gradient-to-r from-primary to-primary/60 rounded-full" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-muted-foreground">Kubernetes</span>
                        <span className="text-primary">-31%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full w-[69%] bg-gradient-to-r from-primary to-primary/60 rounded-full" />
                      </div>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-3 pt-4">
                    <div className="text-center p-3 rounded-lg bg-muted/50">
                      <div className="text-lg font-bold text-foreground">24</div>
                      <div className="text-xs text-muted-foreground">Сервисов</div>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-muted/50">
                      <div className="text-lg font-bold text-foreground">156</div>
                      <div className="text-xs text-muted-foreground">Ресурсов</div>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-muted/50">
                      <div className="text-lg font-bold text-foreground">99.9%</div>
                      <div className="text-xs text-muted-foreground">Uptime</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

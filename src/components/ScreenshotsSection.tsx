import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Monitor, BarChart3, Settings, Users, Wallet, TrendingUp } from "lucide-react";

const screenshots = [
  {
    id: 1,
    title: "Главный дашборд",
    description: "Обзор всех расходов в реальном времени",
    icon: Monitor,
    gradient: "from-primary/20 to-primary/5",
  },
  {
    id: 2,
    title: "Аналитика затрат",
    description: "Детальная разбивка по сервисам и командам",
    icon: BarChart3,
    gradient: "from-accent/20 to-accent/5",
  },
  {
    id: 3,
    title: "Управление ресурсами",
    description: "Мониторинг и оптимизация инфраструктуры",
    icon: Settings,
    gradient: "from-primary/20 to-accent/10",
  },
  {
    id: 4,
    title: "Распределение по командам",
    description: "Прозрачность расходов для каждого отдела",
    icon: Users,
    gradient: "from-accent/20 to-primary/10",
  },
  {
    id: 5,
    title: "Бюджетирование",
    description: "Планирование и контроль лимитов",
    icon: Wallet,
    gradient: "from-primary/30 to-accent/5",
  },
  {
    id: 6,
    title: "Прогнозирование",
    description: "AI-предсказания будущих расходов",
    icon: TrendingUp,
    gradient: "from-accent/30 to-primary/5",
  },
];

const ScreenshotsSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Интерфейс
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Панель управления <span className="gradient-text">OpsMan AI</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Интуитивный интерфейс для полного контроля над инфраструктурными расходами
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {screenshots.map((screenshot) => (
              <CarouselItem key={screenshot.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="glass-card p-6 h-full group cursor-pointer">
                  {/* Screenshot placeholder */}
                  <div className={`aspect-video rounded-lg bg-gradient-to-br ${screenshot.gradient} border border-border/50 mb-4 flex items-center justify-center overflow-hidden relative group-hover:border-primary/50 transition-all duration-300`}>
                    {/* Mock dashboard UI */}
                    <div className="absolute inset-3 rounded bg-card/80 backdrop-blur-sm p-3 flex flex-col">
                      {/* Header bar */}
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 rounded-full bg-red-400" />
                          <div className="w-2 h-2 rounded-full bg-yellow-400" />
                          <div className="w-2 h-2 rounded-full bg-green-400" />
                        </div>
                        <div className="flex-1 h-2 bg-muted rounded" />
                      </div>
                      
                      {/* Content grid */}
                      <div className="flex-1 grid grid-cols-3 gap-2">
                        <div className="col-span-2 bg-muted/50 rounded p-2">
                          <div className="h-1.5 w-1/2 bg-primary/40 rounded mb-2" />
                          <div className="grid grid-cols-4 gap-1 h-8">
                            {[...Array(4)].map((_, i) => (
                              <div 
                                key={i} 
                                className="bg-primary/30 rounded-sm" 
                                style={{ height: `${30 + Math.random() * 70}%`, alignSelf: 'end' }} 
                              />
                            ))}
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="bg-muted/50 rounded p-1.5 h-1/2">
                            <div className="h-1 w-3/4 bg-accent/40 rounded mb-1" />
                            <div className="h-1 w-1/2 bg-muted rounded" />
                          </div>
                          <div className="bg-muted/50 rounded p-1.5 h-1/2">
                            <div className="h-1 w-2/3 bg-primary/40 rounded mb-1" />
                            <div className="h-1 w-1/3 bg-muted rounded" />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Icon overlay */}
                    <screenshot.icon className="w-12 h-12 text-primary/20 absolute bottom-2 right-2 group-hover:text-primary/40 transition-colors" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {screenshot.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {screenshot.description}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 border-border bg-card hover:bg-primary hover:text-primary-foreground" />
          <CarouselNext className="hidden md:flex -right-12 border-border bg-card hover:bg-primary hover:text-primary-foreground" />
        </Carousel>

        {/* Mobile swipe hint */}
        <p className="text-center text-muted-foreground text-sm mt-6 md:hidden">
          ← Свайпните для просмотра →
        </p>
      </div>
    </section>
  );
};

export default ScreenshotsSection;

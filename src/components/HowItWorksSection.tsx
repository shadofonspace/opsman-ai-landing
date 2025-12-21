import { BarChart3, Zap, LineChart, Cpu, Network, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "Алгоритмы для экономии",
    description: "Учитывая поведение, нагрузку, время и тип workload",
  },
  {
    icon: Network,
    title: "Динамическое управление",
    description: "Выявляет аномалии, прогнозирует расходы и дает четкие рекомендации",
  },
  {
    icon: TrendingUp,
    title: "Рекомендации по стратегии",
    description: "Система определит наилучшую стратегию масштабирования для каждой нагрузки",
  },
];

const capabilities = [
  {
    icon: BarChart3,
    title: "Дашборды",
    description: "Графики с текущим потреблением ресурсов, чтобы вы точно знали все статьи расходов",
  },
  {
    icon: Zap,
    title: "Интеграции",
    description: "Поддержка Kubernetes, Proxmox, VMware, OpenStack и систем мониторинга",
  },
  {
    icon: LineChart,
    title: "Предиктивная аналитика",
    description: "Показывает, сколько вы потратите завтра, послезавтра и через месяц",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 relative bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Как <span className="gradient-text">OpsMan AI</span> поможет вам
          </h2>
          <p className="text-xl text-muted-foreground">
            Хаотичные облака → OpsMan AI → Упорядоченные облака = экономия до 30% ваших денег
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="text-center group"
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border border-primary/20">
                <feature.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Capabilities */}
        <div className="grid md:grid-cols-3 gap-6">
          {capabilities.map((cap, index) => (
            <div
              key={cap.title}
              className="glass-card p-6 hover:border-primary/50 transition-all duration-300"
            >
              <cap.icon className="w-8 h-8 text-primary mb-4" />
              <h4 className="text-lg font-semibold mb-2 text-foreground">{cap.title}</h4>
              <p className="text-muted-foreground text-sm">{cap.description}</p>
            </div>
          ))}
        </div>

        {/* Automation Badge */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/30">
            <span className="text-3xl font-bold text-primary">100%</span>
            <span className="text-muted-foreground">автоматизации рутинного сбора и хранения данных о затратах</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

import { DollarSign, Settings, Briefcase } from "lucide-react";

const personas = [
  {
    icon: DollarSign,
    title: "Финансы / CFO",
    features: [
      "Полная видимость расходов по всей инфраструктуре в любой валюте",
      "Точный прогноз расходов на 90 дней",
      "Готовые CFO-отчёты и chargeback по проектам и командам",
      "Контроль бюджета без конфликтов с IT",
    ],
  },
  {
    icon: Settings,
    title: "DevOps / Cloud инженеры",
    features: [
      "Автоматическая настройка в реальном времени",
      "Без ручных поисков экономии",
      "Готовая отчетность для фин-отдела",
    ],
  },
  {
    icon: Briefcase,
    title: "Продакты / Проджекты",
    features: [
      "Прозрачные затраты на каждый продукт и фичу в реальном времени",
      "Понимание, сколько реально стоит поддержка проекта",
      "Готовые данные для планирования бюджетов спринтов и релизов",
      "Без сюрпризов перед отчетами",
    ],
  },
];

const DashboardSection = () => {
  return (
    <section className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Один дашборд для <span className="gradient-text">всей компании</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Делаем затраты прозрачными.
          </p>
        </div>

        {/* Personas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {personas.map((persona, index) => (
            <div
              key={persona.title}
              className="group glass-card p-6 lg:p-8 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <persona.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {persona.title}
              </h3>

              {/* Features */}
              <ul className="space-y-3">
                {persona.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-start gap-3 text-muted-foreground text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;

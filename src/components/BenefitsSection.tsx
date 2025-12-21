import { Eye, Scale, Target } from "lucide-react";

const benefits = [
  {
    icon: Eye,
    title: "Разглядите иллюзию эффективности",
    description:
      "OpsMan AI помогает вам не ограничиваться поверхностными показателями, а выявлять скрытые недостатки рабочих нагрузок. Это больше, чем просто поиск простаивающего сервера",
  },
  {
    icon: Scale,
    title: "Наладьте баланс между пользой и стоимостью",
    description:
      "Соотносите вложенные деньги со своими целями и планами на будущее. Благодаря телеметрии полного стека и экспертизе, мы поможем устранить потери в проектировании, затем оптимизировать масштаб и вернуть деньги без угрозы эффективности",
  },
  {
    icon: Target,
    title: "Получите действенный план и позвольте ему работать на вас",
    description:
      "OpsMan AI выявит первопричины неэффективности ваших затрат, даст рекомендации по оптимизации, который вы можете применить согласно стратегии",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="relative group"
            >
              {/* Number Badge */}
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-bold text-xl group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                {index + 1}
              </div>

              <div className="glass-card p-8 pt-12 h-full hover:border-primary/50 transition-all duration-300">
                <benefit.icon className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

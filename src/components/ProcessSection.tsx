import { Link2, BarChart2, Lightbulb, Rocket } from "lucide-react";

const steps = [
  {
    icon: Link2,
    title: "Подключается к вашим сервисам",
    step: 1,
  },
  {
    icon: BarChart2,
    title: "Анализирует телеметрию",
    step: 2,
  },
  {
    icon: Lightbulb,
    title: "Дает рекомендации по оптимизации",
    step: 3,
  },
  {
    icon: Rocket,
    title: "PROFIT!",
    step: 4,
    highlight: true,
  },
];

const ProcessSection = () => {
  return (
    <section className="py-24 lg:py-32 relative bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Как работает <span className="gradient-text">OpsMan AI</span>
          </h2>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative text-center group"
              >
                {/* Arrow (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-primary/50 z-10">
                    →
                  </div>
                )}

                {/* Step Card */}
                <div
                  className={`relative ${
                    step.highlight
                      ? "glass-card border-primary/50 glow-effect"
                      : "glass-card"
                  } p-8 transition-all duration-300 hover:-translate-y-2`}
                >
                  {/* Step Number */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-2xl ${
                      step.highlight
                        ? "bg-primary"
                        : "bg-primary/10"
                    } flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <step.icon
                      className={`w-8 h-8 ${
                        step.highlight ? "text-primary-foreground" : "text-primary"
                      }`}
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-lg font-semibold ${
                      step.highlight ? "gradient-text text-xl" : "text-foreground"
                    }`}
                  >
                    {step.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

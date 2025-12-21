import { Button } from "@/components/ui/button";
import { ArrowRight, Gift } from "lucide-react";

const CTASection = () => {
  return (
    <section id="access" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-card to-card border border-primary/30">
          {/* Glow Effects */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

          <div className="relative z-10 text-center px-6 py-16 lg:py-24">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8">
              <Gift className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Бесплатный тест на ваших данных</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 max-w-3xl mx-auto">
              Начните экономить <span className="gradient-text">уже сегодня</span>
            </h2>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Проведем бесплатный тест на ваших данных и дадим скидку на подключение
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" className="group">
                Получить ранний доступ
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="heroOutline" size="xl">
                Попробовать демо
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-8">
              Присоединяйтесь к списку ожидания — мы свяжемся с вами, чтобы выдать доступ
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

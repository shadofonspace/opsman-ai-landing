import { Cloud, Server, Container, Database, Monitor, Box } from "lucide-react";

const integrations = [
  { name: "Yandex Cloud", icon: Cloud },
  { name: "Kubernetes", icon: Container },
  { name: "Proxmox", icon: Server },
  { name: "VMware", icon: Box },
  { name: "OpenStack", icon: Database },
  { name: "Мониторинг", icon: Monitor },
];

const IntegrationsSection = () => {
  return (
    <section id="integrations" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Наши <span className="gradient-text">интеграции</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            OpsMan AI взаимодействует с ведущими поставщиками облачных услуг и сервисов
          </p>
        </div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {integrations.map((integration, index) => (
            <div
              key={integration.name}
              className="glass-card p-6 text-center hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 transition-colors duration-300">
                <integration.icon className="w-7 h-7 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </div>
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                {integration.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;

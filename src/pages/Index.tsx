import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DashboardSection from "@/components/DashboardSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import BenefitsSection from "@/components/BenefitsSection";
import ProcessSection from "@/components/ProcessSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>OpsMan AI — FinOps-платформа на базе ИИ | Экономия до 30%</title>
        <meta
          name="description"
          content="Экономьте до 30% от затрат на облачную и on-premise инфраструктуру с помощью FinOps-платформы OpsMan AI. Автоматизация, аналитика и оптимизация расходов."
        />
        <meta
          name="keywords"
          content="FinOps, облачные затраты, оптимизация инфраструктуры, Kubernetes, DevOps, cloud cost optimization, AI"
        />
        <link rel="canonical" href="https://opsman.ai" />
        <meta property="og:title" content="OpsMan AI — FinOps-платформа на базе ИИ" />
        <meta
          property="og:description"
          content="Экономьте до 30% от затрат на облачную инфраструктуру с помощью ИИ"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <main className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <DashboardSection />
        <HowItWorksSection />
        <BenefitsSection />
        <ProcessSection />
        <IntegrationsSection />
        <CTASection />
        <Footer />
      </main>
    </>
  );
};

export default Index;

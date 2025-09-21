import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InvestmentDashboard from "@/components/InvestmentDashboard";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <InvestmentDashboard />
      <Footer />
    </div>
  );
};

export default Index;
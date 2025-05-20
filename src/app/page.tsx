import BuySellSteps from "@/components/BuySellSteps";
import FAQSection from "@/components/FAQSection";
import Heroarea from "@/components/Heroarea";
import MarketOverview from "@/components/MarketOverview";
import NewsletterSection from "@/components/NewsletterSection";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="flex flex-col ">
      <Heroarea />
      <Services />
      <BuySellSteps />
      <MarketOverview />
      <FAQSection />
      <NewsletterSection />
    </div>
  );
}

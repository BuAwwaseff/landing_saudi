import Hero from "@/app/components/partnership/Hero";
import Offers from "@/app/components/partnership/Offers";
import Products from "@/app/components/partnership/Products";
import Models from "@/app/components/partnership/Models";
import Tools from "@/app/components/partnership/Tools";
import FinalCTA from "@/app/components/partnership/FinalCTA";

export default function PartnershipPage() {
  return (
    <main className="partnership-main">
      <Hero />
      <Products />
      <Offers />
      <Models />
      <Tools />
      <FinalCTA />
    </main>
  );
}

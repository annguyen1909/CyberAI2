import { Banner } from "@/components/Banner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LogoTicker } from "@/components/LogoTicker";
import { Features } from "@/components/Features";
import { ProductShowcase } from "@/components/ProductShowcase";
import { FAQs } from "@/components/FAQs";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import CodeScan from "@/components/CodeScan";

export default function Home() {
  return (
    <>
      <Banner />
      <Hero />
      {/* <LogoTicker /> */}
      <Features />
      <ProductShowcase />
      <FAQs />
      <CallToAction />
    </>
  );
}

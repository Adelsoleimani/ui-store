import BlogSection from "@/components/sections/blogSection/BlogSection";
import HeroSection from "@/components/sections/heroSection/HeroSection ";
import OfferSection from "@/components/sections/offerSection/OfferSection";
import ProductSections from "@/components/sections/productSections/ProductSections";

export default function Home() {
  return (
    <>
      {/* The beginning of the page */}
      <HeroSection />

      {/*Special offers section  */}
      <OfferSection />

      {/* New products section */}
      <ProductSections />
      {/* The previous part of the footer */}
      <BlogSection />
    </>
  );
}

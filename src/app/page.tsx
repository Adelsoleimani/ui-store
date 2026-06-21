import BlogSection from "@/components/blogSection/BlogSection";
import HeroSection from "@/components/heroSection/HeroSection ";
import OfferSection from "@/components/offerSection/OfferSection";
import ProductSections from "@/components/productSections/ProductSections";

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

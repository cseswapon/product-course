import HeroSection from "@/components/home/herosection/HeroSection";

export default function Home() {
  console.log(process.env.NEXT_PUBLIC_API_BASE_URL);
  return (
    <>
      <main>
        <HeroSection />
      </main>
    </>
  );
}

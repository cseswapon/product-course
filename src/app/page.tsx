import CourseLayout from "@/components/home/courseDetails/CourseLayout";
import HeroSection from "@/components/home/herosection/HeroSection";
import StickyCourse from "@/components/home/StickyCourse/StickyCourse";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <div className="md:grid grid-cols-1 md:grid-cols-5 gap-4 container mx-auto lg:px-[5rem]">
          <div className="col-span-3  space-y-5 order-2 md:order-1 md:px-0 px-2">
            <CourseLayout />
          </div>
          <div className="col-span-2  order-1 md:order-2 relative">
            <StickyCourse />
          </div>
        </div>
      </main>
    </>
  );
}

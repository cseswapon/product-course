import CourseLayout from "@/components/home/courseDetails/CourseLayout";
import HeroSection from "@/components/home/herosection/HeroSection";
import StickyCourse from "@/components/home/StickyCourse/StickyCourse";
import { ApiService } from "@/service/product.service";

export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { lang } = await searchParams;
  const courseService = new ApiService();
  const course = await courseService.fetchData(
    `${
      process.env.NEXT_PUBLIC_API_BASE_URL
    }/api/v1/products/ielts-course?lang=${
      lang === "en" ? "en" : lang === "bn" ? "bn" : "bn"
    }`
  );
  // console.log(course, lang);
  return (
    <>
      <main>
        <HeroSection />
        <div className="md:grid grid-cols-1 md:grid-cols-5 gap-4 container mx-auto lg:px-[5rem]">
          <div className="col-span-3  space-y-5 order-2 md:order-1 md:px-0 px-2">
            <CourseLayout course={course} />
          </div>
          <div className="col-span-2  order-1 md:order-2 relative">
            <StickyCourse />
          </div>
        </div>
      </main>
    </>
  );
}

import Image from "next/image";

const GroupJoinEngagement = () => {
  return (
    <div
      id="group_join_engagement"
      className="mb-8 md:mb-12"
      style={{
        backgroundImage:
          "url('https://cdn.10minuteschool.com/images/Free_class_card_BG_1722414654287.png')",
        backgroundSize: "cover",
        borderRadius: 25,
      }}
    >
      <div className="flex gap-4 p-4 md:p-8 rounded-xl overflow-hidden">
        <div className="w-full md:w-1/2">
          <Image
            src="https://cdn.10minuteschool.com/images/catalog/product/pointer/467478234_1276985680016189_8175110495169425888_n_1732621150265.png"
            alt="Pointer"
            style={{ height: 40 }}
            className="mb-4"
            width={100}
            height={100}
          />
          <h2 className="text-xl font-semibold" style={{ color: "#ffffff" }}>
            IELTS Confirm 7+ Score (Guideline)
          </h2>
          <p className="mt-2 text-base" style={{ color: "#ededed" }}>
            IELTS ভালো score করার সেরা Strategies জানুন সেরাদের গাইডলাইনে ।
          </p>
          <button className="mt-6 bg-green-500 px-2 text-white rounded p-2 px-3.5">
            ফ্রি PDF Download করুন
          </button>
        </div>
        <div className="hidden md:flex items-center w-1/2">
          <Image
            src="https://cdn.10minuteschool.com/images/catalog/product/pointer/Thumbnail_for_IELTS_Course_by_MS_1732621023962.jpg"
            alt="IELTS Course Thumbnail"
            height={200}
            width={500}
          />
        </div>
      </div>
    </div>
  );
};

export default GroupJoinEngagement;

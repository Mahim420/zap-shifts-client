import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import customerTopImg from "../../../assets/customer-top.png";
import "swiper/css";
import { use } from "react";
import ReviewsCard from "./ReviewsCard";

const Reviews = ({ reviewsPromise }) => {
  const reviewsData = use(reviewsPromise);
  return (
    <div>
      <section className="flex flex-col items-center ">
        <img src={customerTopImg} alt="" />
        <h2 className="text-4xl mt-5 font-extrabold text-secondary">
          What our customers are sayings
        </h2>
        <p className="text-center text-[#606060] mt-6 w-3xl">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </section>

      <section className="mt-10">
        <Swiper
          effect={`coverflow`}
          loop={true}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 30,
            stretch: "50%",
            depth: 200,
            scale: 0.75,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          {reviewsData.map((data, i) => (
            <SwiperSlide key={i}>
              <ReviewsCard key={data.id} data={data}></ReviewsCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Reviews;

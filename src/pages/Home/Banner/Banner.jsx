import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImg1 from "../../../assets/banner/banner1.png";
import bannerImg2 from "../../../assets/banner/banner2.png";
import bannerImg3 from "../../../assets/banner/banner3.png";
import { FaArrowCircleLeft } from "react-icons/fa";
import Button from "../../../components/Button/Button";

const Banner = () => {
  const slides = [
    { id: 1, img: bannerImg1, text: "Track Your Parcel" },
    { id: 2, img: bannerImg2, text: "Track Your Parcel" },
    { id: 3, img: bannerImg3, text: "Track Your Parcel" },
  ];

  return (
    <Carousel infiniteLoop={true} autoPlay={true}>
      {slides.map((slide) => (
        <article key={slide.id}>
          <img src={slide.img} />

          <section className="absolute left-16 bottom-24">
            <div className="flex items-center gap-3">
              <Button
                className="btn-primary rounded-full"
                text={slide.text}
              ></Button>

              <FaArrowCircleLeft className="text-black rotate-135" size={40} />

              <Button text={"Be A Rider"}></Button>
            </div>
          </section>
        </article>
      ))}
    </Carousel>
  );
};

export default Banner;

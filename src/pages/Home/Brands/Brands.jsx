import Marquee from "react-fast-marquee";
import amazon from "../../../assets/brands/amazon.png";
import casio from "../../../assets/brands/casio.png";
import randstad from "../../../assets/brands/randstad.png";
import star from "../../../assets/brands/star.png";
import moonstar from "../../../assets/brands/moonstar.png";
import start_people from "../../../assets/brands/start_people.png";

const Brands = () => {
  const M = Marquee.default;

  return (
    <div>
      <M loop={0}>
        <div className="flex justify-evenly items-center">
          <img className="mx-14" src={amazon} alt="" />
          <img className="mx-14" src={casio} alt="" />
          <img className="mx-14" src={randstad} alt="" />
          <img className="mx-14" src={star} alt="" />
          <img className="mx-14" src={start_people} alt="" />
          <img className="mx-14" src={moonstar} alt="" />
        </div>
      </M>
    </div>
  );
};

export default Brands;

import merchantImg from "../../../assets/be-a-merchant-bg.png";
import locationMerchantImg from "../../../assets/location-merchant.png";
import Button from "../../../components/Button/Button";

const BankingSystem = () => {
  return (
    <div
      className="relative bg-cover flex items-center justify-between bg-secondary p-20 rounded-3xl bg-center overflow-hidden"
      style={{ backgroundImage: `url(${merchantImg})` }}
    >
      {/* 🔥 overlay layer (opacity control here) */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* content */}
      <div className="relative z-10">
        <h1 className="text-4xl font-extrabold leading-relaxed text-white">
          Merchant and Customer Satisfaction <br /> is Our First Priority
        </h1>

        <p className="my-3 leading-relaxed text-white">
          We offer the lowest delivery charge with the highest value along with{" "}
          <br />
          100% safety of your product. Pathao courier delivers your parcels in
          every <br /> corner of Bangladesh right on time.
        </p>

        {/* rounded-full ms-4 btn-outline border-[#CAEB66] text-[#CAEB66] hover:bg-[#CAEB66] hover:text-black */}

        <div className="mt-8">
          <Button
            className="rounded-full ms-4 btn-outline border-[#CAEB66] text-[#CAEB66] hover:bg-[#CAEB66] hover:text-black"
            text={"Became a Merchant"}
          ></Button>
          <Button
            className="rounded-full text-[#CAEB66]  ms-4 btn-outline border-[#CAEB66]  hover:bg-[#CAEB66] hover:text-black"
            text={"Became a Merchant"}
          ></Button>
        </div>
      </div>

      <div className="relative z-10">
        <img src={locationMerchantImg} alt="location merchant" />
      </div>
    </div>
  );
};

export default BankingSystem;

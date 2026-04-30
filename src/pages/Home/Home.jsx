import Footer from "../../SharedLayout/Footer";
import BankingSystem from "./BankingSystem/BankingSystem";
import Banner from "./Banner/Banner";
import Benefits from "./Benefits.jsx/Benefits";
import Brands from "./Brands/Brands";
import FAQSections from "./FAQ/FAQSections";
import Reviews from "./Reviews/Reviews";
import Services from "./Services/Services";
import WorkSystem from "./WorkSystem/WorkSystem";

const servicesDataPromise = fetch("./services.json").then((res) => res.json());
const reviewsPromise = fetch("./reviews.json").then((res) => res.json());

const Home = () => {
  const howItWorksData = [
    {
      id: 1,
      title: "Booking Pick & Drop",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      id: 2,
      title: "Cash On Delivery",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      id: 3,
      title: "Delivery Hub",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      id: 4,
      title: "Booking SME & Corporate",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
  ];

  return (
    <div className="mt-7">
      {/* Banner Section */}
      <section>
        <Banner></Banner>
      </section>

      {/* work system sections */}
      <section
        className="max-w-5xl mt-24 
       mx-auto bg-base-200 p-10"
      >
        <h4 className="text-2xl mb-6 font-semibold">How it's works</h4>
        <div className="flex gap-6">
          {howItWorksData.map((data) => (
            <WorkSystem key={data.id} data={data}></WorkSystem>
          ))}
        </div>
      </section>

      {/* Service sections */}
      <section>
        <div>
          <Services servicesDataPromise={servicesDataPromise}></Services>
        </div>
      </section>

      {/* Brands sections */}
      <section className="max-w-5xl mx-auto mt-20 text-tersiary">
        <h3 className="text-xl font-bold mb-10 text-center">
          We've helped thousands of sales teams
        </h3>
        <Brands></Brands>
      </section>

      {/* Benefits Sections */}
      <section className="mt-24">
        <Benefits></Benefits>
      </section>

      {/* Banking sections */}
      <section className="mt-24">
        <BankingSystem></BankingSystem>
      </section>

      {/* Reviews Sections */}
      <section className="mt-24">
        <Reviews reviewsPromise={reviewsPromise}></Reviews>
      </section>

      {/* FAQ sections */}
      <section className="flex justify-center  mt-24">
        <FAQSections></FAQSections>
      </section>

      {/* Footer sections */}
      <section className="mt-24">
        <Footer></Footer>
      </section>
    </div>
  );
};

export default Home;

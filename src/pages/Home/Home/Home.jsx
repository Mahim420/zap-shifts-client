import Services from "../../../components/Services/Services";
import WorkSystem from "../../../components/WorkSystem/WorkSystem";
import Banner from "../Banner/Banner";

const Home = () => {
  const howItWorksData = [
    {
      id: 1,
      title: "Booking Pick & Drop",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
      icon: "pickDrop", // later icon map korte parbi
    },
    {
      id: 2,
      title: "Cash On Delivery",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
      icon: "cod",
    },
    {
      id: 3,
      title: "Delivery Hub",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
      icon: "hub",
    },
    {
      id: 4,
      title: "Booking SME & Corporate",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
      icon: "corporate",
    },
  ];

  const servicesData = [
    {
      id: 1,
      title: "Express & Standard Delivery",
      description:
        "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    },
    {
      id: 2,
      title: "Nationwide Delivery",
      description:
        "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    },
    {
      id: 3,
      title: "Fulfillment Solution",
      description:
        "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    },
    {
      id: 4,
      title: "Cash on Home Delivery",
      description:
        "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    },
    {
      id: 5,
      title: "Corporate Service / Contract In Logistics",
      description:
        "Customized corporate services which includes warehouse and inventory management support.",
    },
    {
      id: 6,
      title: "Parcel Return",
      description:
        "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
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
      <section className="flex flex-col p-24 mt-24 rounded-3xl bg-secondary items-center">
        <div className="text-center text-white w-96">
          <h2 className="text-4xl font-bold">Ours Services</h2>
          <p className="mt-4">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
        </div>
        <div className="grid grid-cols-1 mt-8 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((data) => (
            <Services key={data.id} data={data}></Services>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

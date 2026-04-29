import { use } from "react";
import ServiceCard from "./ServiceCard";

const Services = ({ servicesDataPromise }) => {
  const servicesData = use(servicesDataPromise);
  console.log(servicesData);
  return (
    <section className="flex flex-col p-24 mt-24 rounded-3xl bg-secondary items-center">
      <div className="text-center text-white w-96">
        <h2 className="text-4xl font-bold">Ours Services</h2>
        <p className="mt-4">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>

      <div className="grid grid-cols-1 mt-8 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((data, i) => (
          <ServiceCard key={i} data={data}></ServiceCard>
        ))}
      </div>
    </section>
  );
};

export default Services;

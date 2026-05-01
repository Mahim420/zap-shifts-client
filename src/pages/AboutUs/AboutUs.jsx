import { useLoaderData } from "react-router";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const AboutUs = () => {
  const aboutUsData = useLoaderData();
  console.log(aboutUsData);

  return (
    <div className="bg-base-100 p-20 rounded-2xl mt-12">
      <section className="w-lg">
        <h2 className="text-3xl font-bold text-secondary">About Us</h2>
        <p className="mt-8">
          Ecom Fast enables parcel delivery with real-time tracking and zero
          hassle, from personal packages to business shipments — we deliver
          anytime, time.
        </p>
      </section>

      <section className="mt-10">
        <Tabs>
          <TabList>
            {aboutUsData.map((data) => (
              <Tab key={data.id}>{data.title}</Tab>
            ))}
          </TabList>

          {aboutUsData.map((data) => (
            <TabPanel key={data.id}>
              <p>{data.content}</p>
            </TabPanel>
          ))}
        </Tabs>
      </section>
    </div>
  );
};

export default AboutUs;

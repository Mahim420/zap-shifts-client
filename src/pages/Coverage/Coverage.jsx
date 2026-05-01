import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";
import { useRef } from "react";

const Coverage = () => {
  const position = [23.685, 90.3563];
  const serviceCenters = useLoaderData();
  const mapRef = useRef();

  const handleSearch = (event) => {
    event.preventDefault();
    const location = event.target.location.value;
    console.log(location);
    const district = serviceCenters.find((c) =>
      c.district.toLowerCase().includes(location.toLowerCase()),
    );

    if (district) {
      const coOrdinate = [district.latitude, district.longitude];
      console.log(coOrdinate);
      mapRef.current.flyTo(coOrdinate, 13);
    }
  };

  return (
    <div className="mt-10 bg-base-100 rounded-2xl p-20">
      <section>
        <h2 className="text-5xl font-extrabold">
          We are availabele in 64 districts
        </h2>

        <div className="my-10">
          <form
            onSubmit={handleSearch}
            className="flex items-center w-full max-w-xl bg-base-100 rounded-full shadow-md overflow-hidden"
          >
            {/* Input */}
            <input
              type="text"
              name="location"
              placeholder="Search here"
              className="flex-1 px-5 py-3 outline-none border-none bg-transparent"
            />

            {/* Button */}
            <button
              type="submit"
              className="bg-lime-400 hover:bg-lime-500 text-black font-semibold px-6 py-3 rounded-full m-1"
            >
              Search
            </button>
          </form>
        </div>
        <h3 className="font-bold text-lg mb-5">
          We deliver alomost all over the bangladesh
        </h3>
        <div className="w-full h-[600px]">
          <MapContainer
            className="h-[600px]"
            center={position}
            zoom={8}
            scrollWheelZoom={false}
            ref={mapRef}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {serviceCenters.map((center, i) => (
              <Marker key={i} position={[center.latitude, center.longitude]}>
                <Popup>
                  <strong>{center.district}</strong> <br />
                  Service area : {center.covered_area.join(", ")}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </section>
    </div>
  );
};

export default Coverage;

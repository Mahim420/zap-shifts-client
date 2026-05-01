import trackingImg from "../../../assets/live-tracking.png";
import safeDeliveryImg from "../../../assets/safe-delivery.png";

const Benefits = () => {
  return (
    <section>
      <div className="border border-dashed"></div>
      <div className="mt-20 mb-20">
        <div className="card p-14 mt-11 card-side bg-base-100 shadow-sm">
          <figure>
            <img className="w-56 h-56" src={trackingImg} alt="Movie" />
          </figure>
          <div className="divider divider-horizontal ms-12 h-52 my-auto"></div>
          <div className="card-body">
            <h2 className="card-title text-secondary">Live Parcel Tracking</h2>
            <p style={{ color: "#606060" }}>
              Stay updated in real-time with our live parcel tracking feature.
              From pick-up to delivery, monitor your shipment's journey and get
              instant status updates for complete peace of mind.
            </p>
          </div>
        </div>
        <div className="card p-14 mt-11 card-side bg-base-200 shadow-sm">
          <figure>
            <img className="w-56 h-56" src={safeDeliveryImg} alt="Movie" />
          </figure>
          <div className="divider divider-horizontal ms-12 h-52 my-auto"></div>
          <div className="card-body">
            <h2 className="card-title text-secondary">100% Safe Delivery</h2>
            <p style={{ color: "#606060" }}>
              We ensure your parcels are handled with the utmost care and
              delivered securely to their destination. Our reliable process
              guarantees safe and damage-free delivery every time.
            </p>
          </div>
        </div>
        <div className="card p-14 mt-11 card-side bg-base-200 shadow-sm">
          <figure>
            <img className="w-56 h-56" src={safeDeliveryImg} alt="Movie" />
          </figure>
          <div className="divider divider-horizontal ms-12 h-52 my-auto"></div>
          <div className="card-body">
            <h2 className="card-title text-secondary">
              24/7 Call Center Support
            </h2>
            <p style={{ color: "#606060" }}>
              Our dedicated support team is available around the clock to assist
              you with any questions, updates, or delivery concerns—anytime you
              need us.
            </p>
          </div>
        </div>
      </div>
      <div className="border border-dashed"></div>
    </section>
  );
};

export default Benefits;

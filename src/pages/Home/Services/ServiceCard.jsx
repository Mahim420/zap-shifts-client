import serviceImg from "../../../assets/service.png";
const ServiceCard = ({ data }) => {
  const { title, description } = data;
  return (
    <div className="card hover:bg-amber-300 bg-base-100 mt- shadow-sm">
      <figure className="px-10 pt-10">
        <img src={serviceImg} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-secondary">{title}</h2>
        <p className="text-stone-500">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;

import deliveryVan from "../../assets/delivery-van.png";

const WorkSystem = ({ data }) => {
  const { title, description } = data;
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <div className="card-body">
        <img className="w-12 h-12" src={deliveryVan} alt="" />
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default WorkSystem;

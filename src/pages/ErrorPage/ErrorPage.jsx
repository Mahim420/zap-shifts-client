import errorImg from "../../assets/error.png";
import { IoWarning } from "react-icons/io5";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <section className="flex flex-col justify-center items-center mt-10">
      <img src={errorImg} alt="" />
      <div className="flex gap-6 items-center">
        <IoWarning className="text-red-400" size={40} />
        <h5 className="text-4xl font-bold text-red-400">Page not Found</h5>
        <IoWarning className="text-red-400" size={40}></IoWarning>
      </div>

      <Link className="btn mt-7 btn-primary text-black" to="/">
        Back to home
      </Link>
    </section>
  );
};

export default ErrorPage;

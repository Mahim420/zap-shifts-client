import logo from "../../assets/logo.png";

const Logo = () => {
  return (
    <div className="flex items-end">
      <img src={logo} alt="" />
      <h4 className="-ms-3 text-2xl font-bold">zapShift</h4>
    </div>
  );
};

export default Logo;

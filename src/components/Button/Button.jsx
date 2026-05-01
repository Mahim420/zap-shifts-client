// components/MyButton.jsx
const Button = ({ text, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`btn btn-xs sm:btn-sm md:btn-md ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;

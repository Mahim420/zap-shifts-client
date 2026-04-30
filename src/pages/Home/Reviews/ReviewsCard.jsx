import reviewQuote from "../../../assets/reviewQuote.png";

const ReviewsCard = ({ data }) => {
  console.log(data);

  const { userName, review, user_photoURL } = data;
  return (
    <div className="card bg-base-100 shadow-xl p-6 max-w-md">
      <div className="flex flex-col space-y-4">
        {/* Quotation mark icon */}
        <div>
          <img src={reviewQuote} alt="" />
        </div>

        {/* Quote text */}
        <p className="text-gray-700 text-lg leading-relaxed">{review}</p>

        {/* Divider */}
        <div className="divider"></div>

        {/* Author section */}
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="w-16 rounded-full">
              <img src={user_photoURL} />
            </div>
          </div>
          <div className="text-left">
            <h3 className="font-semibold text-gray-900">{userName}</h3>
            <p className="text-sm text-gray-500">Senior Product Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCard;

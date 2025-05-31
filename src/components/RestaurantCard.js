const RestaurantCard = (props) => {
  const { resData } = props;
  const { imgSrc, name, cuisines, avgRating, costForTwo, deliveryTime } =
    resData?.data;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={imgSrc}
        alt="Restaurant Image not renderd"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>₹{costForTwo / 100} for two</h4>
      <h4>{deliveryTime} mins</h4>
    </div>
  );
};

export default RestaurantCard;
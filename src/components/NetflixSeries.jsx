const NetflixSeries = () => {
  const testing = "Testing";
  const document = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur possimus labore soluta odio hic laudantium in neque. Et dolores earum labore blanditiis, ratione soluta illo itaque quos at sint iure?";
  const rating = () => {
    return 3 + 3;
  };
  let age = 19;
  const btnText = () => {
    if (age >= 18) return "Watch Now";
    return "Not Available";
  };
  return (
    <>
      <div className="card">
        <div className="img-wrapper">
          <img src="img1.jpg" alt="" />
        </div>
        <div className="content">
          <h2>{testing}</h2>
          <p>{document}</p>
          <p>
            <strong>{rating()}</strong>
          </p>
          <button type="button" className="btn">
            {/* {age >= 18 ? "Watch Now" : "Not Available"} */}
            {btnText()}
          </button>
        </div>
      </div>
    </>
  );
};

export default NetflixSeries;

const App = () => {
  return (
    <div className="card-holder">
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
    </div>
  );
};

export default App;

export const NetflixSeries = () => {
  const testing = "Testing";
  const document = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur possimus labore soluta odio hic laudantium in neque. Et dolores earum labore blanditiis, ratione soluta illo itaque quos at sint iure?";
  const rating = () => {
    return 3 + 3;
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
        </div>
      </div>
    </>
  );
};

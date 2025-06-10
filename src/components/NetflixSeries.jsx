import seriesData from "../api/seriesData.json";

const NetflixSeries = () => {
  return (
    <>
      {seriesData.map((curItem) => {
        return (
          <div className="card">
            <div className="img-wrapper">
              <img src={curItem.img_url} alt="" />
            </div>
            <div className="content">
              <h2>{curItem.name}</h2>
              <p>{curItem.description}</p>
              <p>
                <strong>{curItem.rating}</strong>
              </p>
              <a href={curItem.watch_url} target="_blank" className="btn">
                Watch More
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default NetflixSeries;

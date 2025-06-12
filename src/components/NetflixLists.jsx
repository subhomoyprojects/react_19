export default function NetflixLists({ data: { fullName, img_url, description, rating, watch_url } }) {
  return (
    <div className="card">
      <div className="img-wrapper">
        <img src={img_url} alt="" />
      </div>
      <div className="content">
        <h2>{fullName}</h2>
        <p>{description}</p>
        <p>
          <strong>{rating}</strong>
        </p>
        <a href={watch_url} target="_blank" className="btn">
          Watch More
        </a>
      </div>
    </div>
  );
}

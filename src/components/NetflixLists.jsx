import { LinkButton } from "../styleComponent/styleComponent";

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
          <strong className={`default-rating ${rating >= 8.5 ? "good" : "average"}`}>{rating}</strong>
        </p>
        <LinkButton href={watch_url} target="_blank">
          Watch More
        </LinkButton>
      </div>
    </div>
  );
}

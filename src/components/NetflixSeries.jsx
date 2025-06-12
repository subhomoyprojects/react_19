import seriesData from "../api/seriesData.json";
import NetflixLists from "./NetflixLists";

const NetflixSeries = () => {
  return (
    <>
      {seriesData.map((curItem) => (
        <NetflixLists key={curItem.id} data={curItem} />
      ))}
    </>
  );
};

export default NetflixSeries;

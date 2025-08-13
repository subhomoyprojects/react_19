import Counter from "./components/hooks/Counter";
import NetflixSeries from "./components/NetflixSeries";
import PropsUsage from "./components/PropsUsage";

const App = () => {
  return (
    <>
      <div className="card-holder">
        <NetflixSeries />
      </div>
      <div className="props-passing-area">
        <PropsUsage />
      </div>
      <Counter />
    </>
  );
};

export default App;

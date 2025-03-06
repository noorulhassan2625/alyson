import CountUp from "react-countup";
import DarkButton from "./DarkButton";

const StatsBox = () => {
  return (
    <div className="stats-section">
      <h1 className="big-number">
        <CountUp start={0} end={5000000} duration={7} separator="," />
        +
      </h1>
      <h2>AI powered homeowner experiments</h2>
      <p>
        The AI Engine Behind 5 Million Homeowner Journeys –  
        Making decisions smarter, experiences smoother, and driving revenue.
      </p>
      <DarkButton buttonText="Get Started Today" />
    </div>
  );
};

export default StatsBox;

import CountUp from "react-countup";

const StatsBox = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
// const handleOpenModal = () => {
//   setIsModalOpen(true);
// };

// const handleCloseModal = () => {
//   setIsModalOpen(false);
// };

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
      {/* <DarkButton buttonText='Get a Demo' onClick={handleOpenModal} />
      <ContactUsModal isOpen={isModalOpen} onClose={handleCloseModal} /> */}
    </div>
  );
};

export default StatsBox;

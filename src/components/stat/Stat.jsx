const Stat = () => {
  return (
    <div className="text-center my-24">
      <div>
        <h3 className="text-5xl font-heading font-bold my-4">
          What We <span className="text-[#ff671b]">Achieved</span> Through the
          years
        </h3>
      </div>
      <div className="stats stats-vertical lg:stats-horizontal font-para">
        <div className="stat">
          <div className="stat-title">Net worth</div>
          <div className="stat-value text-[#ff671b]">$3.5 Billion</div>
          <div className="stat-desc">↗︎ increased 22%</div>
        </div>

        <div className="stat">
          <div className="stat-title">Handed Over Projects</div>
          <div className="stat-value text-[#ff671b]">4,200</div>
          <div className="stat-desc">12 Ongoing Projects</div>
        </div>

        <div className="stat">
          <div className="stat-title">New Contract Signed</div>
          <div className="stat-value text-[#ff671b]">1,200</div>
          <div className="stat-desc">↗︎ 14% more than last year</div>
        </div>
      </div>
    </div>
  );
};

export default Stat;

import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Stat = () => {
  const [counter, setCounter] = useState(false);
  return (
    <div
      className="w-11/12 lg:container mx-auto text-center my-24"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <div>
        <h3 className="text-4xl lg:text-5xl font-heading font-bold my-4">
          What We <span className="text-[#ff671b]">Achieved</span> Through the
          years
        </h3>
      </div>
      <div className="stats stats-vertical lg:stats-horizontal font-para">
        <div className="stat">
          <div className="stat-title">Net worth</div>
          <div className="stat-value text-[#ff671b] flex gap-1">
            $
            <ScrollTrigger
              onEnter={() => setCounter(true)}
              onExit={() => setCounter(false)}
            >
              <div className="stat-value text-[#ff671b]">
                {counter && (
                  <CountUp start={0} end={3500} duration={4} delay={0} />
                )}
              </div>
            </ScrollTrigger>{" "}
            million
          </div>
          <div className="stat-desc">↗︎ increased 22%</div>
        </div>

        <div className="stat">
          <div className="stat-title">Handed Over Projects</div>
          <div className="stat-value text-[#ff671b]">
            <ScrollTrigger
              onEnter={() => setCounter(true)}
              onExit={() => setCounter(false)}
            >
              <div className="stat-value text-[#ff671b]">
                {counter && (
                  <CountUp start={0} end={4200} duration={4} delay={0} />
                )}
                +
              </div>
            </ScrollTrigger>
          </div>
          <div className="stat-desc">12 Ongoing Projects</div>
        </div>

        <div className="stat">
          <div className="stat-title">New Contract Signed</div>
          <ScrollTrigger
            onEnter={() => setCounter(true)}
            onExit={() => setCounter(false)}
          >
            <div className="stat-value text-[#ff671b]">
              {counter && (
                <CountUp start={0} end={1200} duration={4} delay={0} />
              )}
              +
            </div>
          </ScrollTrigger>
          <div className="stat-desc">↗︎ 14% more than last year</div>
        </div>
      </div>
    </div>
  );
};

export default Stat;

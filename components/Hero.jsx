import { motion } from "framer-motion";
import { RiBriefcase4Fill, RiTeamFill, RiArrowDownSLine } from "react-icons/ri";

function Hero(props) {
  return (
    <section>
      <div className="container mx-auto">
        <div>
          <div>text</div>
          <div>image</div>
        </div>
        <div className="hidden md:flex">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
}

export default Hero;

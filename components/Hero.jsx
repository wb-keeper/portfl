import { motion } from "framer-motion";
import { RiBriefcase4Fill, RiTeamFill, RiArrowDownSLine } from "react-icons/ri";

function Hero(props) {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-cover bg-bottom dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div>
            <div>Web Developer</div>
            <h1>Hello, my name is Ryan Davis</h1>
            <p>
              Brief description with insights into myself, my vocational
              journey, and what I engage in professionally.
            </p>
          </div>
          <div>image</div>
        </div>
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
}

export default Hero;

import { motion } from "framer-motion";
import { RiBriefcase4Fill, RiTeamFill, RiArrowDownSLine } from "react-icons/ri";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Download, Send } from "lucide-react";
import Socials from "@/components/Socials";

function Hero(props) {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-cover bg-bottom dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Web Developer
            </div>
            <h1 className="h1 mb-4">Hello, my name is Ryan Davis</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              Brief description with insights into myself, my vocational
              journey, and what I engage in professionally.
            </p>
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact me <Send size={18} />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="secondary" className="gap-x-2">
                  Download CV <Download size={18} />
                </Button>
              </Link>
            </div>
            <Socials />
          </div>
          <div className="hidden xl:flex relative">image</div>
        </div>
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
}

export default Hero;

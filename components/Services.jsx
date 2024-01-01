import { Blocks, GanttChartSquare, Gem } from "lucide-react";

const serviceData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Web Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Web Development",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    lorem,
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "App Development",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
];
function Services(props) {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title">My Service</h2>
      </div>
    </section>
  );
}

export default Services;

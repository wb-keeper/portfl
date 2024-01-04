"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/assets/work/3.png",
    category: "react js",
    name: "Nexa Website",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit libero magni minus molestiae odio odit officiis provident ullam vel veniam!",
    link: "/",
    github: "/",
  },
  {
    image: "/assets/work/4.png",
    category: "next js",
    name: "Solstice Website",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit libero magni minus molestiae odio odit officiis provident ullam vel veniam!",
    link: "/",
    github: "/",
  },
  {
    image: "/assets/work/2.png",
    category: "next js",
    name: "Lumina Website",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit libero magni minus molestiae odio odit officiis provident ullam vel veniam!",
    link: "/",
    github: "/",
  },
  {
    image: "/assets/work/1.png",
    category: "react js",
    name: "Evolve Website",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit libero magni minus molestiae odio odit officiis provident ullam vel veniam!",
    link: "/",
    github: "/",
  },
  {
    image: "/assets/work/3.png",
    category: "react js",
    name: "Ignite Website",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit libero magni minus molestiae odio odit officiis provident ullam vel veniam!",
    link: "/",
    github: "/",
  },
  {
    image: "/assets/work/4.png",
    category: "fullstack",
    name: "Envision Website",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit libero magni minus molestiae odio odit officiis provident ullam vel veniam!",
    link: "/",
    github: "/",
  },
  {
    image: "/assets/work/1.png",
    category: "fullstack",
    name: "Serenity Website",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit libero magni minus molestiae odio odit officiis provident ullam vel veniam!",
    link: "/",
    github: "/",
  },
  {
    image: "/assets/work/3.png",
    category: "fullstack",
    name: "Nova Website",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit libero magni minus molestiae odio odit officiis provident ullam vel veniam!",
    link: "/",
    github: "/",
  },
  {
    image: "/assets/work/2.png",
    category: "fullstack",
    name: "Zenith Website",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit libero magni minus molestiae odio odit officiis provident ullam vel veniam!",
    link: "/",
    github: "/",
  },
];

const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

function Projects(props) {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");
  const filteredProjects = projectData.filter((project) => {
    return category === "all projects"
      ? project
      : project.category === category;
  });
  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My projects
        </h2>
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList
            className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none
          "
          >
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
}

export default Projects;

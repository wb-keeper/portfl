"use client";

import { useState } from "react";

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
  return <section className="min-h-screen">Projects</section>;
}

export default Projects;

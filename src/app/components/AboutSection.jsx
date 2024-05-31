"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_CONTENT = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>C++</li>
        <li>Python</li>
        <li>Java</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li>University of Calgary</li>
        <li>Bachelors of Software Engineering</li>
        <li>2018-2022</li>
      </ul>
    ),
  },
  {
    title: "Interests",
    id: "interests",
    content: (
      <ul className="list-disc pl-2">
        <li>Web Development</li>
        <li>Mobile Development</li>
        <li>Game Development</li>
        <li>Machine Learning</li>
      </ul>
    ),
  },
];

function AboutSection() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (tab) => {
    startTransition(() => {
      setTab(tab);
    });
  };

  return (
    <section className="text-black" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image2.jpg"
          alt="about"
          width={500}
          height={500}
          className="rounded-lg shadow-xl md:object-cover md:object-center"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-black mb-4">About Me</h2>
          <p className="text-base md:text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
            quod ab aliquam. Officiis ab asperiores, deserunt iusto molestiae
            magnam temporibus et sapiente nobis error incidunt cumque recusandae
            delectus eaque dolor.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("interests")}
              active={tab === "interests"}
            >
              {" "}
              Interests{" "}
            </TabButton>
          </div>
          <div className="mt-4">
            {TAB_CONTENT.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

import React from "react";
import Image from "next/image";

function AboutSection() {
  return (
    <section className="text-black" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image1.jpg"
          alt="about"
          width={540}
          height={540}
        />
        <div>
          <h2 className="text-4xl font-bold text-black mb-4">About Me</h2>
          <p className="text-base md:text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
            quod ab aliquam. Officiis ab asperiores, deserunt iusto molestiae
            magnam temporibus et sapiente nobis error incidunt cumque recusandae
            delectus eaque dolor.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

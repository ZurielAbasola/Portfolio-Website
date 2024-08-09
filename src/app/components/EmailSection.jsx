import React from "react";
import GithubIcon from "../../../public/github.svg";
import LinkedinIcon from "../../../public/linkedin.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
      <div>
        <h5 className="text-xl font-bold text-black my-2">Contact Me</h5>
        <p className="text-black mb-4 max-w-md">
          {" "}
          I'm always open to new projects, collaborations, or employment
          opportunities. Let's connect!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="github.com">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="linkedin.com">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
        <div>
          <form className="flex flex-col gap-4">
            <label htmlFor="email" type="email" className="text-black">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              required
              placeholder="zuriel123.abasola@gmail.com"
              className="border border-black p-2"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;

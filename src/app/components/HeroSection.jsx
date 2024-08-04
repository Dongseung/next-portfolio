"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Dong Seung SHIN",
                1000,
                "Web Developer",
                1000,
                "Mobile Developer",
                1000,
                "FrontEnd Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-4xl sm:text-5xl lg:text-7xl"
            />
          </h1>
          <p className="mb-6 text-[#adb7be] text-base sm:text-lg lg:text-xl word-break-keep-all">
          안녕하세요! 저는 사용자 친화적인 웹사이트와 모바일 애플리케이션을 만드는 데 열정을 가진 개발자입니다. 아이디어를 혁신적인 디지털 솔루션으로 바꾸는 것을 좋아하며, 함께 협력하여 여러분의 비전을 현실로 만드는 데 최선을 다하겠습니다. 함께 멋진 프로젝트를 만들고 싶습니다!
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-200 text-white">
              Hire Me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center sm:justify-self-start mt-8 sm:mt-0 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[230px] h-[230px] lg:w-[380px] lg:h-[380px] relative">
            <Image
              src="/images/my-image.png"
              alt="my image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={280}
              height={280}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

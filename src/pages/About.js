import Head from "next/head";
import React, { useEffect, useRef } from "react";
import Image from "next/image";

import AnimatedText from "../components/AnimatedText";
import Layout from "@/components/Layout";
import profile from "../../public/images/profile/profile_3.png";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

const AnimationNums = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value, isInView]);

  return <span ref={ref}></span>;
};

const About = () => {
  return (
    <>
      <Head>
        <title>YeCodings | About Page</title>
        <mate name="description" content="any description" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16 dark:text-light">
          <AnimatedText
            text="道阻且艰 行则将至"
            className="mb-16 dark:text-light lg:!text-7xl sm:!text-4xl xl:!text-6xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                个人简介
              </h2>
              <p className="font-medium ">
                你好，我是YeCodings，一个有着热情的网页开发者兼UI/UX设计师，热衷于创建漂亮、
                功能性强、以用户为中心的数字体验。在这个领域拥有4年的经验。我一直在寻找新的创新方法来实现客户的愿景。
              </p>
              <p className="my-4 font-medium ">
                我相信设计不仅仅是让东西看起来漂亮，更是解决问题，为用户创造出直观、愉快的使用体验。
              </p>
              <p className="font-medium ">
                无论我是在开发一个网站、移动应用程序还是其他数字产品，我都致力于将设计卓越和以用户为
                中心的思维应用于我所从事的每一个项目。我期待有机会将我的技能和热情带到你的下一个项目中。
              </p>
            </div>
            <div
              className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light 
            dark:border-light dark:bg-dark p-8 xl:col-span-4 md:order-1 md:col-span-8"
            >
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={profile}
                alt="YeCodings"
                className="w-full h-auto rounded-2xl bg-dark"
                priority
                sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3 md:col-span-8">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimationNums value={50} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  satisfied clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimationNums value={40} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  projects completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimationNums value={5} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  years of experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default About;

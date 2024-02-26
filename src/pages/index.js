import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Layout from "@/components/Layout";
import profilePic from "../../public/images/profile/jmds-2.png";
import LightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import AnimatedText from "@/components/AnimatedText";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import TransitionEffect from "@/components/hooks/TransitionEffect";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:p-16 sm:p-8">
          <div className="flex items-center justify-between w-full lg:flex-col ">
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePic}
                alt="YD"
                className="w-4/5 h-auto ml-20 lg:hidden  md:inline-block md:w-full md:ml-5"
                priority
                sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="!text-6xl !text-left dark:text-light xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium dark:text-light md:text-sm sm:text-xs">
                作为一名经验丰富的全栈开发人员，我致力于将想法转化为创新的网络应用。
                浏览我最新的项目和文章，了解React.js和网络开发方面的专业知识。
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/dummy.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light
                 p-2.5 px-6 rounded-lg text-lg font-semibold
                 hover:bg-light hover:text-dark
                 border-2 border-solid transparent hover:border-dark
                 dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base
                 "
                  //  download={true}
                >
                  Resume
                  <LinkArrow />
                </Link>
                <Link
                  href="mailto:abcd@gmail.com"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium text-dark underline dark:text-light md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image src={LightBulb} alt="YeCoding" className="w-full h-auto" />
        </div>
      </main>
    </>
  );
}

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";

const FeaturedArticle = ({ title, time, img, summary, link }) => {
  return (
    <li>
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="text-2xl font-bold my-2 capitalize">{title}</h2>
      </Link>
    </li>
  );
};

const Articles = () => {
  return (
    <>
      <Head>
        <title>YeCodings | Articles Page</title>
        <mate name="description" content="any description" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
        <Layout className="pt-16">
          <AnimatedText text="Words Can Change The World" className="mb-16" />
          <ul className="grid grid-col-2 gap-16">
            <li>Featured article-1</li>
            <li>Featured article-2</li>
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default Articles;

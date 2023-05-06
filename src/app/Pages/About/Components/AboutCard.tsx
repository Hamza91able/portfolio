import { IAbout } from "@/app/constants/about";
import Image from "next/image";
import React from "react";

type AboutCardProps = {
  about: IAbout;
};

export default function AboutCard({ about }: AboutCardProps) {
  return (
    <div className="p-6 bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-center mb-5">
        <Image
          src={about.image}
          alt="Vercel Logo"
          width={64}
          height={64}
          priority
        />
      </div>
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
        {about.heading}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {about.description}
      </p>
    </div>
  );
}

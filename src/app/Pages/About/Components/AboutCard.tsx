import { IAbout } from "@/app/constants/about";
import Image from "next/image";
import React from "react";

type AboutCardProps = {
  about: IAbout;
  index: number;
};

export default function AboutCard({ about, index }: AboutCardProps) {
  return (
    <div className="p-6 shadow border-r-0 border-l-0 border-t-0 border-b-0 bg-transparent outline-none">
      <div className="flex justify-center mb-5">
        <Image
          src={about.image}
          alt="Vercel Logo"
          width={64}
          height={64}
          priority
        />
      </div>
      <h5 className="mb-7 text-2xl font-bold tracking-tight text-black text-center">
        {about.heading}
      </h5>
      <p
        className="font-normal text-black"
        style={{ whiteSpace: "break-spaces" }}
      >
        {about.description}
      </p>
      <h5 className="mt-5 mb-2 tracking-tight text-green-500 text-center">
        {about.block.primary.heading}
      </h5>
      <p className="font-normal text-black text-center">
        {about.block.primary.description}
      </p>

      <h5 className="mt-5 mb-2 tracking-tight text-green-500 text-center">
        {about.block.secondary.heading}
      </h5>
      <p
        className="font-normal text-black text-center"
        style={{ whiteSpace: "break-spaces", lineHeight: 1.5 }}
      >
        {about.block.secondary.description}
      </p>
    </div>
  );
}

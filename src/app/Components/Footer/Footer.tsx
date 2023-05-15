import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-800 h-96 mt-20">
      <div className="w-full mx-auto max-w-screen-xl p-4 flex align-center justify-center">
        <Image src="/logo.png" alt="Logo" width={120} height={120} priority />
      </div>
      <p className="text-center text-4xl">HAMZA KHAN</p>
    </footer>
  );
}

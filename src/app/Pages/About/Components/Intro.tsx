import React from "react";

export default function Intro() {
  return (
    <div className="relative isolate overflow-hidden py-24 sm:py-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="mt-6 text-lg leading-8 text-green-300 mb-5">
            Hi, my name is
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-4">
            Hamza Khan
          </h2>
          <h2 className="text-3xl font-bold text-slate-400 sm:text-5xl">
            I build web applications
          </h2>
          <p className="mt-6 text-lg text-slate-400 leading-8 text-gray-300">
            I am a Software Engineer who graduated from the University of
            Karachi. I have over 3 years of experience working as a Full Stack
            Engineer in the industry, specializing in both Microservice and
            Monolithic architectures, and using the latest industry-leading
            technologies and working on high scale applications.
          </p>

          <div className="mx-auto mt-10">
            <dl className="lg:mt-16">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/datguyhamza/"
                className="rounded-md border-solid border-2 border-green-300 p-4 text-green-30"
              >
                Checkout my LinkedIn
              </a>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

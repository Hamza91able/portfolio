"use client";
import { companies } from "@/app/constants/experience";
import React, { useState } from "react";

export default function Tabs() {
  const [selectedCompany, setSelectedCompany] = useState(0);

  return (
    <div className="flex flex-col md:flex-row bg-gray-100 bg-transparent">
      <div className="border-b md:border-b-0 md:border-r border-gray-300 md:w-1/4">
        <div className="flex flex-row md:flex-col md:justify-center overflow-y-auto">
          {companies.map((company, index) => (
            <button
              key={index}
              className={`px-6 py-4 text-sm md:text-md hover:bg-slate-700 md:border-l-4 ${
                selectedCompany === index
                  ? "md:border-green-300 text-green-300"
                  : "border-slate-800 text-slate-300"
              }  bg-transparent text-left`}
              onClick={() => setSelectedCompany(index)}
            >
              {company.name}
            </button>
          ))}
        </div>
      </div>
      <div className="px-6 py-4 md:flex-1 w-100">
        <h2 className="text-md font-bold text-white mb-1">
          {companies[selectedCompany].designation}
        </h2>
        <h2 className="text-sm text-slate-400 mb-4">
          {companies[selectedCompany].timePeriod}
        </h2>
        <ul
          className="text-gray-400 ml-3"
          style={{
            listStyle: "disclosure-closed",
          }}
        >
          {companies[selectedCompany].points?.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

import React from "react";
import { FaPlus } from "react-icons/fa6";

const B2CHelpTabs = () => {
  return (
    <div className="basis-full  text-gray-800">
      <div className="flex gap-4 mb-6">
        <div className="bg-gray-100 p-2 rounded-full">
          <FaPlus className="cursor-pointer" />
        </div>
        <p className="font-[700] text-2xl">Technology platform assessments</p>
      </div>
      <div className="ml-12 pl-0.5">
        <h4 className="font-[700] text-xl mb-2">WHAT WE DO</h4>
        <p className="mb-6">
          Our in-depth analysis goes beyond features, helping you discover the
          B2C e-commerce platform that fuels your business ambitions.
        </p>

        <h4 className="font-[700] text-xl mb-2">THE OUTCOME</h4>
        <ul className="list-decimal list-inside mb-6">
          <li className="mb-1">
            Find the perfect fit for your existing systems and long-term vision.
          </li>
          <li>
            Find the perfect fit for your existing systems and long-term vision.
          </li>
          <li>Align seamlessly with your short-term goals.</li>
        </ul>

        <h4 className="font-[700] text-xl mb-2">KEY SERVICES INCLUDE</h4>
        <ul className="list-decimal list-inside">
          <li className="mb-1">In-depth user research and profiling.</li>
          <li>Seamless user journey mapping and prototyping.</li>
          <li>eamless user journey mapping and prototyping.</li>
        </ul>
      </div>
    </div>
  );
};

export default B2CHelpTabs;

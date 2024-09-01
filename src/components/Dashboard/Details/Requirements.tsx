import React from "react";
import DetailBullets from "./DetailBullets";

const Requirements = () => {
  return (
    <section className="" id="requirement">
      <h1 className="text-2xl font-[600] tracking-wide text-gray-800 mb-5">
        Requirements
      </h1>

      <div className="border rounded-md w-full p-6">
        <DetailBullets
          title="Project Requirements"
          data="Hire A Dedicated Team"
        />
        <DetailBullets title="Estimated Start Time" data="In Few Weeks" />
        <DetailBullets
          title="Project Details"
          data={
            " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa deleniti harum nemo minima dolorum dolores qui deserunt porro, ad velit provident sunt beatae tempora sit laudantium quam labore laboriosam culpa consequuntur aut, necessitatibus nostrum est. In labore consectetur laudantium itaque facere accusamus obcaecati inventore culpa temporibus nisi consequatur, deleniti amet nulla assumenda, quasi molestiae exercitationem error voluptatem unde alias dolores officia ducimus eaque corrupti? Sit similique exercitationem beatae. Velit iste numquam sed, beatae nemo reprehenderit necessitatibus. Obcaecati, nulla totam odio consequatur illum architecto cumque labore voluptatum non culpa a excepturi ducimus neque! Ab, voluptate quidem veritatis quaerat consectetur ea. Laborum."
          }
        />

        <div></div>
      </div>
    </section>
  );
};

export default Requirements;

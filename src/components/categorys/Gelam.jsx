import React from "react";

import { AiOutlineArrowUp } from "react-icons/ai";

import IconInstagram from "@/icons/IconInstagram";

import Home from "@/components/Home";

const Gelam = () => {
  const portfolios = [
    {
      id: 1,
      src: "https://www.youtube.com/embed/lLttRgTAAE8",
    },
    {
      id: 2,
      src: "https://www.youtube.com/embed/H_nNhEfFXpc",
    },
    {
      id: 3,
      src: "https://www.youtube.com/embed/Q8qpcA0B2is",
    },
    {
      id: 4,
      src: "https://www.youtube.com/embed/oXk6Tsj2Pj4",
    },
    {
      id: 5,
      src: "https://www.youtube.com/embed/um_W5awDS4s",
    },
    {
      id: 6,
      src: "https://www.youtube.com/embed/9gN55pc4BpA",
    },
    {
      id: 7,
      src: "https://www.youtube.com/embed/QH3zMya7VUY",
    },
    {
      id: 8,
      src: "https://www.youtube.com/embed/j28X_0KwWIo",
    },
  ];

  const useScroll = () => {
    window.scroll({ top: 580, left: 0, behavior: "smooth" });
  };

  return (
    <div className="max-w-screen-xl mx-auto h-fit">
      <Home />

      <div className="my-10 mx-8 text-center lg:text-center lg:border-black">
        <div className="w-full  text-white mt-12">
          <div className="mx-auto flex h-full w-full max-w-screen-lg flex-col justify-center p-4 ">
            <div className="grid gap-8 md:px-12 grid-cols-1 sm:grid-cols-2  lg:grid-cols-2">
              {portfolios.map(({ id, src }) => (
                <div
                  key={id}
                  className="rounded-lg shadow-lg shadow-[#ffcdc2] "
                >
                  <iframe
                    src={src}
                    title="eliana (2).mov"
                    className="h-[330px] md:h-[500px]  w-full  object-cover rounded-xl "
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                    allowFullScreen
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gelam;

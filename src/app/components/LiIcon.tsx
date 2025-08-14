'use client'
import React from "react";
import {motion, useScroll } from 'framer-motion'
const LiIcon = ({reference} : {reference: React.RefObject<HTMLLIElement> | null }) => { 
  const {scrollYProgress} = useScroll({
    target:  reference ?? undefined,
    offset: ["center end", "center center"]
  });
  return (
    <figure className="absolute xl:left-20 left-0 stroke-dark dark:stroke-light">
      <svg className="xl:-rotate-100 -rotate-90" width={75} height={75} viewBox="0 0 100 100">
        <circle cx="75" cy="50" r="20" className="stroke-primary stroke-1 fill-none"/>
        <motion.circle cx="75" cy="50" r="20" className="stroke-[5px] fill-light dark:fill-black"
        style={{
          pathLength: scrollYProgress
        }}
        />
        <circle cx="75" cy="50" r="10" className="animate-pulse stroke-1 fill-primary"/>
      </svg>
    </figure>
  );
};

export default LiIcon;

"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  cardHoverSmall,
  fadeIn,
  scaleIn,
} from "@/utils/animations";
import Image from "next/image";
const About = () => {
  return (
    <div className="container max-w-5xl mx-auto px-4 py-16" id="about">
      <motion.h2 className="section-title" {...fadeInUp}>
        About Me
      </motion.h2>
      <BentoBox />
    </div>
  );
};

export default About;

const BentoBox = () => {
  const softSkills = ['Adaptability', 'Communication', 'Problem-solving', 'Teamwork', 'Efficiency', 'Analytical Thinking', 'Results-oriented', 'Continuous Improvement'];
  return (
    <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-2">
      <div>
        <motion.div
          className="flex justify-center items-center"
          {...scaleIn}
          transition={{ delay: 0.2 }}
        >
          <Image
            src="/profile.jpg"
            alt="Profile"
            width={200}
            height={200}
            className="rounded-full w-44 h-44 object-cover ring-2 ring-primary"
            priority
          />
        </motion.div>
        <motion.section {...fadeIn} transition={{ delay: 0.6 }}>
          <motion.div
            className="max-w-3xl mx-auto  md:p-6"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
             <motion.h2 className="text-thin text-gray-400" {...fadeInUp}>
            Education
          </motion.h2>
            <motion.div
              
              variants={fadeInUp}
              {...{
                transition: { type: "spring", stiffness: 100 },
              }}
            >
              <h3 className="text-xl font-semibold mb-2">
                Bachelor of Science in Computer Science
              </h3>
              <p className="text-primary mb-2">University Name • 2014 - 2018</p>
              <p className="text-secondary">
                Graduated with honors. Focused on software engineering and web
                development.
              </p>
            </motion.div>
          </motion.div>
        </motion.section>
      </div>
      <div className="row-span-2 flex flex-col justify-center text-lg leading-relaxed">
        <p className="mb-4">  
          Hi, I'm Jesús Octavio, a
          <strong className="text-primary"> Computer Systems Engineer</strong>{" "}
          passionate about developing technological solutions that optimize
          processes and improve operational efficiency.
        </p>
        <p>
          With
          <strong className=" text-primary"> 2 years of experience</strong>
          in the field. 
          <br/>I have participated in projects in both the public and
          private sectors, applying my skills to solve problems in innovative
          ways and generate measurable results.
        </p>
           <motion.div 
                className="flex flex-wrap gap-2 mb-4 mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {softSkills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1 bg-primary/10 rounded-md text-primary text-sm"
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
      </div>
    </motion.div>
  );
};

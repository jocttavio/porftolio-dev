"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, cardHoverSmall } from "@/utils/animations";
const Skills = () => {
  return (
    <section className="container max-w-5xl mx-auto px-4 pb-20" id="skills">
      <motion.h2 className="text-3xl font-bold mb-12 text-center" {...fadeInUp}>
        Technologies
      </motion.h2>
      <p className="text-lg tracking-wide">Proficient in a variety <span className="text-primary font-bold"> of modern </span> technologies. My way of working involves leveraging these tools to build efficient and scalable applications.
      <span className="text-primary font-bold"> My stack includes:</span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
        <motion.article
          key={"frontend"}
          className="bg-white dark:bg-dark/70 rounded-lg shadow-md p-4 "
          variants={fadeInUp}
          {...{
            // ...cardHoverSmall,
            transition: { type: "spring", stiffness: 100 },
          }}
        >
          <h3 className="text-center text-xl font-bold text-primary">
            Frontend
          </h3>
          <ul className="grid grid-cols-3 md:grid-cols-4 gap-4 mt-4">
              <li className="flex justify-center items-center flex-col">
              <img
                src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/html.png"
                alt="icon-html"
                width={56}
              />
              <span className="font-medium">HTML</span>
            </li>
            {/* tailwindcss */}
            <li className="flex justify-center items-center flex-col">
              <img
                src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/css.png"
                alt="icon-css"
                width={56}
              />
              <span className="font-medium">CSS</span>
            </li>
            <li className="flex justify-center items-center flex-col">
              <img
                src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/tailwind_css.png"
                alt="icon-tailwindcss"
                width={56}
              />
              
              <span className="font-medium">Tailwind CSS</span>
            </li>
            {/* javascript */}
              <li className="flex justify-center items-center flex-col">
              <img
                src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/javascript.png"
                alt="icon-javascript"
                width={56}
              />
              <span className="font-medium">JavaScript</span>
            </li>
            <li className="flex justify-center items-center flex-col">
              <img
                src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/react.png"
                alt="icon-react"
                width={56}
              />
              <span className="font-medium">ReactJs</span>
            </li>
            <li className="flex justify-center items-center flex-col">
              <img
                src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/next_js.png"
                alt="icon-nextjs"
                width={56}
              />
              <span className="font-medium">Next.js</span>
            </li>
            <li className="flex justify-center items-center flex-col">
              <img
                src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/vue_js.png"
                alt="icon-vue"
                width={56}
              />
              <span className="font-medium">Vue.js</span>
            </li>
          
            <li className="flex justify-center items-center flex-col">
              <img
                src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/vite.png"
                alt="icon-vite"
                width={56}
              />
              <span className="font-medium">Vite</span>
            </li>
        

          </ul>
        </motion.article>
        <motion.article  key={"backend"}
          className="bg-white dark:bg-dark/70 rounded-lg shadow-md p-4 "
          variants={fadeInUp}
          {...{
            // ...cardHoverSmall,
            transition: { type: "spring", stiffness: 100 },
          }}>
          <h3 className="font-bold text-xl text-primary text-center">Backend</h3>
          <ul className="grid grid-cols-3 md:grid-cols-4 gap-4 mt-4">
            <li className="flex justify-center items-center flex-col">
              <img
                src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/node_js.png"
                alt="icon-nodejs"
                width={56}
              />
              <span className="font-medium">Node.js</span>
            </li>
            <li className="flex justify-center items-center flex-col">
              <img
                src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/express.png"
                alt="icon-express"
                width={56}
              />
              <span className="font-medium">Express</span>
            </li>
              <li className="flex justify-center items-center flex-col">
              <img
                src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/php_(elephpant).png"
                alt="icon-php]"
                width={56}
              />
              <span className="font-medium">PHP</span>
            </li>
            <li className="flex justify-center items-center flex-col">
              <img
                src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/laravel.png"
                alt="icon-laravel"
                width={56}
              />
              <span className="font-medium">Laravel</span>
            </li>
            <li className="flex justify-center items-center flex-col">
              <img
                src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/postgresql.png"
                alt="icon-postgresql"
                width={56}
              />
              <span className="font-medium">PostgreSQL</span>
            </li>
            <li className="flex justify-center items-center flex-col">
              <img
                src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/mysql.png"
                alt="icon-mysql"
                width={56}
              />
              <span className="font-medium">MySQL</span>
            </li>
            <li className="flex justify-center items-center flex-col">
              <img
                src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/nginx.png"
                alt="icon-nginx"
                width={56}
              />
              <span className="font-medium">Nginx</span>
            </li>
          </ul>
        </motion.article>
        <motion.article  key={"tools"}   className="bg-white dark:bg-dark/70 rounded-lg shadow-md p-4 "
          variants={fadeInUp}
          {...{
            // ...cardHoverSmall,
            transition: { type: "spring", stiffness: 100 },
          }}>
          <h3 className="font-bold text-primary text-xl text-center">Tools</h3>
          <ul className="grid grid-cols-3 md:grid-cols-4 mt-4  gap-4">
            <li className="flex justify-center items-center flex-col">
              <img
                src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/git.png"
                alt="icon-git"
                width={56}
              />
              <span className="font-medium">Git</span>
            </li>
            <li className="flex justify-center items-center flex-col">
              <img
                src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/docker.png"
                alt="icon-docker"
                width={56}
              />
              <span className="font-medium">Docker</span>
            </li>
            <li className="flex justify-center items-center flex-col">
              <img
                src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/bash.png"
                alt="icon-bash"
                width={56}
              />
              <span className="font-medium">Bash</span>
            </li>
            <li className="flex justify-center items-center flex-col">
              <img
                src="	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/postman.png"
                alt="icon-postman"
                width={56}
              />
              <span className="font-medium">Postman</span>
            </li>
             <li className="flex justify-center items-center flex-col">
              <img
                src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/figma.png"
                alt="icon-figma"
                width={56}
              />
              <span className="font-medium">Figma</span>
            </li>
          </ul>
        </motion.article>
        <motion.article  key={"learning"} className="bg-white dark:bg-dark/70 rounded-lg shadow-md p-4 "
          variants={fadeInUp}
          {...{
            // ...cardHoverSmall,
            transition: { type: "spring", stiffness: 100 },
          }}>
          <h3 className="font-bold text-primary text-xl text-center">Learning</h3>
          <ul className="grid grid-cols-3 md:grid-cols-4 mt-4 gap-4">
            <li className="flex justify-center items-center flex-col">
              <img
                src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/strapi.png"
                alt="icon-strapi"
                width={56}
              />
              <span className="font-medium">Strapi</span>
            </li>
            <li className="flex justify-center items-center flex-col">
              <img
                src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/redis.png"
                alt="icon-redis"
                width={56}
              />
              <span className="font-medium">Redis</span>
            </li>    
          </ul>
        </motion.article>
      </div>
    </section>
  );
};

export default Skills;


import React from "react";
import { motion } from "framer-motion";
import Cup from '../assets/cup.png'
// import Image from "next/image";
// import Link from "next/link";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: {
        yoyo: Infinity,
      },
    },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="  py-[7rem] body-font bg-[#1E0B00] herobg textshadow"
    >
      <div className="container mx-auto flex px-8 py-6 md:flex-row flex-col items-center">
        <motion.div
          className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
          variants={containerVariants}
        >
          <motion.h1
            className="title-font  sm:text-4xl text-4xl md:text-5xl mb-4 text-white font-bold"
            variants={childVariants}
          >
           Learn to feel the taste with&nbsp;
            {/* <br className="hidden lg:inline-block" /> */}
               Cafe<span className='text-[#A5582B]  font-bold'>Rose!</span>
          </motion.h1>
          <motion.p className="mb-8 leading-relaxed text-xl text-center md:text-justify text-white" variants={childVariants}>
          Government College of Technology, SITE Karachi, formerly known as Karachi Polytechnic Institute, is a pioneering government technical institute in Pakistan.
         
          <a href='/addTopic'><button className="block mx-auto lg:mx-0  xl:mx-0 md:mx-0 rounded-full text-xl bg-gradient-to-r from-[#A5582B] via-[#A5582B] to-[#A5582B] font-normal mt-4 text-white px-7 py-3 shadow-lg hover:from-purple-600 hover:via-pink-600 hover:to-pink-600 transition duration-300 boxshadow">
  Join Our Courses
</button>
</a>
          </motion.p>
          <motion.div className="flex justify-center" variants={childVariants}>
            
          </motion.div>
        </motion.div>
        <motion.div
          className="lg:max-w-lg pl-8 lg:w-full md:w-1/2 w-5/6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <img
            className="object-cover object-center rounded spinner dropshadow"
            alt="hero"
            src={Cup}
            width='420'
            height='420'
            
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
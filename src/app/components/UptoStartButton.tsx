'use client'
import React, { useEffect, useState } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";
import styles from "../css/uptostart.module.css";
const UptoStartButton = () => {
  const [showButton, setShowButton] = useState(false);
  const onClickHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 3500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <button
      className={`bg-primary text-white rounded-full fixed bottom-32 right-20 cursor-pointer  justify-center items-center animate-bounce ${showButton ? `md:flex ${styles.upto_start} hidden` : 'hidden'} `}
      onClick={onClickHandler}
    >
      <FaArrowAltCircleUp className="inline-block w-12 h-12" />
    </button>
  );
};

export default UptoStartButton;

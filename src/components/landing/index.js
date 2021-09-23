import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";


const Landing = () => {
    return (
      <motion.div 
      initial=
      {{ x: 10,
         y: 800
       }} 

      animate={{
        x: 10,
        y: 40
      }}
      
      transition={{
        type: "spring",
        stiffness: 260,
        duration: 5,
        damping: 20
      }}
      className = "landing"
      >
      <Land>
          Interactivity of a classroom, in a video lecture.
      </Land>
      </motion.div>
    );
  };
  
  export default Landing;
  
  const Land = styled.div`
      color : var(--text); 
      font-size: 100px;
      letter-spacing: -4.5px;
      line-height: 150px;
      text-align: center;
      white-space: pre-line;
      margin-top: 100px;
      overflow-y: hidden;
  
  `;
  
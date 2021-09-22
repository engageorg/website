import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";


const Landing = () => {
    return (
      <motion.div 
      initial=
      {{ x: 200,
         y: 800,
        scale: 0 
       }} 

      animate={{
        x: 1250,
        y: 200,
        scale: 2,
        rotate: 0,
      }}
      
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
      className = "landing"
      >
      <Land>
          Interactivity of a classroom,<br/>   in a video lecture
      </Land>
      </motion.div>
    );
  };
  
  export default Landing;
  
  const Land = styled.div`
    top : 15vh;
    color : var(--text);
    font-size : 60px;
  `;
  
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";


const Landing = () => {
    return (
      <motion.div 
      // initial=
      // {{ x: 200,
      //    y: 800,
        
      //  }} 

      // animate={{
      //   x: 1250,
      //   y: 200,
      //   rotate: 0,
      // }}
      
      // transition={{
      //   type: "spring",
      //   stiffness: 260,
      //   damping: 20
      // }}
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
    top : 45vh;
    color : var(--text);
    font-size : 60px;
    display: flex;
    justify-content: center;
    align-items: center; 
  `;
  
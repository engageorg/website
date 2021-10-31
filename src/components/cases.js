import React from "react";
import { ReactComponent as CasesNext } from "../assets/arrow-right.svg";
import { ReactComponent as CasesPrev } from "../assets/arrow-left.svg";

const caseStudies = [
  {
    id: 1,
    subtitle: "Chalkboard",
    title: "Chalkboard that adapts to you.",
    img: "chalkboard"
  },
  {
    id: 2,
    subtitle: "Virtual Labs",
    title: "Conduct Practicals anywhere, at low bandwidth internet.",
    img: "yourspace-min"
  },
  {
    id: 3,
    subtitle: "Low bandwidth Remote Learning",
    title: "Recording lectures and conducting live classes, at very low bandwidth",
    img: "lumin-min"
  }
];

const Cases = () => {
  return (
    <section className='cases'>
      <div className='container-fluid'>
        <div className='cases-navigation'>
          <div className='cases-arrow prev disabled'>
            <CasesPrev />
          </div>
          <div className='cases-arrow next'>
            <CasesNext />
          </div>
        </div>
        <div className='row'>
          {caseStudies.map(caseItem => (
            <div className='case' key={caseItem.id}>
              <div className='case-details'>
                <span>{caseItem.subtitle}</span>
                <h2>{caseItem.title}</h2>
              </div>
              <div className='case-image'>
                <img
                  src={require(`../assets/${caseItem.img}.png`)}
                  alt={caseItem.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;

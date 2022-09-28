import React, { useState, useEffect } from "react";
import { AiFillGithub, AiFillEye } from "react-icons/ai";
import "./Work.scss";
import { motion } from "framer-motion";
import { APPPWrapper } from "../../wrapper";
import { urlFor, client } from "../../client";
const Work = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [animateCard, setAnimateCard] = useState({
    y: 0,
    opacity: 1,
  });
  useEffect(() => {
    const query = "*[_type == 'works']";
    client.fetch(query).then((res) => {
      setWorks(res);
      setFilterWork(res);
    });
  }, []);
  const handleWorkFilter = (item) => {};
  return (
    <>
      <h2 className="head-text">
        My Creative <span>Portfolio </span>
        Section
      </h2>
      <div className="app__work-filter">
        {["All", "React", "Next", "Node", "Mongo"].map((item, index) => (
          <div
            key={index}
            onClick={() => {
              handleWorkFilter(item);
            }}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>
      <motion.div
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        animate={animateCard}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={urlFor(work.imgUrl)} alt={work.title} />
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default Work;

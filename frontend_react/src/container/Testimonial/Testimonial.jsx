import React, { useState, useEffect } from "react";
import "./Testimonial.scss";
import { motion } from "framer-motion";
import { APPWrapper, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import { HiChevronDoubleLeft, HiChevronRight } from "react-icons/hi";
const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [brands, setBrands] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const query = `*[_type == "testimonials"]`;
    const brandsQuery = `*[_type == "brands"]`;
    client.fetch(query).then((res) => {
      setTestimonials(res);
    });
    client.fetch(brandsQuery).then((res) => {
      setBrands(res);
    });
  }, []);
  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__testimonial app__flex">
            <img
              src={urlFor(testimonials[currentIndex].imgurl)}
              alt="testimonial"
            />
          </div>
        </>
      )}
    </>
  );
};

export default APPWrapper(
  MotionWrap(Testimonial, "app__testimonial"),
  "testimonial",
  "app__primarybg"
);

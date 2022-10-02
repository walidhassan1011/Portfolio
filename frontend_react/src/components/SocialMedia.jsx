import React from "react";
import { BsTwitter, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
const SocialMedia = () => {
  return (
    <div className="app__social">
      <div
        onClick={() => {
          window.open("https://twitter.com/walidhassan111", "_blank");
        }}
      >
        <BsTwitter />
      </div>
      <div
        onClick={() => {
          window.open("https://www.instagram.com/walid_hassan10/", "_blank");
        }}
      >
        <BsInstagram />
      </div>
      <div
        onClick={() => {
          window.open(
            "https://www.facebook.com/walid.hassan.10888938/",
            "_blank"
          );
        }}
      >
        <FaFacebookF />
      </div>
      <div
        onClick={() => {
          window.open(
            "https://www.linkedin.com/in/walid-hassan-a744461a7",
            "_blank"
          );
        }}
      >
        <BsLinkedin />
      </div>
      <div
        onClick={() => {
          window.open("https://github.com/walidhassan1011", "_blank");
        }}
      >
        <BsGithub />
      </div>
    </div>
  );
};

export default SocialMedia;

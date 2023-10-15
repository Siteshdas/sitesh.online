import React from 'react'
import { FaLinkedinIn, FaReact,FaNodeJs, FaFilePdf } from "react-icons/fa";
import { SiMongodb,SiExpress,SiGithub,SiGmail } from "react-icons/si";
import Pdf from '../../assets/images/disign.pdf';
import { FiDownload } from "react-icons/fi";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me on
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
            <a href="https://github.com/Siteshdas" target="_blank" rel="noopener noreferrer">
              <SiGithub /></a>
            </span>
            <span className="bannerIcon">
            <a href="mailto:siteshdas01@gmail.com">
              <SiGmail /></a>
            </span>
            <span className="bannerIcon">
            <a href="https://www.linkedin.com/in/sitesh-kumar-das-60a27a274/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn /></a>
            </span>
            <span className="bannerIcon">
            <a href={Pdf} download>
              <FiDownload /></a>
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST WEB STACK
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <SiMongodb />
            </span>
            <span className="bannerIcon">
              <SiExpress />
            </span>
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <FaNodeJs />
            </span>
          </div>
        </div>
      </div>
  )
}
{/* <a href={ResumeCard} download><button>sagar</button></a> */}
export default Media
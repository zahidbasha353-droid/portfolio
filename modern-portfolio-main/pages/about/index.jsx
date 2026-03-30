import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
  FaWordpress,
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAdobexd,
  SiFramer,
  SiNextdotjs,
} from "react-icons/si";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

//  data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Meta Ads & Facebook Ads Manager",
        icons: [
          FaReact,
          SiNextdotjs,
        ],
      },
      {
        title: "Real Estate Lead Generation",
        icons: [FaJs, FaHtml5],
      },
      {
        title: "Content Strategy & Creation",
        icons: [FaCss3, FaReact],
      },
      {
        title: "Campaign Optimization & Analytics",
        icons: [SiFramer, SiAdobexd],
      },
    ],
  },
  {
    title: "achievements",
    info: [
      {
        title: "₹2.3 Cost Per Lead Generated",
        stage: "2023 - 2024",
      },
      {
        title: "150+ High-Quality Leads Per Month",
        stage: "2024",
      },
      {
        title: "₹1.5L+ Ad Spend Managed Successfully",
        stage: "2023 - 2024",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Performance Marketer - Digital Marketing Head",
        stage: "2023 – Present",
      },
      {
        title: "Meta Ads Specialist | Real Estate Lead Gen",
        stage: "2023 – Present",
      },
      {
        title: "Lead Generation Expert",
        stage: "2023 – Present",
      },
      {
        title: "OPPO Team Leader",
        stage: "2023",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Meta Ads Campaign Experience & Certification",
        stage: "2023 – Present",
      },
      {
        title: "Google Analytics & Conversion Tracking",
        stage: "2023",
      },
      {
        title: "Diploma in Computer Engineering (DCE)",
        stage: "2022 Batch",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Performance Marketing <span className="text-accent">Expertise</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            I am a performance-driven digital marketing specialist with expertise in Meta Ads, content creation, and lead generation. I specialize in real estate marketing and have successfully generated high-quality leads at very low cost. I focus on delivering measurable results and maximizing ROI for every campaign. Proven track record with ₹2.3 cost per lead and 150+ quality leads generated monthly.
          </motion.p>

          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* leads per month */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={150} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Leads per month.
                </div>
              </div>

              {/* cost per lead */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  ₹2.3
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Cost per lead.
                </div>
              </div>

              {/* ad spend managed */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  ₹1.5L+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Ad spend managed.
                </div>
              </div>

              {/* case studies */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={50} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Successful campaigns.
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${
                  index === itemI &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemI) => (
              <div
                key={itemI}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-center text-white/60"
              >
                {/* title */}
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>

                <div className="flex gap-x-4">
                  {/* icons */}
                  {item.icons?.map((Icon, iconI) => (
                    <div key={iconI} className="text-2xl text-white">
                      <Icon />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

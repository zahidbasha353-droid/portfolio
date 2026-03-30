import Link from "next/link";

import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiWhatsappLine,
  RiGithubLine,
  RiLinkedinLine,
} from "react-icons/ri";

export const socialData = [
  {
    name: "WhatsApp",
    link: "https://wa.me/917550177369?text=Hi%20Zahid%2C%20I%27m%20interested%20in%20your%20services",
    Icon: RiWhatsappLine,
  },
  {
    name: "Instagram",
    link: "https://instagram.com/zahid.basha",
    Icon: RiInstagramLine,
  },
  {
    name: "Facebook",
    link: "https://facebook.com/zahid.basha",
    Icon: RiFacebookLine,
  },
  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/zahidbasha",
    Icon: RiLinkedinLine,
  },
  {
    name: "YouTube",
    link: "https://youtube.com/zahidbasha",
    Icon: RiYoutubeLine,
  },
  {
    name: "Website",
    link: "https://zahidbasha.com",
    Icon: RiGithubLine,
  },
];

const Socials = () => {
  return (
    <div className=\"flex items-center gap-x-5 text-lg relative z-20 pointer-events-auto\">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "Github"
              ? "bg-accent rounded-full p-[5px] hover:text-white"
              : "hover:text-accent"
          } transition-all duration-300 cursor-pointer pointer-events-auto z-20 relative flex items-center`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;

import "./social-media.css";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function SocialMedia({
  facebook = "",
  twitter = "",
  instagram = "",
  linkedin = "",
}) {
  let socialMediaLinks = [
    { name: "facebook", icon: <FaFacebookF />, link: facebook },
    { name: "twitter", icon: <FaXTwitter />, link: twitter },
    { name: "instagram", icon: <FaInstagram />, link: instagram },
    { name: "linkedin", icon: <FaLinkedinIn />, link: linkedin },
  ];

  return (
    <div className="social-box">
      <div className="title">
        <h3>Get Social</h3>
      </div>
      <div className="icons">
        {socialMediaLinks.map((social) => (
          <a href={facebook ? facebook : "#"}>{social.icon}</a>
        ))}
      </div>
    </div>
  );
}

export default SocialMedia;

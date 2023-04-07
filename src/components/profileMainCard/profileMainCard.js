import React from "react";
import PropTypes from "prop-types";
import styles from "./profileMainCard.module.scss";
import profile from "../../public/images/profile.png";
import { IconContext } from "react-icons";
import { FaLinkedin, FaGithubSquare, FaSalesforce } from "react-icons/fa";

const ProfileMainCard = () => (
  <div className={styles.ProfileMainCard}>
    <div className="container">
      <div className={styles.Tagline}>Software Engineer</div>
      <div
        className={styles.Profile}
        data-aos="zoom-out-right"
        data-aos-anchor-placement="top-center"
      >
        <img
          src={profile}
          alt="..."
          width="200"
          height="200"
          class="rounded-circle"
        ></img>
      </div>
      <div className="p-2">
        <a
          title="Linkedin/@ThePDwivedi"
          className={styles.links}
          href="https://www.linkedin.com/in/thepdwivedi/"
          target="_blank"
          rel="noreferrer"
        >
          <IconContext.Provider value={{ className: "shared-class", size: 25 }}>
            <FaLinkedin />
          </IconContext.Provider>
        </a>
        <a
          className={styles.links}
          title="Github/@ThePDwivedi"
          href="https://github.com/thepdwivedi"
          target="_blank"
          rel="noreferrer"
        >
          <IconContext.Provider value={{ className: "shared-class", size: 25 }}>
            <FaGithubSquare />
          </IconContext.Provider>
        </a>
        <a
          className={styles.links}
          title="Trailblazer/@ThePDwivedi"
          href="https://trailblazer.me/id/thepdwivedi"
          target="_blank"
          rel="noreferrer"
        >
          <IconContext.Provider value={{ className: "shared-class", size: 25 }}>
            <FaSalesforce />
          </IconContext.Provider>
        </a>
      </div>
      <div className={styles.description}>
        Salesforce Developer | AI/ML | BigData | ReactJS/NodeJS | AWS |
      </div>
    </div>
    <div className="contact-links"></div>
  </div>
);

ProfileMainCard.propTypes = {};

ProfileMainCard.defaultProps = {};

export default ProfileMainCard;

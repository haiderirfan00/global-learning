import React from "react";
import styles from "@/styles/Footer.module.css";
import { AiOutlineLine } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <footer className={styles.footer}>
        <div className={styles.subsec}>
          <div className={styles.column}>
            <h2>Our School</h2>
            <ul>
              <li>Pre-School</li>
              <li>Junior-School</li>
              <li>Middle-school</li>
              <li>Senior-School</li>
            </ul>
          </div>
          <div className={styles.column}>
            <h2>Quick Links</h2>
            <ul>
              <li>Addmissions</li>
              <li>Online Results</li>
              <li>Contact us</li>
              <li>News And Evenst</li>
            </ul>
          </div>
          <div className={styles.column}>
            <h2>Global Learning</h2>
            <ul>
              <li>About</li>
              <li>Publications</li>
              <li>High Achievers</li>
              <li>]Overseas Addmissions</li>
            </ul>
          </div>
          <div className={styles.column}>
            <h2>Contact Info</h2>
            <ul>
              <li>8334 Lubowitz Villages, South Dakota. USA</li>
              <li>664-436-3564</li>
              <li>info@globallearning.com</li>
            </ul>
          </div>
        </div>
        <div className={styles.rigths}>
        <h3>Copyright&nbsp;©&nbsp;GlobalLearning2023</h3>
        <h4>
          Powered by{" "}
          <Link href={"https://pixel-forge-solutions.vercel.app/"}>
            PixelForge Sloutions
          </Link>
        </h4>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

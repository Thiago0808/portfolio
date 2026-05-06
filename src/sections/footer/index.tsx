import { FaGithub, FaLinkedin, FaWhatsapp, FaFileAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import './style.css';
import type { SectionsProps } from '../../App';
import { contents } from '../../content/languages/content';
import cvEn from "../../assets/pdf/CV_Thiago_Martins_EN.pdf";
import cvPt from "../../assets/pdf/CV_Thiago_Martins_PTBR.pdf";

function Footer({ language }: SectionsProps) {
  const content = contents[language].footer;

  const cvFile = language === 'en' 
    ? cvEn 
    : cvPt;
  
  return (
    <footer className="footer" id="contacts">
      <div className="footer-icons">
        <a
          href="https://github.com/Thiago0808"
          target="_blank"
          rel="noopener noreferrer"
          className="social-media-link"
          aria-label={content.contacts.github}
        >
          <FaGithub className="footer-icon" />
        </a>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=thiagoliveeeira@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-media-link"
          aria-label={content.contacts.email}
        >
          <MdEmail className="footer-icon" />
        </a>

        <a
          href="https://www.linkedin.com/in/thiago-martins-9b2353285/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-media-link"
          aria-label={content.contacts.linkedin}
        >
          <FaLinkedin className="footer-icon" />
        </a>

        <a
          href="https://wa.me/5548998129221"
          target="_blank"
          rel="noopener noreferrer"
          className="social-media-link"
          aria-label={content.contacts.whatsapp}
        >
          <FaWhatsapp className="footer-icon" />
        </a>

        <a
          href={cvFile}
          target="_blank"
          rel="noopener noreferrer"
          className="social-media-link"
          download
          aria-label={content.downloadCV}
        >
          <FaFileAlt className="footer-icon" />
        </a>
      </div>

      <p className="footer-text">
        {new Date().getFullYear()} - {content.developed}
      </p>
    </footer>
  );
}

export default Footer;
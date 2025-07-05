import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import './style.css';

function Footer() {
  return (
    <footer className="footer" id='contatos'>
      <div className="footer-icons">
        <a
          href="https://github.com/Thiago0808"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <FaGithub className="footer-icon" />
        </a>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=thiagoliveeeira@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <MdEmail className="footer-icon" />
        </a>

        <a
          href="https://www.linkedin.com/in/thiago-martins-9b2353285/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <FaLinkedin className="footer-icon" />
        </a>
      </div>

      <p className="footer-text">{new Date().getFullYear()} - Desenvolvido por Thiago Martins</p>
    </footer>
  );
}

export default Footer;

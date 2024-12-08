import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="footer dark-background">
      <div className="container">
        <div className="container">
          <div className="copyright">
            <span>Copyright</span> 
            <strong className="px-1 sitename">Redes Sociales en Costa Rica</strong> 
            <span>All Rights Reserved</span>
          </div>
          <div className="credits">
            Designed by{" "}
            <a 
              href="https://bootstrapmade.com/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              BootstrapMade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

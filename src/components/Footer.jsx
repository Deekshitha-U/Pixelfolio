import {
  Instagram,
  Github,
  Linkedin,
  Facebook,
  Twitter,
  ArrowUp,
  ArrowUpRight,
} from "lucide-react";

function Footer({ onInfo }) {
  const openSocial = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="footer" id="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <button
            className="brand footer-logo"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            <span className="brand-mark">
              <span></span>
              <span></span>
            </span>

            <span>Pixelfolio</span>
          </button>

          <p>
            A visual space for discovering photography,
            creativity and ideas worth remembering.
          </p>

          <div className="social-links">
            <button
              onClick={() =>
                openSocial("https://www.instagram.com/")
              }
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </button>

            <button
              onClick={() =>
                openSocial("https://github.com/")
              }
              aria-label="GitHub"
            >
              <Github size={18} />
            </button>

            <button
              onClick={() =>
                openSocial("https://www.linkedin.com/")
              }
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </button>

            <button
              onClick={() =>
                openSocial("https://x.com/")
              }
              aria-label="X"
            >
              <Twitter size={18} />
            </button>

            <button
              onClick={() =>
                openSocial("https://www.facebook.com/")
              }
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </button>
          </div>
        </div>

        <div className="footer-column">
          <h4>Discover</h4>

          <button onClick={() => onInfo("Explore", "Explore lets you browse the full Pixelfolio collection and discover visual stories from different categories.")}>
            Explore
          </button>

          <button onClick={() => onInfo("Trending", "Trending brings recently featured visuals closer to the top so you can discover what is attracting attention.")}>
            Trending
          </button>

          <button onClick={() => onInfo("Categories", "Browse visual inspiration through Nature, Architecture, City, Travel, Lifestyle and Abstract collections.")}>
            Categories
          </button>

          <button onClick={() => onInfo("Collections", "Collections are designed to help you group visual ideas around themes, moods and creative interests.")}>
            Collections
          </button>
        </div>

        <div className="footer-column">
          <h4>Pixelfolio</h4>

          <button onClick={() => onInfo("About", "Pixelfolio is a concept visual gallery created to make discovering and saving creative imagery simple and enjoyable.")}>
            About
          </button>

          <button onClick={() => onInfo("Contact", "For questions, collaborations or feedback, you can reach the Pixelfolio team through the contact channel of your choice.")}>
            Contact
          </button>

          <button onClick={() => onInfo("Careers", "Future opportunities at Pixelfolio can include design, development, community and creative roles.")}>
            Careers
          </button>

          <button onClick={() => onInfo("Help", "Use search, categories, save, like and comments to interact with the gallery.")}>
            Help
          </button>
        </div>

        <div className="footer-column">
          <h4>Legal</h4>

          <button onClick={() => onInfo("Terms", "These terms describe the general expectations for using the Pixelfolio visual gallery.")}>
            Terms
          </button>

          <button onClick={() => onInfo("Privacy", "Pixelfolio is designed around a simple browsing experience. Account and interaction information should be handled responsibly.")}>
            Privacy
          </button>

          <button onClick={() => onInfo("Cookies", "Cookies can be used by websites to remember preferences and improve the browsing experience.")}>
            Cookies
          </button>

          <button onClick={() => onInfo("Accessibility", "Pixelfolio aims to provide a responsive and keyboard-friendly visual browsing experience.")}>
            Accessibility
          </button>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Pixelfolio. All rights reserved.</p>

        <button
          className="back-top"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          Back to top
          <ArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
}

export default Footer;
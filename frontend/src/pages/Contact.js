const Contact = () => (
  <>
    <section id="contact" className="contact-cta wrap">
      <span className="mono muted">Contact</span>
      <h2 className="contact-cta__title">Hiring for a hard B2B problem? Let’s talk.</h2>
      <a href="mailto:nathmrinmoy001@gmail.com" className="contact-cta__email">
        nathmrinmoy001@gmail.com
      </a>
      <div className="actions">
        <a
          href="https://www.linkedin.com/in/nathmrinmoy/"
          target="_blank"
          rel="noopener noreferrer"
          className="pill"
        >
          LinkedIn <span aria-hidden="true">↗</span>
        </a>
        <a href="/Resume.pdf" download="Mrinmoy_Nath_Resume.pdf" className="pill">
          Download resume <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
    <footer className="site-footer">
      <div className="site-footer__inner wrap mono">
        <span>© {new Date().getFullYear()} Mrinmoy Nath</span>
        <span>Bangalore, India</span>
      </div>
    </footer>
  </>
);

export default Contact;

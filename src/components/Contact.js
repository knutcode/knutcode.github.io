import { ContactSection, ContactLink, ContactTextWrapper, ContactContainer } from "../components-styled/ContactStyles";

const Contact = () => {
  function copyNumber() {
    navigator.clipboard.writeText("47276493");
  }

  const handleClick = (e) => {
    e.currentTarget.classList.add("wave-hand");
  };

  return (
    <>
      <ContactSection id="contact">
        <h2 className="section-title">Get in touch</h2>
        <ContactContainer>
          <ContactTextWrapper>
            <img
              onClick={handleClick}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Emoji_u1f44b.svg/2048px-Emoji_u1f44b.svg.png"
              alt="Waving hand."
            />
          </ContactTextWrapper>
          <ContactTextWrapper>
            <ContactLink href={void 0} onClick={copyNumber}>
              <i className="fa-solid fa-phone footer--icon"></i>47276493
            </ContactLink>

            <ContactLink href="mailto:knutc.kodehode@gmail.com">
              <i className="fa-solid fa-envelope footer--icon"></i>knutc.kodehode@gmail.com
            </ContactLink>

            <ContactLink href="https://www.linkedin.com/in/knut-c-johnsen/" target="_blank">
              <i className="fa-brands fa-linkedin footer--icon"></i>LinkedIn
            </ContactLink>

            <ContactLink href="https://github.com/knutcode" target="_blank">
              <i className="fa-brands fa-github footer--icon"></i>GitHub
            </ContactLink>
          </ContactTextWrapper>
        </ContactContainer>
      </ContactSection>
    </>
  );
};

export default Contact;

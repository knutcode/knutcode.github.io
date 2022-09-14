import { ContactSection, ContactLink, ContactTextWrapper, ContactContainer } from "../components-styled/ContactStyles";
import "./Contact.css";

const Contact = () => {
  function copyNumber() {
    navigator.clipboard.writeText("47276493");
  }

  return (
    <>
      <ContactSection id="contact">
        <h2 className="section-title">Get in touch</h2>
        <ContactContainer>
          <ContactTextWrapper>
            <img
              className="wave-hand"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Emoji_u1f44b.svg/2048px-Emoji_u1f44b.svg.png"
              alt="Waving hand."
            />
          </ContactTextWrapper>

          <ContactTextWrapper>
            <ContactLink href={void 0} onClick={copyNumber}>
              <i className="fa-solid fa-phone"></i>47276493
            </ContactLink>

            <ContactLink href="mailto:knutc.kodehode@gmail.com">
              <i className="fa-solid fa-envelope"></i>knutc.kodehode@gmail.com
            </ContactLink>

            <ContactLink href="https://www.linkedin.com/in/knut-c-johnsen/" target="_blank">
              <i className="fa-brands fa-linkedin"></i>LinkedIn
            </ContactLink>

            <ContactLink href="https://github.com/knutcode" target="_blank">
              <i className="fa-brands fa-github"></i>GitHub
            </ContactLink>
          </ContactTextWrapper>
        </ContactContainer>
      </ContactSection>
    </>
  );
};

export default Contact;

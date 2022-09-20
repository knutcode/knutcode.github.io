import { ContactSection, ContactLink, ContactTextWrapper, ContactContainer } from './styles';
import {
	contact_img,
	contact_link_email,
	contact_link_github,
	contact_link_linkedin,
	contact_link_phone,
	contact_title,
} from '../../../language/en';
import './index.css';

const Contact = () => {
	function copyNumber() {
		navigator.clipboard.writeText('47276493');
	}

	return (
		<>
			<ContactSection id="contact">
				<h2 className="section-title">{contact_title}</h2>
				<ContactContainer>
					<ContactTextWrapper>
						<img
							className="wave-hand"
							src={contact_img}
							alt="Waving hand."
						/>
					</ContactTextWrapper>

					<ContactTextWrapper>
						<ContactLink
							href={void 0}
							onClick={copyNumber}
						>
							<i className={contact_link_phone.icon}></i>
							{contact_link_phone.text}
						</ContactLink>

						<ContactLink href={contact_link_email.href}>
							<i className={contact_link_email.icon}></i>
							{contact_link_email.text}
						</ContactLink>

						<ContactLink
							href={contact_link_linkedin.href}
							target="_blank"
						>
							<i className={contact_link_linkedin.icon}></i>
							{contact_link_linkedin.text}
						</ContactLink>

						<ContactLink
							href={contact_link_github.href}
							target="_blank"
						>
							<i className={contact_link_github.icon}></i>
							{contact_link_github.text}
						</ContactLink>
					</ContactTextWrapper>
				</ContactContainer>
			</ContactSection>
		</>
	);
};

export default Contact;

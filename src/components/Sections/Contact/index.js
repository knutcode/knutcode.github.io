import './index.css';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ContactSection, ContactLink, ContactTextWrapper, ContactContainer, PhoneCopied } from './styles';
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
	const [activeCopied, setActiveCopied] = useState('');

	const { t } = useTranslation('contact');

	function copyNumber() {
		navigator.clipboard.writeText('47276493');
		setActiveCopied('copied');
		setTimeout(() => {
			setActiveCopied('');
		}, 1500);
	}

	return (
		<>
			<ContactSection id="contact">
				<h2 className="section-title">{t('title')}</h2>
				<ContactContainer>
					<ContactTextWrapper>
						<img
							className="wave-hand"
							src={t('img')}
							alt="Waving hand."
						/>
					</ContactTextWrapper>

					<ContactTextWrapper>
						<ContactLink
							href={void 0}
							onClick={copyNumber}
						>
							<FaPhoneAlt />
							{t('phone_text')}
							<PhoneCopied className={activeCopied === 'copied' ? 'active' : ''}>{t('phone_copied')}</PhoneCopied>
						</ContactLink>

						<ContactLink href={t('email_href')}>
							<FaEnvelope />
							{t('email_text')}
						</ContactLink>

						<ContactLink
							href={t('linkedin_href')}
							target="_blank"
						>
							<FaLinkedin />
							{t('linkedin_text')}
						</ContactLink>

						<ContactLink
							href={t('github_href')}
							target="_blank"
						>
							<FaGithub />
							{t('github_text')}
						</ContactLink>
					</ContactTextWrapper>
				</ContactContainer>
			</ContactSection>
		</>
	);
};

export default Contact;

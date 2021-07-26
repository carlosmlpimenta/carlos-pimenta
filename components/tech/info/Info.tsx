import { FlexColCenter, FlexRow } from '@libs/components/flex/Flex';

import Image from '@libs/components/image/Image';
import certificates from '@images/certificates.json';
import projects from '@images/projects.json';
import styles from './Info.module.css';

function Info() {
	return (
		<FlexColCenter className={styles.box}>
			<h5>Certificates</h5>
			<FlexRow className={styles.row}>
				<a
					href='https://www.codecademy.com/profiles/carlosmlpimenta/certificates/9eb0741e5ebef1f9f58a53bfac67d3a7'
					target='_blank'
					rel='noopener noreferrer'
				>
					<Image
						src={certificates.html}
						alt='Carlos Pimenta HTML Certificate'
					/>
					<FlexColCenter>HTML</FlexColCenter>
				</a>
				<a
					href='https://www.codecademy.com/profiles/carlosmlpimenta/certificates/9a5bb1fc45b4281af1fffec93b0aaf05'
					target='_blank'
					rel='noopener noreferrer'
				>
					<Image src={certificates.css} alt='Carlos Pimenta CSS Certificate' />
					<FlexColCenter>CSS</FlexColCenter>
				</a>
			</FlexRow>
			<FlexRow className={styles.row}>
				<a
					href='https://www.codecademy.com/profiles/carlosmlpimenta/certificates/705dcb15de0da4dd9d9fc4f3274b430e'
					target='_blank'
					rel='noopener noreferrer'
				>
					<Image
						src={certificates.javascript}
						alt='Carlos Pimenta JavaScript Certificate'
					/>
					<FlexColCenter>JavaScript</FlexColCenter>
				</a>
				<a
					href='https://www.codecademy.com/profiles/carlosmlpimenta/certificates/af00e5032d0a68cc84879983f5d8333b'
					target='_blank'
					rel='noopener noreferrer'
				>
					<Image
						src={certificates.react}
						alt='Carlos Pimenta React Certificate'
					/>
					<FlexColCenter>React</FlexColCenter>
				</a>
			</FlexRow>
			<h5>Projects</h5>
			<a
				className={styles.project}
				href='https://charge-de-clientele.vercel.app'
				target='_blank'
				rel='noopener noreferrer'
			>
				<Image src={projects.charge} alt='Carlos Pimenta Chargè de Clientèle' />
				<FlexColCenter>Chargè de Clientèle</FlexColCenter>
			</a>
		</FlexColCenter>
	);
}

export default Info;

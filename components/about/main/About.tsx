import Image from '@libs/components/image/Image';
import Presentation from '@components/about/presentation/Presentation';
import backgrounds from '@images/backgrounds.json';
import icons from '@images/icons.json';
import { scrollIt } from '@libs/scripts/scroll';
import { setChoose } from '@redux/choose/actions';
import styles from './About.module.css';
import { useDispatch } from 'react-redux';

function About() {
	const dispatch = useDispatch();

	return (
		<>
			<Image
				src={icons.arrow}
				alt='Back to Home'
				className={styles.arrow}
				onClick={() => {
					dispatch(setChoose('home'));
					scrollIt(document.getElementById('home-card'), 1800, 'easeOutQuad');
				}}
			/>

			<Image
				src={backgrounds.pattern}
				alt='Carlos Pimenta Background'
				className={styles.aftergoingimage}
			/>
			<div className={styles.aftergoing} />

			<Image
				src={backgrounds.pattern}
				alt='Carlos Pimenta Background'
				className={styles.background}
			/>
			<div className={styles['back-gradient']} />

			<Presentation />
		</>
	);
}

export default About;

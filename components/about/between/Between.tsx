import Image from '@libs/components/image/Image';
import backgrounds from '@images/backgrounds.json';
import styles from './Between.module.css';

function Between() {
	return (
		<>
			<div className={styles.back} />
			<Image
				src={backgrounds.going}
				alt='Carlos Pimenta Background'
				className={styles.going}
			/>
			<Image
				src={backgrounds.going}
				alt='Carlos Pimenta Background'
				className={styles.going2}
			/>
		</>
	);
}

export default Between;

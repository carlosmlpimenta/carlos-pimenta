import { FlexCol } from '@libs/components/flex/Flex';
import styles from './Presentation.module.css';

function Presentation() {
	return (
		<FlexCol className={styles.box}>
			<h1 className={styles.title}>CARLOS PIMENTA</h1>
			<h2 className={styles['sub-title']}>
				Front End Developer | Technology Enthusiast
			</h2>
		</FlexCol>
	);
}

export default Presentation;

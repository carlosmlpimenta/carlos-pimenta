import { FlexCol, FlexColCenter, FlexRow } from '@libs/components/flex/Flex';

import Image from '@libs/components/image/Image';
import Info from '../info/Info';
import Technologies from '../technologies/Technologies';
import backgrounds from '@images/backgrounds.json';
import icons from '@images/icons.json';
import { setChoose } from '@redux/choose/actions';
import styles from './Tech.module.css';
import { useDispatch } from 'react-redux';

function Tech() {
	const dispatch = useDispatch();

	return (
		<FlexColCenter className={styles.outer}>
			<Image
				src={icons.arrow}
				alt='Back to Home'
				className={styles.arrow}
				onClick={() => dispatch(setChoose('home'))}
			/>
			<Image
				src={backgrounds.tech}
				alt='Carlos Pimenta Background'
				className={styles.background}
			/>
			<div className={styles['back-gradient']} />
			<FlexRow className={styles.box}>
				<Technologies />
				<Info />
			</FlexRow>
		</FlexColCenter>
	);
}

export default Tech;

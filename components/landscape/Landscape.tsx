import { useEffect, useMemo } from 'react';

import { FlexColCenter } from '@libs/components/flex/Flex';
import Image from '@libs/components/image/Image';
import icons from '@images/icons.json';
import profile from '@images/profile.json';
import styles from './Landscape.module.css';

function Landscape() {
	let isLandscape = false;

	useEffect(() => {
		isLandscape = window.innerHeight >= window.innerWidth;
	}, [window.innerHeight, window.innerWidth]);

	return (
		<FlexColCenter
			className={`${styles.block} ${isLandscape ? styles.hide : ''}`}
		>
			<Image
				src={profile.logo}
				alt='Carlos Pimenta Logo'
				className={styles.logo}
			/>
			<h1 className={styles.title}>CARLOS PIMENTA</h1>
			<p className={styles.info}>
				For a better experience please use this website in Landscape Mode
			</p>
			<Image
				src={icons.landscape}
				alt='Carlos Pimenta Landscape'
				className={styles.landscape}
			/>
		</FlexColCenter>
	);
}

export default Landscape;

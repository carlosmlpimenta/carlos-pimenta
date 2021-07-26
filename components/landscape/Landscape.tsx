import { useEffect, useMemo, useState } from 'react';

import { FlexColCenter } from '@libs/components/flex/Flex';
import Image from '@libs/components/image/Image';
import icons from '@images/icons.json';
import profile from '@images/profile.json';
import styles from './Landscape.module.css';

function Landscape() {
	const [isLandscape, setLandscape] = useState(true);

	useEffect(() => {
		const changeWindowSize = () => {
			setLandscape(window.innerWidth > window.innerHeight);
		};

		changeWindowSize();

		window.addEventListener('orientationchange', changeWindowSize);
		window.addEventListener('resize', changeWindowSize);

		return () => {
			window.removeEventListener('orientationchange', changeWindowSize);
			window.removeEventListener('resize', changeWindowSize);
		};
	}, []);

	return (
		<FlexColCenter
			className={`${styles.block} ${isLandscape ? styles.hide : styles.show}`}
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

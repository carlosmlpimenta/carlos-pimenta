import { useEffect, useState } from 'react';

import { FlexColCenter } from '@libs/components/flex/Flex';
import Image from '@libs/components/image/Image';
import icons from '@images/icons.json';
import profile from '@images/profile.json';
import styles from './Loader.module.css';

function Loader() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => setLoading(false), 1000);

		return () => setLoading(true);
	}, []);

	return (
		<FlexColCenter className={`${styles.block} ${loading ? '' : styles.hide}`}>
			<Image
				src={profile.logo}
				alt='Carlos Pimenta Logo'
				className={styles.logo}
			/>
			<h1 className={styles.title}>CARLOS PIMENTA</h1>
			<Image
				src={icons.loading}
				alt='Carlos Pimenta Loading'
				className={styles.loading}
			/>
		</FlexColCenter>
	);
}

export default Loader;

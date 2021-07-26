import { useEffect, useState } from 'react';

import { FlexColCenter } from '@libs/components/flex/Flex';
import styles from './Loader.module.css';

function Loader() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => setLoading(false), 1000);

		return () => setLoading(true);
	}, []);

	return <FlexColCenter className={styles.block}></FlexColCenter>;
}

export default Loader;

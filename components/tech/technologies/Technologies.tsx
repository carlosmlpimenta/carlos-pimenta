import { FlexColCenter } from '@libs/components/flex/Flex';
import styles from './Technologies.module.css';

function Technologies() {
	return (
		<FlexColCenter className={styles.box}>
			<h5>TECHNOLOGIES</h5>
			<span>HTML</span>
			<span>CSS</span>
			<span>JavaScript</span>
			<span>TypeScript</span>
			<span>Redux</span>
			<span>React.js</span>
			<span>Next.js</span>
			<span>GIT</span>
		</FlexColCenter>
	);
}

export default Technologies;

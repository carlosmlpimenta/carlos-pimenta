import { FlexRowCenter } from '@libs/components/flex/Flex';
import Image from '@libs/components/image/Image';
import Info from '@components/contacts/info/Info';
import backgrounds from '@images/backgrounds.json';
import icons from '@images/icons.json';
import { setChoose } from '@redux/choose/actions';
import styles from './Contacts.module.css';
import { useDispatch } from 'react-redux';

function Contacts() {
	const dispatch = useDispatch();

	return (
		<>
			<Image
				src={icons.arrow}
				alt='Back to Home'
				className={styles.arrow}
				onClick={() => {
					dispatch(setChoose('home'));
				}}
			/>

			<Image
				src={backgrounds.contacts}
				alt='Carlos Pimenta Background'
				className={styles.background}
			/>
			<div className={styles['back-gradient']} />

			<FlexRowCenter className={styles.box}>
				<Info />
			</FlexRowCenter>
		</>
	);
}

export default Contacts;

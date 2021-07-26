import { useDispatch, useSelector } from 'react-redux';

import { FlexRowCenter } from '@libs/components/flex/Flex';
import Image from '@libs/components/image/Image';
import { RootState } from '@redux/store';
import icons from '@images/icons.json';
import { scrollIt } from '@libs/scripts/scroll';
import { setChoose } from '@redux/choose/actions';
import styles from './IconBar.module.css';
import { useEffect } from 'react';

function IconBar() {
	const dispatch = useDispatch();
	const choose = useSelector((state: RootState) => state.choose.choose);

	useEffect(() => {
		const keep = () => {
			window.scrollTo(0, 0);
			document.getElementById(choose + '-card')?.scrollIntoView();
		};

		setTimeout(keep, 50);

		window.addEventListener('resize', keep);

		return () => {
			window.removeEventListener('resize', keep);
		};
	}, [choose]);

	const goToAbout = () => {
		dispatch(setChoose('about'));
		scrollIt(document.getElementById('about-card'), 1800, 'easeOutQuad');
	};

	const goToTech = () => {
		dispatch(setChoose('tech'));
	};

	const goToContacts = () => {
		dispatch(setChoose('contacts'));
	};

	const s = (r: string) => (r === choose ? styles.active : '');

	return (
		<FlexRowCenter justify='around' className={styles.bar}>
			<Image className={s('home')} src={icons.home} alt='Home' />
			<Image
				className={s('about')}
				src={icons.about}
				alt='About Me'
				onClick={goToAbout}
			/>
			<Image
				className={s('tech')}
				src={icons.tech}
				alt='Technologies & Projects'
				onClick={goToTech}
			/>
			<Image
				className={s('contacts')}
				src={icons.contacts}
				alt='Contacts'
				onClick={goToContacts}
			/>
		</FlexRowCenter>
	);
}

export default IconBar;

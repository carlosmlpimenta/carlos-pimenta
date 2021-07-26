import { FlexColCenter, FlexRowCenter } from '@libs/components/flex/Flex';

import styles from './Info.module.css';

function Info() {
	return (
		<FlexColCenter className={styles.box}>
			<h5>Contacts</h5>
			<FlexRowCenter className={styles.contacts}>
				<a href='tel:+351926590959'>
					<i className='fas fa-mobile-alt' /> +351 926 590 959
				</a>
				<a href='mailto:carlosmlpimenta@gmail.com'>
					<i className='fas fa-envelope' /> carlosmlpimenta@gmail.com
				</a>
			</FlexRowCenter>
			<h5>Socials</h5>
			<FlexRowCenter className={styles.socials}>
				<a
					href='https://www.facebook.com/carlos.miguel.106902'
					target='_blank'
					rel='noopener noreferrer'
				>
					<i className='fab fa-facebook' />
				</a>
				<a
					href='https://www.instagram.com/carlosmiglp/'
					target='_blank'
					rel='noopener noreferrer'
				>
					<i className='fab fa-instagram' />
				</a>
				<a
					href='https://www.linkedin.com/in/carlos-pimenta-b550b6217/'
					target='_blank'
					rel='noopener noreferrer'
				>
					<i className='fab fa-linkedin' />
				</a>
				<a
					href='https://github.com/carlosmlpimenta'
					target='_blank'
					rel='noopener noreferrer'
				>
					<i className='fab fa-github	' />
				</a>
			</FlexRowCenter>
		</FlexColCenter>
	);
}

export default Info;

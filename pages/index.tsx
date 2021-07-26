import { Suspense, useState } from 'react';

import About from '@components/about/main/About';
import Between from '@components/about/between/Between';
import { Canvas } from '@react-three/fiber';
import Computer from '@components/models/Computer';
import Contacts from '@components/contacts/main/Contats';
import Head from 'next/head';
import IconBar from '@components/home/icon-bar/IconBar';
import Image from '@libs/components/image/Image';
import Landscape from '@components/landscape/Landscape';
import Lines from '@components/home/lines/Lines';
import Loader from '@components/loader/Loader';
import Presentation from '@components/home/presentation/Presentation';
import { RootState } from '@redux/store';
import Tech from '@components/tech/main/Tech';
import backgrounds from '@images/backgrounds.json';
import profile from '@images/profile.json';
import styles from '@styles/pages/index.module.css';
import { useSelector } from 'react-redux';

function index() {
	const choose = useSelector((state: RootState) => state.choose.choose);
	const [show, setShow] = useState(true);

	if (choose === 'home' && !show) setTimeout(() => setShow(true), 500);

	if (choose !== 'home') setTimeout(() => setShow(false), 1000);

	return (
		<main>
			<Head>
				<title>Carlos Pimenta</title>
				<meta
					name='viewport'
					content='width=device-width, user-scalable=0, initial-scale=1.0, maximum-scale=1.0'
				/>
			</Head>
			<Loader />
			<Landscape />
			<section
				id='home-card'
				className={`${styles.card} ${styles.home} ${
					choose === 'tech' ? styles.left : styles.show
				}`}
			>
				<Image
					src={backgrounds.home}
					alt='Carlos Pimenta Background'
					className={styles.background}
				/>
				<div className={styles['back-gradient']} />

				<Image
					src={profile.logo}
					alt='Carlos Pimenta Logo'
					className={styles.logo}
				/>

				<Lines />
				<Presentation />
				<IconBar />

				<div className={styles.computer}>
					{show && (
						<Canvas camera={{ position: [0, 0, 9], fov: 60 }}>
							<ambientLight intensity={0.3} />
							<directionalLight position={[10, 10, 5]} intesity={1} />
							<directionalLight position={[0, 10, 5]} intesity={1} />
							<spotLight position={[0, 1000, 0]} intesity={1} />
							<Suspense fallback={null}>
								<Computer />
							</Suspense>
						</Canvas>
					)}
				</div>

				<Image
					src={backgrounds.home}
					alt='Carlos Pimenta Background'
					className={styles.pregoingimage}
				/>
				<div className={styles.pregoing} />
			</section>
			<Between />
			<section id='about-card' className={`${styles.card} ${styles.about}`}>
				<About />
			</section>
			<section
				id='tech-card'
				className={`${styles.card} ${styles.tech} ${
					choose === 'tech' ? styles.show : styles.right
				}`}
			>
				<Tech />
			</section>
			<section
				id='contacts-card'
				className={`${styles.card} ${styles.contacts} ${
					choose === 'contacts' ? styles.showc : styles.hidec
				}`}
			>
				<Contacts />
			</section>
		</main>
	);
}

const a = (
	<div>
		Ícones feitos por{' '}
		<a href='https://www.flaticon.com/br/autores/iconixar' title='iconixar'>
			iconixar
		</a>{' '}
		from{' '}
		<a href='https://www.flaticon.com/br/' title='Flaticon'>
			www.flaticon.com
		</a>
	</div>
);

export default index;

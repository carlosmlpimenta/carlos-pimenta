import {
	FlexCol,
	FlexColCenter,
	FlexRowCenter
} from '@libs/components/flex/Flex';

import Image from '@libs/components/image/Image';
import icons from '@images/icons.json';
import profile from '@images/profile.json';
import styles from './Presentation.module.css';
import { useState } from 'react';

function Presentation() {
	const [choose, setChoose] = useState('about');

	const s = (r: string) => (r === choose ? styles.active : '');

	return (
		<FlexRowCenter className={styles.box}>
			<FlexColCenter justify='start'>
				<Image src={profile.pic} alt='Carlos Pimenta' className={styles.pic} />
				<h1 className={styles.title}>CARLOS PIMENTA</h1>
			</FlexColCenter>
			<FlexRowCenter>
				<FlexCol className={styles.info}>
					<FlexCol
						className={`${styles.text} ${
							choose === 'about' ? styles.show : `${styles.hide} ${styles.top}`
						}`}
					>
						<h5>About Me</h5>
						<p>
							I'm a Computer Science student that didn't fit well with the
							course and i'm trying to make my way into the business world
							learning what I need by myself.
						</p>
						<p>
							I've been connected with technologies since a young age, always
							curoius to find new ways to do what I like and innovate.
						</p>
						<p>
							Now I'm trying to get an edge on every one else in different ways,
							like trying to get ahead and become familiar with new technologies
							that will become the future. I'm also always looking for advice
							from the best people I know in the field and weight it according
							to my own knowledge.
						</p>
					</FlexCol>

					<FlexCol
						className={`${styles.text} ${
							choose === 'studies'
								? styles.show
								: `${styles.hide} ${
										choose === 'about' ? styles.bottom : styles.top
								  }`
						}`}
					>
						<h5>Studies</h5>
						<p>
							I decided to enroll in the Computer Science course because of my
							interest in technology and software developing. However it has
							been a very different experience from what I expected.
						</p>
						<p>
							This feeling comes from several different caracteristics of this
							course that I do not agree with, starting with the technologies
							taught, the problem being that most of them aren't used in the
							"Real World", normally being very old and clunky to use.
						</p>
						<p>
							I also feel like it mostly doesn't prepare us for real world
							developing nor team enviroments, focusing on unrelastic projects
							created to test specific features of the language instead of
							something that has an actual purpose.
						</p>
						<p>
							I felt more enganged in the classes where we would discuss theory
							or team management than on pratical ones, since I felt that there
							I was actually learning a skill I would use in the future.
						</p>
						<p>
							My college career ended with 18 classes complete out of 30, when I
							decided to invest in myself professionally and learn the
							technologies required to accomplish that.
						</p>
					</FlexCol>

					<FlexCol
						className={`${styles.text} ${
							choose === 'work'
								? styles.show
								: `${styles.hide} ${styles.bottom}`
						}`}
					>
						<h5>Work</h5>
						<p>
							After I decided to halt my studies, I started investigating and
							looking for advice on where to turn to in terms of the best
							technologies to learn and perfect to have an edge in the Software
							Engineering World.
						</p>
						<p>
							I experimented with several different programming languages,
							finding more interest in Front End Development for it's straight
							forward process and direct feedback loop.
						</p>
						<p>
							Inside this area I developed a taste for React and it's libraries.
							Given this, I looked for the best technologies to add to it and
							started exploring the most relevant technologies.
						</p>
						<p>
							I know find myself in a position where I feel comfortable as a
							Developer and I'm looking forward to start applying what I learned
							in a relevant and meaningfull project.
						</p>
					</FlexCol>
				</FlexCol>
				<FlexColCenter justify='around' className={styles.bar}>
					<Image
						className={s('about')}
						src={icons.about}
						alt='About'
						onClick={() => setChoose('about')}
					/>
					<Image
						className={s('studies')}
						src={icons.studies}
						alt='Studies'
						onClick={() => setChoose('studies')}
					/>
					<Image
						className={s('work')}
						src={icons.work}
						alt='Work'
						onClick={() => setChoose('work')}
					/>
				</FlexColCenter>
			</FlexRowCenter>
		</FlexRowCenter>
	);
}

export default Presentation;

import { useGLTF } from '@react-three/drei';
import { useMemo } from 'react';
import useMouse from '../../libs/hooks/useMouse';

const divider = 25;
const maxP = 100 / divider;
const maxAngle = Math.PI / 4;
const minAngle = maxAngle / maxP;
const relativeAngle = maxAngle - minAngle;
const mid = 50;

const getAngle = (percent: number, pos: boolean): number => {
	let p = percent * 100;

	if (p === mid) return 0;

	if (p > mid) {
		p = p - mid;
		p = p * (100 / mid);

		p = 100 - p;
		p = p / divider;

		if (p < 1) {
			return relativeAngle;
		}

		return maxAngle / p - minAngle;
	}

	if (p < mid) {
		if (!pos) {
			p = p + 67;

			p = p / ((mid + 67) / mid);

			p = p * (100 / mid);

			p = p / divider;
		} else {
			p = p * (100 / mid);

			p = p / divider;
		}

		if (p < 1) {
			return -relativeAngle;
		}
		return -(maxAngle / p - minAngle);
	}

	return 0;

	/*
	if (p === 0) return pos ? 0 : -relativeAngle;
	if (p === 100) return pos ? relativeAngle : 0;

	if (pos) p = 100 - p;

	p = p / divider;

	if (p < 1) {
		return pos ? relativeAngle : -relativeAngle;
	}

	const out = maxAngle / p - minAngle;

	return pos ? out : -out;
  */
};

function Computer() {
	const gltf = useGLTF('/models/computer2/scene.gltf', true);

	const { x, y } = useMouse();
	const [width, height] = useMemo(
		() => [window.innerWidth, window.innerHeight],
		[window.innerWidth, window.innerHeight]
	);

	let angleX = 0,
		angleY = 0;

	if (x !== null && y !== null) {
		angleX = getAngle((x - width * 0.4) / (width * 0.6), false);
		angleY = getAngle(y / height, true);
	}

	return (
		<group position={[0, -1, 0]} rotation={[angleY, -Math.PI / 2 + angleX, 0]}>
			<mesh>
				<primitive object={gltf.scene} dispose={null} />
			</mesh>
		</group>
	);
}

export default Computer;

import { useEffect, useState } from 'react';

export type MousePosition = {
	x: number | null;
	y: number | null;
};

function useMouse() {
	const [mousePosition, setMousePosition] = useState<MousePosition>({
		x: null,
		y: null
	});

	useEffect(() => {
		function handle(e: MouseEvent) {
			setMousePosition({ x: e.pageX, y: e.pageY });
		}

		document.addEventListener('mousemove', handle);
		return () => document.removeEventListener('mousemove', handle);
	});

	return mousePosition;
}

export default useMouse;

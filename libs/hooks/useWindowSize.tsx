import React from 'react';

export default function useWindowSize(): { width: number; height: number } {
	const isSSR = typeof window === 'undefined';

	if (isSSR) return { width: 1080, height: 1920 };

	const [windowSize, setWindowSize] = React.useState({
		width: window.innerWidth,
		height: window.innerHeight
	});

	function changeWindowSize() {
		setWindowSize({ width: window.innerWidth, height: window.innerHeight });
	}

	React.useEffect(() => {
		changeWindowSize();

		window.addEventListener('resize', changeWindowSize);

		return () => {
			window.removeEventListener('resize', changeWindowSize);
		};
	}, []);

	return windowSize;
}

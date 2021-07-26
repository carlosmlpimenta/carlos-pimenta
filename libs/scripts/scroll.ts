export const scrollIt = function (
	destination: number | HTMLElement | null,
	duration = 200,
	easing: 'linear' | 'easeOutQuad' = 'linear',
	callback?: any
) {
	const easings = {
		linear(t: any) {
			return t;
		},
		easeOutQuad(t: any) {
			return t * (2 - t);
		}
	};

	if (destination === null) return;

	const start = window.pageYOffset;
	const startTime =
		'now' in window.performance ? performance.now() : new Date().getTime();

	const documentHeight = Math.max(
		document.body.scrollHeight,
		document.body.offsetHeight,
		document.documentElement.clientHeight,
		document.documentElement.scrollHeight,
		document.documentElement.offsetHeight
	);
	const windowHeight =
		window.innerHeight ||
		document.documentElement.clientHeight ||
		document.getElementsByTagName('body')[0].clientHeight;
	const destinationOffset =
		typeof destination === 'number' ? destination : destination.offsetTop;
	const destinationOffsetToScroll = Math.round(
		documentHeight - destinationOffset < windowHeight
			? documentHeight - windowHeight
			: destinationOffset
	);

	if ('requestAnimationFrame' in window === false) {
		window.scroll(0, destinationOffsetToScroll);
		if (callback) {
			callback();
		}
		return;
	}

	function scroll() {
		const now =
			'now' in window.performance ? performance.now() : new Date().getTime();
		const time = Math.min(1, (now - startTime) / duration);
		const timeFunction = easings[easing](time);
		window.scroll(
			0,
			Math.ceil(timeFunction * (destinationOffsetToScroll - start) + start)
		);

		if (window.pageYOffset === destinationOffsetToScroll) {
			if ((destination as HTMLElement).focus)
				(destination as HTMLElement).focus();
			if (callback) {
				callback();
			}
			return;
		}

		requestAnimationFrame(scroll);
	}

	scroll();
};

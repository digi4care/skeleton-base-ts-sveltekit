import DOMPurify from 'dompurify';

/**
 * Sanitize markup or text when used inside dangerouslysetInnerHTML
 */
export const sanitize = (content: string | Node) => {
	return 'undefined' !== typeof window ? DOMPurify.sanitize(content) : content;
};

/**
 * Get Formatted Date.
 */
export const getFormattedDate = (theDate = '', locales = 'en-us') => {
	const options: Intl.DateTimeFormatOptions = {
		weekday: 'long',
		year: 'numeric',
		month: 'short',
		day: 'numeric'
	};
	return new Date(theDate).toLocaleDateString(locales, options);
};

/**
 * Get path name from url.
 */
export const getPathNameFromUrl = (url = '') => {
	// console.dir(new URL(url));
	try {
		return new URL(url).pathname;
	} catch (e) {
		return '';
	}
};

/**
 * Smooth Scroll.
 *
 * Scrolls the given element to the top of the screen
 * minus the topOffset( when provided ), smoothly(with animation).
 */
export const smoothScroll = (
	targetEl: Element,
	topOffset: number = 0,
	duration: number = 500
): void => {
	if (!targetEl) {
		return;
	}

	const targetPosition = targetEl.getBoundingClientRect().top - topOffset;
	const startPosition = window.scrollY; // Current height of the window.
	let startTime: number | null = null;

	const animationCallBack = (currentTime: number) => {
		if (startTime === null) {
			startTime = currentTime;
		}
		const timeElapsed = currentTime - startTime;
		const runPosition = getAnimateWithEasePosition(
			timeElapsed,
			startPosition,
			targetPosition,
			duration
		);
		window.scrollTo(0, runPosition);
		if (timeElapsed < duration) {
			window.requestAnimationFrame(animationCallBack);
		}
	};
	window.requestAnimationFrame(animationCallBack);
};

/**
 * Animation With Ease Position.
 */
const getAnimateWithEasePosition = (
	timeElapsed: number,
	startPosition: number,
	targetPosition: number,
	duration: number
): number => {
	timeElapsed /= duration / 2;
	if (1 > timeElapsed) {
		return (targetPosition / 2) * timeElapsed * timeElapsed + startPosition;
	}
	timeElapsed--;
	return -((targetPosition / 2) * (timeElapsed * (timeElapsed - 2) - 1)) + startPosition;
};

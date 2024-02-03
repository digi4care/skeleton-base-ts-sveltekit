export class StringManager {
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	constructor() {}

	/**
	 * Get the basename from a filename.
	 * @date 2022-08-04
	 * @param {string} path
	 * @returns {string} Basename, so we can use this as a slug
	 */
	public static slugFromPath(path: string): string {
		return path.match(/([\w-]+)\.(svelte\.md|md|svx)/i)?.[1] ?? null;
	}

	/**
	 * Convert string to a slug
	 * @date 2022-08-04
	 * @param {string} value
	 * @returns {string}
	 */
	public static convertToSlug(value: string): string {
		return value
			.toLowerCase()
			.replace(/[^\w ]+/g, '')
			.replace(/ +/g, '-');
	}

	/**
	 * Convert a string to a sentence
	 * @date 2022-08-04
	 * @param {string} value
	 * @returns {string}
	 */
	public static convertToSentence(value: string): string {
		return `${value.charAt(0).toUpperCase()}${value
			.slice(1)
			.toLocaleLowerCase()
			.replace(/-/g, ' ')}`;
	}

	/**
	 * Replace underscores for whitespace in a string and make it all uppercase.
	 * @date 2022-07-07
	 * @param {string} text:string
	 * @returns {string}
	 */
	public static formatText(text: string): string {
		const replacedText: string = text.replace(/_/g, ' ');
		return replacedText.charAt(0).toUpperCase() + replacedText.slice(1);
	}

	/**
	 * Pseudo-random string generator
	 * http://stackoverflow.com/a/27872144/383904
	 * Default: return a random alpha-numeric string
	 *
	 * @param {number} len Desired length
	 * @param {string} an Optional (alphanumeric), "a" (alpha), "n" (numeric)
	 * @param {string} to Optional uc "uppercase" | lc "lowercase"
	 * @return {string}
	 */
	public static randomString(len: number, an: string, to: string = ''): string {
		an = an && an.toLowerCase();
		let str = '',
			i = 0,
			min = an == 'a' ? 10 : 0,
			max = an == 'n' ? 10 : 62;
		for (; i++ < len; ) {
			let r = (Math.random() * (max - min) + min) << 0;
			str += String.fromCharCode((r += r > 9 ? (r < 36 ? 55 : 61) : 48));
		}
		switch (to) {
			case 'lc':
				return 'a' == an ? str.toLowerCase() : str;
				break;
			case 'uc':
				return 'a' == an ? str.toUpperCase() : str;
				break;
		}
		return str;
	}

	/**
	 * Change text in the DOM make the Button interactive.
	 * @date 2022-07-07
	 * @param {HTMLButtonElement} e:Event
	 * @param {string} text:string
	 * @returns {void}
	 */
	public static setHTMLButtonElementTextContent(e: Event, text: string) {
		(<HTMLButtonElement>e.target).textContent = text;
	}

	/**
	 * Check if there is all whitespaces.
	 * @date 2022-07-07
	 * @param {CharacterData} nod:CharacterData
	 * @returns {boolean}
	 */
	public static isAllWhitespaces(nod: CharacterData): boolean {
		// Use ECMA-262 Edition 3 String and RegExp features
		return !/[^\t\n\r ]/.test(nod.textContent);
	}

	/**
	 * Check if the node ignorable.
	 * @date 2022-07-07
	 * @param {Node} nod:Node
	 * @returns {boolean}
	 */
	public static isIgnorable(nod: Node): boolean {
		return (
			nod.nodeType == 8 || // A comment node
			(nod.nodeType == 3 && StringManager.isAllWhitespaces(nod as CharacterData))
		); // a text node, all ws
	}

	/**
	 * nodeBefore
	 * @date 2022-07-07
	 * @param {Node} sib:Node
	 * @returns {HTMLInputElement | undefined | null}
	 */
	public static nodeBefore(sib: Node): HTMLInputElement | undefined | null {
		while ((sib = sib.previousSibling)) {
			if (!StringManager.isIgnorable(sib)) return sib as HTMLInputElement;
		}
		return null;
	}
}

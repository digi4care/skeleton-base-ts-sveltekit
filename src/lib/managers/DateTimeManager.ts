export class DateTime {
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	constructor() {}

	/**
	 * Determine whether string is timestamp
	 *
	 * @example
	 *
	 * isTimestamp('1606205966448'); // true
	 * isTimestamp(1606205966448); // true
	 * isTimestamp('1606205966448qwe'); // false
	 * isTimestamp('2020-11-24T08:19:26.448Z'); // false
	 *
	 * @param {string|number} n
	 * @returns {boolean}
	 */
	public static isTimestamp(n: string | number): boolean {
		const parsed = parseFloat(n);

		return !Number.isNaN(parsed) && Number.isFinite(parsed) && /^\d+\.?\d+$/.test(n);
	}

	/**
	 * Check if input is Numeric
	 * @param n number
	 * @returns boolean
	 */
	public static isNumeric(n: string | number): boolean {
		return !isNaN(parseFloat(n)) && isFinite(n);
	}

	/**
	 * Is the timestamp expired
	 * @param {number} timestamp
	 * @returns {boolean} If the timestamp has expired it will return TRUE
	 */
	public static isTimestampExpired(timestamp: number | undefined): boolean {
		if (undefined === timestamp || null === timestamp) {
			return true;
		}

		const current_date: string = +new Date() as unknown as string;
		const current_date_to_int: number = parseInt(current_date);

		// correct the timestamp if needed
		if (10 === timestamp.toString().length) {
			timestamp = timestamp * 1000;
		}

		// Compare the timestamps
		if (current_date_to_int > timestamp) {
			return true; // timestamp is expired
		} else {
			return false;
		}
	}

	/**
	 * Get a date from the timestamp
	 * @param {number} timestamp
	 * @returns {Date} Date object
	 */
	public static getDateFromTimestamp(timestamp: number | undefined): Date {
		if (undefined === timestamp || null === timestamp) {
			return null;
		}

		// correct the timestamp if needed
		if (10 === timestamp.toString().length) {
			timestamp = timestamp * 1000;
		}

		return new Date(timestamp);
	}
	/**
	 * Get a single moment in time.
	 * @date 2022-08-14
	 * @param {string} str 'date' | 'day' | 'year' | 'hours' | 'milliseconds' | 'minutes' | 'month' | 'seconds' | 'time' | 'timezoneoffset'
	 * @returns {mixed} Number | String
	 */
	public static getCurrentDate(str: string): number | string {
		const date = new Date();
		switch (str) {
			case 'date':
				return date.getDate();
				break;
			case 'day':
				return date.getDay();
				break;
			case 'year':
				return date.getFullYear();
				break;
			case 'hours':
				return date.getHours();
				break;
			case 'milliseconds':
				return date.getMilliseconds();
				break;
			case 'minutes':
				return date.getMinutes();
				break;
			case 'month':
				return date.getMonth();
				break;
			case 'seconds':
				return date.getSeconds();
				break;
			case 'time':
				return date.getTime();
			case 'timezoneoffset':
				return date.getTimezoneOffset();
			default:
				return date.getTime() + ' - ' + date.getDate();
		}
	}
}

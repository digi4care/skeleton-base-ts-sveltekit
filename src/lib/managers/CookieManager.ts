import { serialize } from 'cookie';
import type { EnumEnv, CreateCookies } from '~/models';

export class CookieManager {
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	constructor() {}

	/**
	 * Get the first value from a cookie
	 * @param {string} cookie
	 * @returns {string} Cookies first value
	 */
	public static getCookieValue(cookie: string) {
		return cookie.split(';')[0].trim();
	}

	/**
	 *
	 * Get the maxage from a cookie
	 * @param {string} cookie
	 * @returns {string} Cookies second/maxage value
	 */
	public static getCookieMaxage(cookie: string) {
		return cookie.split(';')[1].trim().replace('Max-Age=', '');
	}

	/**
	 * Delete cookies from array
	 * @date 2022-08-11
	 * @param {array} labels
	 * @returns {array} string[]
	 */
	public static deleteCookies(labels: string[]): string[] {
		const cookies = [];

		labels.forEach((element) => {
			cookies.push(CookieManager.deleteCookie(element));
		});

		return cookies;
	}

	/**
	 * Delete cookie
	 * @date 2022-08-11
	 * @param {string} label
	 * @returns {string} string
	 */
	public static deleteCookie(label: string): string {
		return serialize(label, '', {
			path: '/',
			// the cookie should expire immediately
			expires: new Date(0)
		});
	}

	/**
	 * Set a cookie
	 * @date 2022-08-12
	 * @param {string} label
	 * @param {string} input
	 * @param {enum} env 'development'|'production'
	 * @param {number} maxage
	 * @returns {string} string
	 */
	public static setCookie(
		label: string,
		input: string,
		env: EnumEnv = 'development',
		maxage: number
	): string {
		return serialize(label, input, {
			// send cookie for every page
			path: '/',
			// server side only cookie so you can't use `document.cookie`
			httpOnly: true,
			// only requests from same site can send cookies and serves to protect from CSRF
			sameSite: 'strict',
			// only sent over HTTPS
			secure: env === 'production',
			// set cookie to expire after a 1minute
			maxAge: maxage
		});
	}

	/**
	 * Set Cookies
	 * @date 2022-08-12
	 * @param {array} args
	 * @returns {array} string[]
	 */
	public static setCookies(args: CreateCookies): string[] {
		const cookies = [];

		args.forEach((element) => {
			cookies.push(
				CookieManager.setCookie(element.label, element.input, element.env, element.maxage)
			);
		});

		return cookies;
	}

	// public static getCookies(label: string, token: string, ...optionalParams: any[]): void {}
}

import { verify } from 'jsonwebtoken-esm';

import _config from '~/config';
import { DateTime } from '~/lib/class';

import type { JwtPayload, JwtPayloadUser } from '~/models/types';

export class TokenManager {
	#jwt_secret: string | undefined;
	#token: string | undefined;
	#decoded: JwtPayload | undefined;

	/**
	 * Init the TokenManger
	 * @date 2022-08-11
	 * @param {string} token
	 * @returns {any}
	 */
	constructor(token: string) {
		this.#token = token;
		this.#jwt_secret = _config.graphQlConfig.JWT_SECRET || '';
		this.#decoded = this.verify();
	}

	/**
	 * Verify jwt token
	 * @date 2022-08-09
	 * @returns {any} JwtPayload or undefined
	 */
	private verify(): any {
		// return undefined !== this.#token ? verify(this.#token, this.#jwt_secret) : undefined;
		try {
			return verify(this.#token, this.#jwt_secret);
		} catch (error) {
			return;
		}
	}
	/**
	 * Decode the token
	 * @date 2022-08-10
	 * @returns {JwtPayload}
	 */

	public decode(): JwtPayload {
		if (this.#decoded) {
			return this.#decoded;
		}
	}
	/**
	 * Validate the token - by default return True
	 * @date 2022-08-10
	 * @returns {boolean} If token has expired then return true.
	 */
	public validate(): undefined | boolean {
		const decoded = this.#decoded;
		if (decoded?.exp) {
			return DateTime.isTimestampExpired(decoded.exp);
		}
		return true;
	}
	/**
	 * Get User information from the Jwt token
	 * @date 2022-08-10
	 * @param {string} clientMutationId
	 * @returns {JwtPayloadUser}
	 */
	public getUser(clientMutationId: string): JwtPayloadUser {
		const decoded = this.#decoded;
		if (decoded?.data?.user) {
			return { ...decoded?.data?.user, clientMutationId };
		}
		return undefined;
	}
}

import { ArrayManager } from '~/lib/class';
import type { ErrorResponse } from '~/models';

export class HttpManager {
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	constructor() {}

	/**
	 * Set the correct header
	 * @date 2022-08-05
	 * @param {object} session
	 * @returns {object}
	 */
	public static setHeaders(session): object {
		const headers = {} as HeadersInit;
		headers['Content-Type'] = 'application/json';

		if (session?.tokens?.access) {
			const authToken: string = session.tokens.access;

			if (undefined !== authToken) {
				headers['Authorization'] = `Bearer ${authToken}`;
			}
		}

		// console.log('HttpManager<setHeaders> headers: ', headers);

		return headers;
	}

	public static getErrors(message: Error, status: number) {
		let _message = message.message;
		let _parsed_message: ErrorResponse['errors'];

		let isJson = true;

		try {
			_parsed_message = JSON.parse(_message);
		} catch (e) {
			isJson = false;
		}

		if (isJson) {
			_message = ArrayManager.isArray(_parsed_message) ? _parsed_message[0].message : _message;
		}

		switch (status) {
			case 400: // Bad Request
			case 401: // Unauthorized
			case 402: // Payment Required
			case 403: // Forbidden
			case 404: // Not Found
				_message = `Pagina ${_message.replace('Not found', 'niet gevonden')}`;
				break;
			case 405: // Method Not Allowed
			case 406: // Not Acceptable
			case 407: // Proxy Authentication Required
			case 408: // Request Time-Out
			case 409: // Conflict
			case 410: // Gone
			case 411: // Length Required
			case 412: // Precondition Failed
			case 413: // Request Entity Too Large
			case 414: // Request-URL Too Large
			case 415: // Unsupported Media Type
			case 500: // Server Error
			case 501: // Not Implemented
			case 502: // Bad Gateway
			case 503: // Out of Resources
			case 504: // Gateway Time-Out
			case 505: // HTTP Version Not Supported
				_message = `${_message}`;
				break;
			default:
				_message = `Page ${message.name} ${_message}`;
		}
		return _message;
	}
}

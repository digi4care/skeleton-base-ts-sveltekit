import type { Send } from '~/models/types';

export class Api {
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	constructor() {}

	/**
	 * Send formdata to a POST endpoint
	 * @date 2022-08-05
	 * @param {HTMLFormElement} form
	 * @returns {Promise<Send<_Data, _Input>>} Promise<Send<_Data, _Input>>
	 */
	public static async sendFormData<_Data, _Input>(
		form: HTMLFormElement
	): Promise<Send<_Data, _Input>> {
		const response = await fetch(form.action, {
			method: form.method,
			body: new FormData(form),
			headers: { accept: 'application/json' }
		});

		return await response.json();
	}

	/**
	 * Send JSON to a POST endpoint
	 * @date 2022-08-09
	 * @param {HTMLFormElement} form
	 * @returns {Promise<Send<_Data, _Input>>} Promise<Send<_Data, _Input>>
	 */
	public static async sendJson<_Data, _Input>(form: HTMLFormElement): Promise<Send<_Data, _Input>> {
		const response = await fetch(form.action, {
			method: form.method,
			body: JSON.stringify(form),
			headers: { accept: 'application/json' }
		});

		return await response.json();
	}
}

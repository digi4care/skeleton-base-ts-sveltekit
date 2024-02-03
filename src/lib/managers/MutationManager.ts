import type { MutationResult, MutationStore } from '$houdini';
import type { MutationResultWrapper } from '~/models/types';

export class MutationManager {
	/**
	 * Mutation Wrapper for Houdini GraphQL
	 * @date 2022-08-11
	 * @param {MutationStore<_Data, _Input>} GQL_StoreName
	 * @param {_Input} InputVariables
	 * @returns {Promise<MutationResultWrapper<_Data, _Input>>}
	 */
	public static async mutate<_Data, _Input>(
		GQL_StoreName: MutationStore<_Data, _Input>,
		InputVariables: _Input
	): Promise<MutationResultWrapper<_Data, _Input>> {
		let wrapper: MutationResultWrapper<_Data, _Input> = {
			code: 400,
			response: {
				data: undefined,
				errors: [],
				isFetching: false,
				isOptimisticResponse: false,
				variables: undefined
			}
		};

		await GQL_StoreName.mutate({
			fetch,
			variables: { ...InputVariables }
		})
			.then((res: MutationResult<_Data, _Input>) => {
				wrapper.code = 200;
				wrapper.response = res;
				// logger('login<response##succes>: ', response.data.login.user);
			})
			.catch((e: MutationResult<_Data, _Input>) => {
				wrapper.code = 400;
				wrapper.response = e;
				// logger('login<response##error>: ', response);
			});

		return { code: wrapper.code, response: wrapper.response };
	}
}

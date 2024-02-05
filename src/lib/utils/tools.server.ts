type GraphQLError = {
	message: string;
};

/**
 * Controleert of de GraphQL-response een fout bevat.
 *
 * @param {GraphQLError[] | null} errors - De fouten array van de GraphQL-response.
 * @return {boolean} - Geeft `true` terug als er een fout is, anders `false`.
 */
export function checkIfGraphQLError(errors: GraphQLError[] | null): boolean {
	return !!(errors && errors.length > 0);
}

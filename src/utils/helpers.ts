import { ApolloError } from '@apollo/client';

export const formatError = (error: unknown) => {
	const err = error as ApolloError;

	if (err && err?.graphQLErrors) {
		const errors = err.graphQLErrors?.map((e) => e.message);
		console.log(errors);
		return errors;
	}
};

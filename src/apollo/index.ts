import { ApolloClient, createHttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import Cookies from 'js-cookie';
import { NextPageContext } from 'next';
import { useMemo } from 'react';
import { TOKEN_NAME } from 'utils/constants';
import { getTokenCookie } from '../utils/cookieUtils';

const API_URL = process.env.API_URL;
const uri = API_URL + '/graphql';
let apolloClient: ApolloClient<unknown>;

const token = Cookies.get(TOKEN_NAME);

export const apollo = new ApolloClient({
	uri,
	cache: new InMemoryCache(),
	credentials: 'include',
	headers: {
		Authorization: token || ' ',
	},
});

const createLink = (initialState: unknown, token: string) => {
	const cookie = typeof window !== 'undefined' ? Cookies.get(TOKEN_NAME) : token;

	const httpLink = createHttpLink({
		uri,
		fetch,
		credentials: 'include',
		headers: {
			cookie,
			Authorization: token,
		},
	});

	return new ApolloClient({
		connectToDevTools: typeof window !== 'undefined',
		ssrMode: typeof window === undefined,
		link: httpLink,
		cache: new InMemoryCache({ addTypename: false }).restore(initialState as NormalizedCacheObject),
	});
};

export const initializeApollo = (
	initialState?: NormalizedCacheObject,
	ctx?: NextPageContext
): ApolloClient<unknown> => {
	const cookie = getTokenCookie(ctx?.req);

	if (typeof window === undefined) return createLink(initialState, cookie || '');
	if (!apolloClient) {
		apolloClient = createLink(initialState, cookie || '');
	}

	return apolloClient;
};

export const useApollo = (initialState: NormalizedCacheObject) => {
	const store = useMemo(() => initializeApollo(initialState), [initialState]);
	return store;
};

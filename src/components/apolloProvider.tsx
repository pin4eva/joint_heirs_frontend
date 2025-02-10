"use client";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "lib/apolloClient";

interface Props {
	children: React.ReactNode;
	initialApolloState?: any;
}

export default function ApolloProviderWrapper({ children, initialApolloState }: Props) {
	const client = useApollo(initialApolloState);
	return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

// import { ApolloProvider } from "@apollo/client";
// import { useApollo } from "lib/apolloClient";

// export default function ApolloProviderWrapper({ Component, pageProps }: Props) {
//   const apolloClient = useApollo(pageProps.initialApolloState);

//   return (
//     <ApolloProvider client={apolloClient}>
//       <Component {...pageProps} />
//     </ApolloProvider>
//   );
// }

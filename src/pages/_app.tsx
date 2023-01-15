import type { AppProps } from "next/app";
import Head from "next/head";
import { Fragment, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/custom.scss";
import "../styles/index.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Router from "next/router";
import nProgress from "nprogress";
import { ApolloProvider, NormalizedCacheObject } from "@apollo/client";
import { useApollo } from "apollo";
import StyledComponentsRegistry from "lib/styledRegistry";

if (typeof window !== "undefined") {
	require("@popperjs/core");
	require("bootstrap/dist/js/bootstrap");
}

Router.events.on("routeChangeStart", () => {
	nProgress.start();
});

Router.events.on("routeChangeComplete", () => {
	nProgress.done();
});

Router.events.on("routeChangeError", () => nProgress.done());
// NextComponentType<NextPageContext, any, any>;

interface IProp extends AppProps {
	pageProps: {
		apollo: NormalizedCacheObject;
	};
}

function MyApp({ Component, pageProps }: IProp) {
	const client = useApollo(pageProps.apollo);

	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);
	return (
		<Fragment>
			<Head>
				<title>Joint Heirs Assembly Int&apos;l</title>
				<meta name="description" content="Official website of Joint Heirs Assembly International" />
			</Head>
			<ApolloProvider client={client}>
				<StyledComponentsRegistry>
					<Component {...pageProps} />
				</StyledComponentsRegistry>
			</ApolloProvider>
		</Fragment>
	);
}

export default MyApp;

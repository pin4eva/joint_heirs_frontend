import type { AppProps } from "next/app";
import Head from "next/head";
import { Fragment, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/custom.scss";
import "../styles/index.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";

function MyApp({ Component, pageProps }: AppProps) {
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
			<Component {...pageProps} />
		</Fragment>
	);
}

export default MyApp;

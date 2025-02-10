"use client"; // ✅ Required for Router events

import { useEffect } from "react";
import Router from "next/router";
import nProgress from "nprogress";
import "nprogress/nprogress.css";

export default function NProgress() {
	useEffect(() => {
		Router.events.on("routeChangeStart", () => nProgress.start());
		Router.events.on("routeChangeComplete", () => nProgress.done());
		Router.events.on("routeChangeError", () => nProgress.done());
		return () => {
			Router.events.off("routeChangeStart", () => nProgress.start());
			Router.events.off("routeChangeComplete", () => nProgress.done());
			Router.events.off("routeChangeError", () => nProgress.done());
		};
	}, []);

	return null;
}

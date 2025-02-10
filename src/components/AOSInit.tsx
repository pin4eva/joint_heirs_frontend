"use client"; // ✅ Required for AOS

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSInit() {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);

	return null;
}

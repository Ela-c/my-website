"use client";

import React, { useEffect, useState } from "react";

export default function CounterComponent() {
	// c`onst [isMounted, setIsMounted] = useState(false);
	// useEffect(() => {
	// 	setIsMounted(true); // This will only be true on the client
	// }, []);

	// if (!isMounted) {
	// 	return null; // Do not render the component during SSR
	// }`
	const [count, setCount] = useState<number>(0);
	return (
		<div>
			<div id="count-output">{count}</div>
			<button
				id="increment"
				style={{ marginRight: "30px" }}
				onClick={() => setCount((prev) => prev + 1)}
			>
				Increment
			</button>
			<button
				id="decrement"
				onClick={() => setCount((prev) => (prev === 0 ? 0 : prev - 1))}
			>
				Decrement
			</button>
		</div>
	);
}

import { useEffect, useRef, useState } from "react";
import styles from "./InfoBlock.module.scss";

function InfoBlock({ children, direction }) {
	const revealRef = useRef(null);
	const [isVisible, setIsvisible] = useState(false);

	const showElement = () => {
		const topElement = revealRef.current.getBoundingClientRect().top;
		const windowHeight = window.innerHeight;
		// const revealPoint = 150;
		const revealPoint = 250;

		if (topElement < windowHeight - revealPoint) {
			setIsvisible(true);
		}
	};

	useEffect(function () {
		window.addEventListener("scroll", showElement);
		return () => {
			window.removeEventListener("scroll", showElement);
		};
	}, []);

	return (
		<div
			ref={revealRef}
			className={`${styles.infoBlock} ${styles[direction]} ${
				isVisible ? styles.visible : ""
			} `}
		>
			<p>{children}</p>
		</div>
	);
}

export default InfoBlock;

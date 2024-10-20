import { useEffect, useRef, useState } from "react";
import styles from "./InfoBlock.module.scss";

// function InfoBlock({ children, direction }) {
// 	const revealRef = useRef(null);
// 	const [isVisible, setIsvisible] = useState(false);

// 	const showElement = () => {
// 		const topElement = revealRef.current.getBoundingClientRect().top;
// 		const windowHeight = window.innerHeight;
// 		const revealPoint = 150;
// 		// const revealPoint = 250;

// 		if (topElement < windowHeight - revealPoint) {
// 			setIsvisible(true);
// 		}
// 	};

// 	useEffect(function () {
// 		window.addEventListener("scroll", showElement);
// 		return () => {
// 			window.removeEventListener("scroll", showElement);
// 		};
// 	}, []);

// 	return (
// 		<div
// 			ref={revealRef}
// 			className={`${styles.infoBlock} ${styles[direction]} ${
// 				isVisible ? styles.visible : ""
// 			} `}
// 		>
// 			<p>{children}</p>
// 		</div>
// 	);
// }

// export default InfoBlock;




function InfoBlock({ children, direction, type="" }) {
	const revealRef = useRef(null);
	const [isVisible, setIsVisible] = useState(false);

	const showElement = () => {
		const element = revealRef.current;
		const elementBottom = element.getBoundingClientRect().bottom; // Pozycja dolnej krawędzi elementu
		const elementHeight = element.getBoundingClientRect().height; // Wysokość elementu
		const windowHeight = window.innerHeight;

		// 50% wysokości elementu
		// const revealThreshold = elementHeight / 2;
		const revealThreshold = elementHeight;

		// Sprawdzamy, czy dolna krawędź ekranu jest powyżej 50% wysokości elementu
		if (elementBottom - revealThreshold < windowHeight) {
			setIsVisible(true);
		}
	};

	useEffect(() => {
		// Dodajemy event listener na scroll
		window.addEventListener("scroll", showElement);

		// Usuwamy listener po demontażu komponentu
		return () => {
			window.removeEventListener("scroll", showElement);
		};
	}, []);

	return (
		<div
			ref={revealRef}
			className={`${styles.infoBlock} ${styles[type]} ${styles[direction]} ${
				isVisible ? styles.visible : ""
			}`}
		>
			<p>{children}</p>
		</div>
	);
}

export default InfoBlock;

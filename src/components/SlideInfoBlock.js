import { useEffect, useRef, useState } from "react";
import styles from "./SlideInfoBlock.module.scss";



function SlideInfoBlock({ children, direction, type="" }) {
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
			className={`${styles.slideInfoBlock} ${styles[type]} ${styles[direction]} ${
				isVisible ? styles.visible : ""
			}`} 
		>
			<p>{children}</p>
		</div> 
	);
}

export default SlideInfoBlock;

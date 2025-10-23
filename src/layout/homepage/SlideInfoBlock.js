import { useEffect, useRef, useState } from "react";
import styles from "./SlideInfoBlock.module.scss";


function SlideInfoBlock({ children, direction, type="" }) {
	const revealRef = useRef(null);
	const [isVisible, setIsVisible] = useState(false);
 
	const showElement = () => {
		const element = revealRef.current;
		const elementBottom = element.getBoundingClientRect().bottom; // Pos. of the bottom edge of the element
		const elementHeight = element.getBoundingClientRect().height; // Height element
		const windowHeight = window.innerHeight;
		const revealThreshold = elementHeight;

		// Check if the bottom edge of the screen is above 50% of the element's height.
		if (elementBottom - revealThreshold < windowHeight) {
			setIsVisible(true);
		}
	};

	useEffect(() => {
		// Add event listener on scroll
		window.addEventListener("scroll", showElement);

		// Delete listener after unmount component
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
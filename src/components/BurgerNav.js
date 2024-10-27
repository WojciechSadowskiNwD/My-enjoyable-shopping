import { Link } from "react-router-dom";
import styles from "./BurgerNav.module.scss";
import { useEffect, useState } from "react";

function BurgerNav() {
	const [isOpen, setIsopen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	function handleClick() {
		setIsopen(!isOpen);
	}

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 100);
		};

		window.addEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav className={styles.mobileNav}>
			<div className={`${styles.top_nav_bar} ${isOpen ? '' : 
				isScrolled ? styles.scrolled : ""}`}>
				<button className={styles.burger} onClick={handleClick}>
					{isOpen ? (
						<i className="fas fa-times"></i>
					) : (
						<i className="fas fa-bars"></i>
					)}
				</button>
			</div>
			<div className={`${styles.links} ${isOpen ? styles.isOpen : ""}`}>
				<Link to="/login">Login</Link>
				<Link to="/orderPremium">Order Premium</Link>
				<Link to="/aboutUs">About us</Link>
				<Link to="/contact">Contact</Link>
			</div>
		</nav>
	);
}

export default BurgerNav;

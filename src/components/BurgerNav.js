import { BrowserRouter as Router, Link } from "react-router-dom";
import styles from "./BurgerNav.module.scss";
import { useState } from "react";

function BurgerNav() {
	const [isOpen, setIsopen] = useState(false);

	function handleClick() {
		setIsopen(!isOpen);
	}

	return (
		<nav className={styles.mobileNav}>
			<button className={styles.burger} onClick={handleClick}>
				{isOpen ? (<i class="fas fa-times hide"></i>) : ( <i class="fas fa-bars"></i>)}
			</button>
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

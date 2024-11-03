import styles from "./Logo.module.scss";
import smallLogo from "../img/small_logo.png";
import { Link } from "react-router-dom";

export default function Logo({
	logoStyles = styles.logo,
	details = "",
	imgSize = "", 
}) {
	return (
		<Link to="/">
			<div className={`${logoStyles} ${details}`}>
				<img
					className={`${styles.img_logo} ${imgSize}`}
					src={smallLogo}
					alt="logo app"
				/>
				<h1>My enjoyable shopping</h1>
			</div>
		</Link>
	);
} 
 
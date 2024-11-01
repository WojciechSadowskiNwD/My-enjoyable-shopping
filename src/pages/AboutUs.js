import Hollow from "../components/Hollow";
import InfoBlock from "../components/InfoBlock";
import Logo from "../components/Logo";
import PreviousPage from "../components/PreviousPage";
import SectionTitle from "../components/SectionTitle";
import styles from "./AboutUs.module.scss";

function AboutUs() {
	return (
		<div className="pages_bgc">
			<div className="bg_shadow"> 
				<Logo details="logoDetails" /> 
				<SectionTitle>About Us</SectionTitle>
				<div className={styles.white_background}>
					<div className={styles.team_img}></div>
				</div>
				<InfoBlock width="infoBlock_width">
					We are a team of ambitious professionals who love their work. Together
					we create great applications and design websites for our clients every
					day. If you like this project take a look at our portfolio too!
				</InfoBlock>
				<div className={styles.portfolio_link}>
					<i className={`fa-regular fa-hand-pointer ${styles.link_cursor}`}></i>
					<a href="#">Portfolio</a>
				</div>
				<Hollow />
				<PreviousPage />
			</div>
		</div>
	);
}

export default AboutUs;
 
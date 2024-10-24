import InfoBlock from "../components/InfoBlock";
import Logo from "../components/Logo";
import SectionTitle from "../components/SectionTitle";
import styles from "./AboutUs.module.scss";

function AboutUs() {
	return (
		<div className={styles.aboutUS_background}>
			<div className={styles.bg_shadow}>
				<Logo details="logoDetails" />
				<SectionTitle>About Us</SectionTitle>

				<div className={styles.white_background}>
					<div className={styles.team_img}></div>
				</div>

				<InfoBlock position={styles.infoBlock_position} width="95%">
					We are a team of ambitious professionals who love their work. Together
					we create great applications and design websites for our clients every
					day. If you like this project take a look at our portfolio too!
				</InfoBlock>
			</div>
		</div>
	);
}

export default AboutUs;

//

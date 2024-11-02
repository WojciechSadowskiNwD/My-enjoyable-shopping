import styles from "./Contact.module.scss";
import Logo from "../components/Logo";
import SectionTitle from "../components/SectionTitle";
import InfoBlock from "../components/InfoBlock";
import PreviousPage from "../components/PreviousPage";
import Hollow from "../components/Hollow";

function Contact() {
	return (
		<div className="pages_bgc"> 
			<div className="bg_shadow"> 
				<Logo details="logoDetails" />
				<SectionTitle>Contact</SectionTitle>
				<InfoBlock width="infoBlock_width">
					If you have questions not covered in the faq you can always contact us
					directly! Choose the form appropriate to the subject of the matter.
				</InfoBlock>

				<div className={styles.glass}>
					<div className={styles.contact_box}>
						<h3>Collaboration</h3>
						<p>wsdev-collabor@gmail.com</p> 
					</div>
					<div className={styles.contact_box}>
						<h3>Orders</h3>
						<p>wsdev-orders@gmail.com</p>
					</div>
					<div className={styles.contact_box}>
						<h3>Support</h3>
						<p>wsdev-support@gmail.com</p>
					</div>
                    <div className={styles.contact_box}>
						<h3>Career</h3>
						<p>wsdev-career@gmail.com</p>
					</div>
				</div>
                <Hollow height="100px"/>
                <PreviousPage/>
			</div>
		</div> 
	);
}

export default Contact;

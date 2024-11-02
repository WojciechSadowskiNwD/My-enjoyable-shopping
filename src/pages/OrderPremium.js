import Hollow from "../components/Hollow";
import InfoBlock from "../components/InfoBlock";
import Logo from "../components/Logo";
import PreviousPage from "../components/PreviousPage";
import SectionTitle from "../components/SectionTitle";
import styles from "./OrderPremium.module.scss";

function OrderPremium() {
	return (
		<div className="pages_bgc">
			<div className="bg_shadow">
				<Logo details="logoDetails" />
				<SectionTitle>Order Premium</SectionTitle>
				<InfoBlock>
					Here you have the opportunity to order a personalized version of this
					application of this app in three possible variants. Flip the selected
					card and see what you gain!
				</InfoBlock>

				<div className="large_style">

					{/* First Card */}
				<div className={styles.order_card}>
					<div className={`${styles.card_front}`}>
						<div className={styles.card_front_content}>
							<h3>Small Pack</h3>
							<p>
								Order your own theme, in this package you will have us make
								every element of the application to look exactly the way you
								want.
							</p>
							<span>
								<i class="fa-solid fa-arrow-rotate-left"></i>
								<p>Check out</p>
							</span>
						</div>
						<div className={styles.photo_shadow}></div>
					</div>

					<div className={`${styles.card_back} ${styles.turnover}`}>
						<h3>Small Pack</h3>
						<div className={styles.order_icons}>
							<i class="fa-solid fa-cookie-bite"></i>
						</div>
						<div className={styles.text_content}>
							<p className={styles.top_paragraph}>
								In the package you will receive:
							</p>
							<span className={styles.content_row}>
								<i class="fa-solid fa-circle-check"></i>
								<p>customized application theme </p>
							</span>
							<span className={styles.content_row}>
								<i class="fa-solid fa-circle-check"></i>
								<p>three additional product categories</p>
							</span>
							<span className={styles.content_row}>
								<i class="fa-solid fa-circle-check"></i>
								<p>possibility to use on 10 devices</p>
							</span>
						</div>
						<button className={styles.btn_order}>Order</button>
					</div>
				</div>

				{/* Second Card */}
				<div className={styles.order_card}>
					<div className={`${styles.card_front}`}>
						<div className={styles.card_front_content}>
							<h3>Medium Pack</h3>
							<p>
								Everything as in point 1. In addition, the ability to create
								multiple shopping lists by store, and your functionality.
							</p>
							<span>
								<i class="fa-solid fa-arrow-rotate-left"></i>
								<p>Check out</p>
							</span>
						</div>
						<div className={styles.photo_shadow}></div>
					</div>

					<div className={`${styles.card_back} ${styles.turnover}`}>
						<h3>Medium Pack</h3>
						<div className={styles.order_icons}>
							<i class="fa-solid fa-cookie-bite"></i>
							<i class="fa-solid fa-cookie-bite"></i>
						</div>
						<div className={styles.text_content}>
							<p className={styles.top_paragraph}>
								In the package you will receive:
							</p>
							<span className={styles.content_row}>
								<i class="fa-solid fa-circle-check"></i>
								<p>All from a small pack</p>
							</span>
							<span className={styles.content_row}>
								<i class="fa-solid fa-circle-check"></i>
								<p>Additional functionality on request</p>
							</span>
							<span className={styles.content_row}>
								<i class="fa-solid fa-circle-check"></i>
								<p>Creation of different lists under the indicated stores</p>
							</span>
						</div>
						<button className={styles.btn_order}>Order</button>
					</div>
				</div>

				{/* Third Card */}
				<div className={styles.order_card}>
					<div className={`${styles.card_front}`}>
						<div className={styles.card_front_content}>
							<h3>Maximum Pack</h3>
							<p>
								Everything as in point 1 & 2. Everything as in point 1 and 2. In
								addition, you can order additional 3 smaller functionalities and
								more icons that can be changed on each card.
							</p>
							<span>
								<i class="fa-solid fa-arrow-rotate-left"></i>
								<p>Check out</p>
							</span>
						</div>
						<div className={styles.photo_shadow}></div>
					</div>

					<div className={`${styles.card_back} ${styles.turnover}`}>
						<h3>Large Pack</h3>
						<div className={styles.order_icons}>
							<i class="fa-solid fa-cookie-bite"></i>
							<i class="fa-solid fa-cookie-bite"></i>
						</div>
						<div className={styles.text_content}>
							<p className={styles.top_paragraph}>
								In the package you will receive:
							</p>
							<span className={styles.content_row}>
								<i class="fa-solid fa-circle-check"></i>
								<p>All from previous packs</p>
							</span>
							<span className={styles.content_row}>
								<i class="fa-solid fa-circle-check"></i>
								<p>Total 4 Additional functionality or filters</p>
							</span>
							<span className={styles.content_row}>
								<i class="fa-solid fa-circle-check"></i>
								<p>
									Additional editable icons for colored cards and more
									categories
								</p>
							</span>
						</div>
						<button className={styles.btn_order}>Order</button>
					</div>
				</div>

				</div>

				{/* First Card */}
				{/* <div className={styles.order_card}>
					<div className={`${styles.card_front}`}>
						<div className={styles.card_front_content}>
							<h3>Small Pack</h3>
							<p>
								Order your own theme, in this package you will have us make
								every element of the application to look exactly the way you
								want.
							</p>
							<span>
								<i class="fa-solid fa-arrow-rotate-left"></i>
								<p>Check out</p>
							</span>
						</div>
						<div className={styles.photo_shadow}></div>
					</div>

					<div className={`${styles.card_back} ${styles.turnover}`}>
						<h3>Small Pack</h3>
						<div className={styles.order_icons}>
							<i class="fa-solid fa-cookie-bite"></i>
						</div>
						<div className={styles.text_content}>
							<p className={styles.top_paragraph}>
								In the package you will receive:
							</p>
							<span className={styles.content_row}>
								<i class="fa-solid fa-circle-check"></i>
								<p>customized application theme </p>
							</span>
							<span className={styles.content_row}>
								<i class="fa-solid fa-circle-check"></i>
								<p>three additional product categories</p>
							</span>
							<span className={styles.content_row}>
								<i class="fa-solid fa-circle-check"></i>
								<p>possibility to use on 10 devices</p>
							</span>
						</div>
						<button className={styles.btn_order}>Order</button>
					</div>
				</div> */}

				{/* Second Card */}
				{/* <div className={styles.order_card}>
					<div className={`${styles.card_front}`}>
						<div className={styles.card_front_content}>
							<h3>Medium Pack</h3>
							<p>
								Everything as in point 1. In addition, the ability to create
								multiple shopping lists by store, and your functionality.
							</p>
							<span>
								<i class="fa-solid fa-arrow-rotate-left"></i>
								<p>Check out</p>
							</span>
						</div>
						<div className={styles.photo_shadow}></div>
					</div>

					<div className={`${styles.card_back} ${styles.turnover}`}>
						<h3>Medium Pack</h3>
						<div className={styles.order_icons}>
							<i class="fa-solid fa-cookie-bite"></i>
							<i class="fa-solid fa-cookie-bite"></i>
						</div>
						<div className={styles.text_content}>
							<p className={styles.top_paragraph}>
								In the package you will receive:
							</p>
							<span className={styles.content_row}>
								<i class="fa-solid fa-circle-check"></i>
								<p>All from a small pack</p>
							</span>
							<span className={styles.content_row}>
								<i class="fa-solid fa-circle-check"></i>
								<p>Additional functionality on request</p>
							</span>
							<span className={styles.content_row}>
								<i class="fa-solid fa-circle-check"></i>
								<p>Creation of different lists under the indicated stores</p>
							</span>
						</div>
						<button className={styles.btn_order}>Order</button>
					</div>
				</div> */}

				{/* Third Card */}
				{/* <div className={styles.order_card}>
					<div className={`${styles.card_front}`}>
						<div className={styles.card_front_content}>
							<h3>Maximum Pack</h3>
							<p>
								Everything as in point 1 & 2. Everything as in point 1 and 2. In
								addition, you can order additional 3 smaller functionalities and
								more icons that can be changed on each card.
							</p>
							<span>
								<i class="fa-solid fa-arrow-rotate-left"></i>
								<p>Check out</p>
							</span>
						</div>
						<div className={styles.photo_shadow}></div>
					</div>

					<div className={`${styles.card_back} ${styles.turnover}`}>
						<h3>Large Pack</h3>
						<div className={styles.order_icons}>
							<i class="fa-solid fa-cookie-bite"></i>
							<i class="fa-solid fa-cookie-bite"></i>
						</div>
						<div className={styles.text_content}>
							<p className={styles.top_paragraph}>
								In the package you will receive:
							</p>
							<span className={styles.content_row}>
								<i class="fa-solid fa-circle-check"></i>
								<p>All from previous packs</p>
							</span>
							<span className={styles.content_row}>
								<i class="fa-solid fa-circle-check"></i>
								<p>Total 4 Additional functionality or filters</p>
							</span>
							<span className={styles.content_row}>
								<i class="fa-solid fa-circle-check"></i>
								<p>
									Additional editable icons for colored cards and more
									categories
								</p>
							</span>
						</div>
						<button className={styles.btn_order}>Order</button>
					</div>
				</div> */}

				<Hollow height="70px" />
				<PreviousPage />
			</div>
		</div>
	);
}

export default OrderPremium;

// ORDER PREMIUM
// Tutaj masz możliwość złożenia zamówienia spersonalizowanej wersji tej aplikacji w uwzględnieniu trzech możliwych wariantów. Każdy gwarantuje dostęp do aż 10 kopii tej aplikacji online:
// Here you have the opportunity to order a personalized version of this application in consideration of three possible variants. Each guarantees access to as many as 10 copies of this online application.

// 1. Zamów własny motyw, w tym pakiecie zlecisz nam aby każdy element aplikacji wyglądał dokładnie tak jaki sobie zażyczysz. Zmień kolory, układ elementów, ilony, tło, przyciski i wiele innych.
// 1. Order your own theme, in this package you will have us make every element of the application look exactly the way you want. Change colors, element layout, ilons, backgrounds, buttons and much more.

// 2. Zawiera wszystko widzisz w punkcie 1. Dodatkowo możesz zlecić rozszerzenie aplikacji o jedną małą funkcjonalność oraz kilka dodatkowych kategorii produktowych.
// 2. It contains everything you see in point 1. In addition, you can have the application extended with one small functionality and a few additional product categories.

// 3. Wszystko co w punkcie 1 oraz 2. Oprócz tego możesz zlecić dodatkowe 3 mniejsze funkcjonalności, oraz więcej ikonek, które będzie można zmieniać na każdej karteczce. otrzymasz też możliwość tworzenia list na poszczególne sklepy.
// 3. Everything as in point 1 and 2. In addition, you can order additional 3 smaller functionalities, and more icons that can be changed on each card. you will also get the ability to create lists per store.

// Chcesz złożyć zamówienie? Pozostaw swój @ i numer telefonu. Wpisz też który z pakietów Ciebie interesuje, a w ciągu 24h skontaktuje się z Tobą nasz doradca w celu ustalenia szczgółów oraz uzyskasz cenę za usługę!
// Want to place an order? Leave your @ and phone number. Also enter which package you are interested in, and within 24 hours you will be contacted by our consultant to determine the details and get the price for the service!

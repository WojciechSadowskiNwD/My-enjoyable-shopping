import { Link } from "react-router-dom";
import BurgerNav from "../components/BurgerNav";
import Logo from "../components/Logo";
import DownArrow from "../components/DownArrow";
import SlideInfoBlock from "../components/SlideInfoBlock";
import Headline from "../components/Headline";
import SubscribeForm from "../components/SubscribeForm";
import Accordion from "../components/Accordion";
import Footer from "../components/Footer";
import StatsCounters from "../components/StatsCounters";
import ButtonLink from "../components/ButtonLink";
import NavigationBar from "../components/NavigationBar";
import img1 from "../img/photo_slide/Mobile_photo_app_big_panel.jpg";
import img2 from "../img/photo_slide/slide_app_photo_1.jpg";
import img3 from "../img/photo_slide/app_creaye_your_shop_lists_present.jpg";

const faqs = [
	{
		title: "Is it free?",
		text: "Our entire application is in beta testing phase. For this currently everyone can enjoy the possibility to use it in full access.",
	},
	{
		title: "How to run the application?",
		text: "Just click the “Try the application” button as a guest if you are here for the first time. You can also launch it by logging in.",
	},
	{
		title: "Can I order a personalized v. app?",
		text: "Of course it is! All you have to do is click “Order Premium” in the navigation menu. There you will find all the necessary information you need.",
	},
	{
		title: "How I can establish cooperation?",
		text: "For this, there is a “Contact” section available in the navigation menu. Once clicked, you will see all available forms of contact with the developer of this application.",
	},
	{
		title: "What stack was used for this application?",
		text: "In this case, it was mainly based on: HTML, JS, React.js library, React Router, Context API, scss (modules). The code used hooks useState, useEffect, useRef, useContext, and many others...",
	},
	{
		title: "Is it a copy of another application?",
		text: "Absolutely not. This is a 100% author's project to show that the creator can be creative and can handle many problems well. There are many interesting mechanisms in the application, each presenting further practical skills that can be used in real commercial projects.",
	},
];

function Homepage() {
	return (
		<div className="homepage">
			<BurgerNav />
			<NavigationBar />
			<header className="header">
				<Logo />
				<DownArrow />
			</header>
			<section className="main">
				<Headline>About this App</Headline>
				<SlideInfoBlock direction="hidden_left">
					Hello dear visitor. We are happy to introduce you to the amazing
					opportunities that come with our great app! Create your own
					collections of shopping lists for those stores you choose!
				</SlideInfoBlock>
				<SlideInfoBlock direction="hidden_right" type="images">
					<img
						className="infoBlock_img rot_2"
						src={img3}
						alt="A few colorfull photos showing the appearance of the application"
					/>
				</SlideInfoBlock>
				<SlideInfoBlock direction="hidden_left">
					Tired of writing everything on pieces of paper that are easy to lose?
					Here is your solution My Enjoyable Shopping. On your mobile device you
					will gain the ability to monitor how many items you have already
					collected, what is missing. See your products in beautifully divided
					sections and categories. Manage them, create, delete, filter see how
					easy it is. Create an account and make your shopping trips fun.
				</SlideInfoBlock>
				<SlideInfoBlock direction="hidden_right" type="images">
					<img
						className="infoBlock_img rot_1"
						src={img1}
						alt="A few colorfull photos showing the appearance of the application"
					/>
				</SlideInfoBlock>
				<SlideInfoBlock direction="hidden_left">
					Use on your smartphone and other mobile devices, desktops and laptops.
					With a registered account, save your collections and use whenever you
					need. All this is wrapped in a colorful pleasant design tailored to
					each of your devices.
				</SlideInfoBlock>
				<SlideInfoBlock direction="hidden_right" type="images">
					<img
						className="infoBlock_img rot_2"
						src={img2}
						alt="A few colorfull photos showing the appearance of the application"
					/>
				</SlideInfoBlock>
				<Link to="/login">
					<ButtonLink positionClass="button_position">
						Let's Start App
					</ButtonLink>
				</Link>
				<StatsCounters />
			</section>
			<section className="main">
				<Headline>FAQ</Headline>
				<Accordion data={faqs} />
				<Headline>Stay up to date</Headline>
				<SubscribeForm />
			</section>
			<Footer />
		</div>
	);
}

export default Homepage;

// INSPIRACJA -- IMAGES
// Fajnie wygląda prezentacja pinteriesta na widok mobilny, w szczególności te kolekcje świetnie poukładanych zdjęć ponakładanych delikatnie na siebie i z przyciętymi rogami!! Pięknie to wygląda.

// #1
// Witaj drogi visitor. Z przyjemnością przedstawiamy niesamowite możliwości jakie przychodzą z naszą wspaniałą aplikacją!

// Hello dear visitor. We are happy to introduce you to the amazing opportunities that come with our great app!

// #2
// Czy na myśl o wybraniu się na zakupy do twojej głowy przychodzi irytujące skojarzenie, że będzie trzeba kolejny raz usiąść i od nowa tworzyć nudną listę zakupów, na zwykłej kartce papieru, która na dodatek może zostać łatwo zagubiona?

//At the thought of going shopping, does the annoying association come into your head that you will have to sit down once again and create a boring shopping list from scratch, on a simple piece of paper, which, on top of that, can be easily lost?

// #3
// Jeżeli jesteś już zmęczony tą czynnością to mamy dla Ciebie świetne rozwiązanie! Raz na zawsze pozbądź się tej szorstkiej kartki. Napisz listę jeden raz, zapisz ją oraz modyfikuj wedle własnych potrzeb i to na własnym smartfonie, z którym się nie rozstajesz!

// If you are already tired of this activity then we have a great solution for you! Get rid of that rough paper once and for all. Write the list once, save it and modify it according to your needs, and do it on your own smartphone, which you do not part with!

// #4
// Twórz piękne kolorowe dowolnie skomponowane listy z pięknymi ikonkami, podzielone na logiczne uporządkowane listy. Zarządzaj nimi jak chcesz. Skreślaj, usuwaj, ukrywaj na chwilę jeśli tylko masz ochotę! Segreguj je na podstawie własnych preferencji! Korzystaj z podsumowań i dodatkowych informacji. Wszystko to zupełnie za darmo, w okresie testowania tej świetnej aplikacji!

// Create beautiful colorful freely composed lists with beautiful icons, divided into logical ordered lists. Manage them as you like. Make line throuht or delete, hide for a while if you feel like it! Segregate them based on your preferences ! Enjoy summaries and additional information. All this completely free, during the testing period of this great app!

// #5
// Zalogowani użytkownicy mogą zapisywać swoje listy i do nich wracać w dowolnej chwili.
// Logged-in users can save their lists and return to them at any time.

import BurgerNav from "../components/BurgerNav";
import Logo from "../components/Logo";
import DownArrow from "../components/DownArrow";
import InfoBlock from "../components/InfoBlock";
import Headline from "../components/Headline";
import SubscribeForm from "../components/SubscribeForm";
import Accordion from "../components/Accordion";

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
		title: "Can I order a personalized version of this app?",
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
		<main className="homepage">
			<section>
				<BurgerNav />
				<Logo />
				<DownArrow />
			</section>
			<section className="homepage_body">
				<Headline>About this App</Headline>
				<InfoBlock direction="hidden_left">
					Hello dear visitor. We are happy to introduce you to the amazing
					opportunities that come with our great app!
				</InfoBlock>
				<InfoBlock direction="hidden_right">IMG 1</InfoBlock>
				<InfoBlock direction="hidden_left">
					At the thought of going shopping, does the annoying association come
					into your head that you will have to sit down once again and create a
					boring shopping list from scratch, on a simple piece of paper, which,
					on top of that, can be easily lost?
				</InfoBlock>
				<InfoBlock direction="hidden_right">IMG 2</InfoBlock>
				<Headline>FAQ</Headline>
				<Accordion data={faqs} />
				<Headline>Stay up to date</Headline>
				<SubscribeForm />
			</section>
		</main>
	);
}

export default Homepage;

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


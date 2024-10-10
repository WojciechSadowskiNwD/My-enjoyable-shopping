import BurgerNav from "../components/BurgerNav";
import Logo from "../components/Logo";
import DownArrow from "../components/DownArrow";
import InfoBlock from "../components/InfoBlock";
import Headline from "../components/Headline";

function Homepage() {
	return (
		<main className="homepage">
			<section>
				<BurgerNav />
				<Logo />
				<DownArrow />
			</section>
			<section className="homepage_body">
				<Headline />
				<InfoBlock>
				Hello dear visitor. We are happy to introduce you to the amazing opportunities that come with our great app!
				</InfoBlock>
				<InfoBlock>
				At the thought of going shopping, does the annoying association come into your head that you will have to sit down once again and create a boring shopping list from scratch, on a simple piece of paper, which, on top of that, can be easily lost?
				</InfoBlock>

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

// #6
// Bądź na bieżąco z naszymi aktualnościami w których dowiesz się jakie są następne plany dotyczące jej rozwoju. Niebawem będziesz mógł dodawać wybrane przez siebie przepisy kulinarne do własnego schowka. Jednym kliknięciem dodasz wszystkie składniki z przepisu do listy zakupowej, niebawem będzie to możliwe!

// Stay tuned to our news in which you will find out what the next plans are for its development. Soon you will be able to add the recipes of your choice to your own clipboard. With one click you will be able to add all the ingredients from a recipe to your shopping list, soon it will be possible!

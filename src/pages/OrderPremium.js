import Hollow from "../components/Hollow";
import InfoBlock from "../components/InfoBlock";
import Logo from "../components/Logo";
import OrderCard from "../components/OrderCard";
import PreviousPage from "../components/PreviousPage";
import SectionTitle from "../components/SectionTitle";


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
					<OrderCard
						titleCard="Small Pack"
						firstArgument="customized application theme"
						secondArgument="three additional product categories"
						thirdArgument="possibility to use on 10 devices"
					>
						Order your own theme, in this package you will have us make every
						element of the application to look exactly the way you want.
					</OrderCard>
					<OrderCard
						titleCard="Medium Pack"
						firstArgument="All from a small pack"
						secondArgument="Additional functionality on request"
						thirdArgument="Creation of different lists under the indicated stores"
					>
						Everything as in point 1. In addition, the ability to create
						multiple shopping lists by store, and your functionality.
					</OrderCard>
					<OrderCard
						titleCard="Maximum Pack"
						firstArgument="All from previous packs"
						secondArgument="Total 4 Additional functionality or filters"
						thirdArgument="Additional editable icons for colored cards and more
										categories"
					>
						Everything as in point 1 & 2. Everything as in point 1 and 2. In
						addition, you can order additional 3 smaller functionalities and
						more icons that can be changed on each card.
					</OrderCard>
				</div>

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
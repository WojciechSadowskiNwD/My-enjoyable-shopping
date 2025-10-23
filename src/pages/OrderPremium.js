import Logo from "../layout/components/Logo";
import SectionTitle from "../layout/components/SectionTitle";
import InfoBlock from "../layout/components/InfoBlock";
import OrderCard from "../layout/orderPremium/OrderCard";
import Hollow from "../layout/components/Hollow";
import PreviousPage from "../layout/components/PreviousPage";


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
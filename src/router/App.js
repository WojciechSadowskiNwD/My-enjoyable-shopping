import { Routes, Route, BrowserRouter } from "react-router-dom";
import { LoginProvider } from "../contexsts/LoginProvider";
import { ListsProvider } from "../contexsts/ListsProvider";
import ScrollToTop from "../layout/components/ScrollToTop";
import Homepage from "../pages/Homepage";
import Contact from "../pages/Contact";
import OrderPremium from "../pages/OrderPremium";
import AboutUs from "../pages/AboutUs";
import Login from "../pages/Login";
import AppStart from "../pages/AppStart";
import AppShopList from "../pages/AppShopList";

export default function App() { 
	return (
		<BrowserRouter basename="/My-enjoyable-shopping">
			<ScrollToTop />
			<LoginProvider>
				<ListsProvider>
					<Routes>
						<Route path="/" element={<Homepage />} />
						<Route path="contact" element={<Contact />} />
						<Route path="orderPremium" element={<OrderPremium />} />
						<Route path="aboutUs" element={<AboutUs />} />
						<Route path="login" element={<Login />} />
						<Route path="appStart" element={<AppStart />} />
						<Route path="appShopList" element={<AppShopList />} />
					</Routes>
				</ListsProvider>
			</LoginProvider>
		</BrowserRouter>
	);
}
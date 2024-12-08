import { BrowserRouter, Routes, Route } from "react-router-dom";
import OrderPremium from "./pages/OrderPremium";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import AboutUs from "./pages/AboutUs";
import Homepage from "./pages/Homepage";
import ScrollToTop from "./components/ScrollToTop";
import AppStart from "./pages/AppStart";
import AppShopList from "./pages/AppShopList";
import { LoginProvider } from "./contexsts/LoginProvider";
import { ListsProvider } from "./contexsts/ListsProvider";

function App() {
	return (
		<BrowserRouter>
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

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import OrderPremium from "./pages/OrderPremium";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import AboutUs from "./pages/AboutUs";
import Homepage from "./pages/Homepage";
import ScrollToTop from "./components/ScrollToTop";
import AppStart from "./pages/AppStart";
import CreateShopList from "./components/App_components/CreateShopList";


function App() {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="login" element={<Login />} />
				<Route path="contact" element={<Contact />} />
				<Route path="orderPremium" element={<OrderPremium />} />
				<Route path="aboutUs" element={<AboutUs />} />
				<Route path="appStart" element={<AppStart/>} />
				<Route path="createShopList" element={<CreateShopList />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

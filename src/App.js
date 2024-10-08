import { BrowserRouter, Routes, Route } from "react-router-dom";
import OrderPremium from "./pages/OrderPremium";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import AboutUs from "./pages/AboutUs";
import Homepage from "./pages/Homepage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="login" element={<Login/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="orderPremium" element={<OrderPremium/>}/>
        <Route path="aboutUs" element={<AboutUs/>}/>
			</Routes>
		</BrowserRouter>
	)
}

export default App;

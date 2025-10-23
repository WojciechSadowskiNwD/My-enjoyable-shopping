import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Powoduje, że po kliknięciu w Link to="..." zawsze przekierowanie ustawia pozycję top=0px.
function ScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
}

export default ScrollToTop;
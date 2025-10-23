import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Causes the redirect to always set the position to top=0px when clicking on Link to="..."
function ScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
}

export default ScrollToTop;
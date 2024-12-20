import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useLogin } from "../contexsts/LoginProvider";
import { useLists } from "../contexsts/ListsProvider";
import AppCircleHeader from "../components/App_components/AppCircleHeader";
import AppTopTextBar from "../components/App_components/AppTopTextBar";
import NewProductForm from "../components/App_components/NewProductForm";
import AllProducts from "../components/App_components/AllProducts";
import LogoutBtn from "../components/App_components/LogoutBtn";

function AppShopList() {
	const location = useLocation();
	const { img, name } = location.state || {};
	const { state } = useLists();
	const navigate = useNavigate();
	const { isAuthenticated } = useLogin();
	const thisList = state[name];

	// automatic redirect from here to Homepage if false
	useEffect(() => {
		if (isAuthenticated === false) {
			navigate("/", { replace: true });
		}
	}, [isAuthenticated, navigate]);

	return (
		<div className="app">
			<div className="shadow_bg bg_shadow">
				<AppCircleHeader />
				<AppTopTextBar img={img} name={name} />
				<NewProductForm thisList={thisList} />
				<AllProducts listName={name} />
				<LogoutBtn />
			</div>
		</div>
	);
}

export default AppShopList;

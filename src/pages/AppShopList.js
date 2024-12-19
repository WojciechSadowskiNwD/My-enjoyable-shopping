import { useLocation } from "react-router-dom";
import { useLists } from "../contexsts/ListsProvider";
import AppCircleHeader from "../components/App_components/AppCircleHeader";
import AppTopTextBar from "../components/App_components/AppTopTextBar";
import NewProductForm from "../components/App_components/NewProductForm";
import AllProducts from "../components/App_components/AllProducts";


function AppShopList() {
	const location = useLocation();
	const {img, name } = location.state || {};
	const {state} = useLists();
	const thisList = state[name]; 
	
	return (
		<div className="app">
			<div className="shadow_bg bg_shadow">
				<AppCircleHeader />
                <AppTopTextBar img={img} name={name}/>
                <NewProductForm thisList={thisList}/>
				<AllProducts listName={name}/>
			</div>
		</div>
	);
}

export default AppShopList;
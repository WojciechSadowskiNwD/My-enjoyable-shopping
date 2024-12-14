import { useLocation } from "react-router-dom";
import AppCircleHeader from "../components/App_components/AppCircleHeader";
import AppTopTextBar from "../components/App_components/AppTopTextBar";
import NewProductForm from "../components/App_components/NewProductForm";
import AllProducts from "../components/App_components/AllProducts";
import styles from "./AppShopList.module.scss";
import { useLists } from "../contexsts/ListsProvider";


function AppShopList() {
	const location = useLocation();
	const {img, name } = location.state || {};
	const {state} = useLists();
	const thisList = state[name]; 
	// console.log("sprawdzam co siedzi w thisList:");
	// console.log(thisList);
	// console.log("koniec sprawdzania");

	return (
		<div className="app">
			<div className="shadow_bg bg_shadow">
				<AppCircleHeader />
                <AppTopTextBar img={img} name={name}/>
                <NewProductForm thisList={thisList}/>
				<AllProducts allProducts={thisList.shoppingList}/>
			</div>
		</div>
	);
}

export default AppShopList;
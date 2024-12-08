import { createContext, useContext, useReducer } from "react";

const ListsContext = createContext();

// * * * shoppongLists data
const initialShopList = {
	// cereal products-produkty zbożowe
	// frozen - mrożonki
	biedronka: {
        listExist: true,
        name: "biedronka",
        img: "shops_img/biedronka_1.png",
		shoppingList: [
			{
				id: 1,
				name: "milk",
				typeProduct: "dairy",
				quantity: 1,
				isWeightInGrams: false,
				isCollected: false,
			},
			{
				id: 2,
				name: "cheese",
				typeProduct: "dairy",
				quantity: 400,
				isWeightInGrams: true,
				isCollected: false,
			},
			{
				id: 3,
				name: "bread",
				typeProduct: "cereal products",
				quantity: 2,
				isWeightInGrams: false,
				isCollected: true,
			},
			{
				id: 4,
				name: "cola 1l",
				typeProduct: "drinks",
				quantity: 1,
				isWeightInGrams: false,
				isCollected: true,
			},
			{
				id: 5,
				name: "orange juice",
				typeProduct: "drinks",
				quantity: 1,
				isWeightInGrams: false,
				isCollected: false,
			},
			{
				id: 6,
				name: "potatoes",
				typeProduct: "vegetables",
				quantity: 2.0,
				isWeightInGrams: true,
				isCollected: false,
			},
		],
	},
	auchan: {
		listExist: true,
        name: "auchan",
        img: "shops_img/auchan_1.png",
		shoppingList: [
			{
				id: 1,
				name: "cornflakes",
				typeProduct: "cereal products",
				quantity: 250,
				isWeightInGrams: true,
				isCollected: true,
			},
			{
				id: 2,
				name: "chocolate bar",
				typeProduct: "candies",
				quantity: 1,
				isWeightInGrams: false,
				isCollected: false,
			},
			{
				id: 3,
				name: "waffle",
				typeProduct: "candies",
				quantity: 2,
				isWeightInGrams: false,
				isCollected: true,
			},
			{
				id: 4,
				name: "shrimp",
				typeProduct: "frozen",
				quantity: 300,
				isWeightInGrams: true,
				isCollected: false,
			},
			{
				id: 5,
				name: "pizza with pineapple",
				typeProduct: "frozen",
				quantity: 1,
				isWeightInGrams: false,
				isCollected: true,
			},
			{
				id: 6,
				name: "lettuce",
				typeProduct: "vegetables",
				quantity: 1,
				isWeightInGrams: false,
				isCollected: true,
			},
		],
	},
	lidl: {
		listExist: false,
        name: "lidl",
        img: "shops_img/lidl_1.png",
		shoppingList: [],
	},
	netto: {
		listExist: false,
        name: "netto",
        img: "shops_img/netto_1.png",
		shoppingList: [],
	},
	carrefour: {
		listExist: false,
        name: "carrefour",
        img: "shops_img/carrefour_1.jpg",
		shoppingList: [],
	},
	dino: {
		listExist: false,
        name: "dino",
        img: "shops_img/dino_1.png",
		shoppingList: [],
	},
};
// * * * shoppongLists data _END

// reducer to build
function reducer(state, action) {
	switch (action.type) {
		// ...

		default:
			throw new Error("Unknown action in shopList");
	}
}



function ListsProvider({ children }) {
	// useReducer
	const [state, dispatch] =
		useReducer(reducer, initialShopList);
	// const [{ biedronka, auchan, lidl, netto, carrefour, dino }, dispatch] =
	// 	useReducer(reducer, initialShopList);

	return (
		<ListsContext.Provider
			value={{ state, dispatch }}
		>
			{children}
		</ListsContext.Provider>
	);
	// return (
	// 	<ListsContext.Provider
	// 		value={{ biedronka, auchan, lidl, netto, carrefour, dino }}
	// 	>
	// 		{children}
	// 	</ListsContext.Provider>
	// );
}

// custom context hook:
function useLists() {
	const context = useContext(ListsContext);
    if (!context) {
		throw new Error("useLists must be used within a ListsProvider");
	}
	return context;
}

export { ListsProvider, useLists };

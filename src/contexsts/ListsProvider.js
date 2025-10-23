import { createContext, useContext, useReducer, useState } from "react";

const ListsContext = createContext();

// * * * shoppongLists data _START
const initialShopList = {
	biedronka: {
		listExist: true,
		name: "biedronka",
		img: "shops_img/biedronka_1.webp",
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
				typeProduct: "cereal",
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
			{
				id: 7,
				name: "sausages",
				typeProduct: "meat",
				quantity: 300,
				isWeightInGrams: true,
				isCollected: true,
			},
			{
				id: 8,
				name: "smoked ham",
				typeProduct: "meat",
				quantity: 150,
				isWeightInGrams: true,
				isCollected: false,
			},
			{
				id: 9,
				name: "pizza",
				typeProduct: "frozen",
				quantity: 1,
				isWeightInGrams: false,
				isCollected: true,
			},
			{
				id: 10,
				name: "oranges",
				typeProduct: "fruits",
				quantity: 3,
				isWeightInGrams: false,
				isCollected: true,
			},
			{
				id: 11,
				name: "chocolate bar",
				typeProduct: "candies",
				quantity: 1,
				isWeightInGrams: false,
				isCollected: false,
			},
		],
	},
	auchan: {
		listExist: true,
		name: "auchan",
		img: "shops_img/auchan_1.webp",
		shoppingList: [
			{
				id: 1,
				name: "cornflakes",
				typeProduct: "cereal",
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
			{
				id: 7,
				name: "butter",
				typeProduct: "dairy",
				quantity: 4,
				isWeightInGrams: false,
				isCollected: false,
			},
			{
				id: 8,
				name: "strawberries",
				typeProduct: "fruits",
				quantity: 250,
				isWeightInGrams: true,
				isCollected: false,
			},
			{
				id: 9,
				name: "lemons",
				typeProduct: "fruits",
				quantity: 5,
				isWeightInGrams: false,
				isCollected: true,
			},
		],
	},
	lidl: {
		listExist: false,
		name: "lidl",
		img: "shops_img/lidl_1.webp",
		shoppingList: [],
	},
	netto: {
		listExist: false,
		name: "netto",
		img: "shops_img/netto_1.webp",
		shoppingList: [],
	},
	carrefour: {
		listExist: false,
		name: "carrefour",
		img: "shops_img/carrefour_1.webp",
		shoppingList: [],
	},
	dino: {
		listExist: false,
		name: "dino",
		img: "shops_img/dino_1.webp",
		shoppingList: [],
	},
};
// * * * shoppongLists data _END

// reducer
function reducer(state, action) {
	switch (action.type) {
		case "product/add_product":
			const { shopName, product } = action.payload;

			return {
				...state,
				[shopName]: {
					...state[shopName],
					listExist: true,
					shoppingList: [...state[shopName].shoppingList, product],
				},
			};

		case "product/change_isCollected":
			const { listName, id } = action.payload;

			return {
				...state,
				[listName]: {
					...state[listName],
					shoppingList: state[listName].shoppingList.map((product) =>
						product.id === id
							? { ...product, isCollected: !product.isCollected }
							: product
					),
				},
			};
		case "product/delete_list":
			console.log(action.payload);
			return {
				...state,
					[action.payload]: {
						...state[action.payload],
						listExist: !state[action.payload].listExist,
						shoppingList: [],
					}
			}

		case "product/delete_product":
			const { id: targetId, listName: targetListName  } = action.payload; 

			if(state[targetListName].shoppingList.length <= 1){
				return {
					...state,
					[targetListName]: {
						...state[targetListName],
						listExist: !state[targetListName].listExist,
						shoppingList: state[targetListName].shoppingList.filter(
							(product) => product.id !== targetId
						),
					}
				};
			}else {
				return {
					...state,
					[targetListName]: {
						...state[targetListName],
						shoppingList: state[targetListName].shoppingList.filter(
							(product) => product.id !== targetId
						),
					},
				};
			};



		default:
			throw new Error("Unknown action in shopList");
	}
}


function ListsProvider({ children }) {
	// useReducer
	const [state, dispatch] = useReducer(reducer, initialShopList);
	const [activeButton, setActiveButton] = useState(null);

	// example props: 'biedronka', 'cereal',and next type, ...
	function filterProductsByType(listName, typeProduct) {
		const thisList = state[listName]?.shoppingList || [];
		return thisList.filter((item) => item.typeProduct === typeProduct);
	}
	const getTypesCollection = (listName) => [
		{
			typeName: "cereal",
			typeImg: "🍞",
			typeBgColor: "#f1b75add",
			productBgColor: "#f1b75a84",
			items: filterProductsByType(listName, "cereal"),
		},
		{
			typeName: "dairy",
			typeImg: "🧀",
			typeBgColor: "rgba(255, 255, 25, 0.74)",
			productBgColor: "rgba(255, 255, 25, 0.51)",
			items: filterProductsByType(listName, "dairy"),
		},
		{
			typeName: "meat",
			typeImg: "🍖",
			typeBgColor: "#d5407cdd",
			productBgColor: "#d5407b8e",
			items: filterProductsByType(listName, "meat"),
		},
		{
			typeName: "fruits",
			typeImg: "🥝",
			typeBgColor: "#d1c026dd",
			productBgColor: "#d1c02684",
			items: filterProductsByType(listName, "fruits"),
		},
		{
			typeName: "vegetables",
			typeImg: "🥬",
			typeBgColor: "#a3d831dd",
			productBgColor: "#a3d831a2",
			items: filterProductsByType(listName, "vegetables"),
		},
		{
			typeName: "frozen",
			typeImg: "🧊",
			typeBgColor: "#26cbd1dd",
			productBgColor: "#26cbd18a",
			items: filterProductsByType(listName, "frozen"),
		},
		{
			typeName: "candies",
			typeImg: "🍭",
			typeBgColor: "#d57a39dd",
			productBgColor: "#d57a39dd",
			items: filterProductsByType(listName, "candies"),
		},
		{
			typeName: "drinks",
			typeImg: "🍹",
			typeBgColor: "#494542dd",
			productBgColor: "#878999d9",
			items: filterProductsByType(listName, "drinks"),
		},
	];
	const setHowToSort = (buttonClicked) => {

        // set btn color to active
		if (buttonClicked === "toPack") {
			setActiveButton("toPack");
		} else if (buttonClicked === "packed") {
            setActiveButton("packed");
		}else if (buttonClicked === "alphabetically") {
            setActiveButton("alphabetically");
		}
	};

	return (
		<ListsContext.Provider value={{ state, activeButton, setHowToSort, dispatch, getTypesCollection }}>
			{children}
		</ListsContext.Provider>
	);
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
import { createContext, useContext, useReducer, useState } from "react";

const LoginContext = createContext();

const initialState = {
	user: null,
	isAuthenticated: false,
	wrongData: false,
};

// fake account, to "login"
const FAKE_USER = {
	name: "David",
	login: "DavidDev16",
	password: "Tomato123",
};

function reducer(state, action) {
	switch (action.type) {
		case "login":
			return {
				...state,
				user: FAKE_USER.name,
				isAuthenticated: true,
				wrongData: false,
			};
		case "wrongFill":
			return { ...state, isAuthenticated: false, wrongData: true };
		case "logout":
			return initialState;
		default:
			throw new Error("Unknown action");
	}
}

function LoginProvider({ children }) {
	// useReducer
	const [{ user, isAuthenticated, wrongData }, dispatch] = useReducer(
		reducer,
		initialState
	);

	// curr data from inputs:
	const [login, setLogin] = useState(FAKE_USER.login);
	const [password, setPassword] = useState(FAKE_USER.password);

	// Handling data entry in login inputs:
	function handleChangeLogin(e) {
		setLogin(e.target.value);
	}
	function handleChangePassword(e) {
		setPassword(e.target.value);
	}

	// Valid. data login:
	function loginWalidation(login, password) {
		if (login === FAKE_USER.login && password === FAKE_USER.password) {
			// console.log("YES -- data are the same");
			dispatch({ type: "login" });
		} else {
			// console.log("Your data aren't the same now!");
			dispatch({ type: "wrongFill" });
		}
	}

	return (
		<LoginContext.Provider
			value={{
				login,
				password,
				user,
				onChangeLogin: handleChangeLogin,
				onChangePass: handleChangePassword,
				loginWalidation,
				isAuthenticated,
				wrongData,
                dispatch
			}}
		>
			{children}
		</LoginContext.Provider>
	);
}

// custom context hook:
function useLogin() {
	const context = useContext(LoginContext);
	return context;
}

export { LoginProvider, useLogin };
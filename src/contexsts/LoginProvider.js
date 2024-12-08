import { createContext, useContext, useReducer, useState } from "react";

const LoginContext = createContext();

// Domyślnie nie jest określony użytkownik, ponieważ nie jest on zalogowany jeszcze
const initialState = {
	user: null,
	isAuthenticated: false,
	wrongData: false, //true oznacza że źle wypełniono pola logowania
};

// Fałszywe konto, na które będziemy się "logować"
const FAKE_USER = {
	name: "David",
	login: "DavidDev16",
	password: "Tomato123",
};

// reducer do obsługi logowania / wylogowania
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

	// Aktualne dane z inputów usera:
	const [login, setLogin] = useState(FAKE_USER.login);
	const [password, setPassword] = useState(FAKE_USER.password);

	// Obsługa wpisywania danych w inputy logowania:
	function handleChangeLogin(e) {
		setLogin(e.target.value);
	}
	function handleChangePassword(e) {
		setPassword(e.target.value);
	}

	// Walidacja danych logowania:
	function loginWalidation(login, password) {
		if (login === FAKE_USER.login && password === FAKE_USER.password) {
			console.log("TAK dane są takie same");
			dispatch({ type: "login" });
		} else {
			console.log("Nadal nie mamy zgodności danych");
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

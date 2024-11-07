import Logo from "../components/Logo";
import PreviousPage from "../components/PreviousPage";
import Hollow from "../components/Hollow";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

function Login() {
	return (
		<div className="pages_bgc">
			<div className="bg_shadow">
				<Logo details="logoDetails" />
				<div className="large_style margin_top_large">
					<LoginForm />
					<RegisterForm />
				</div>
				<Hollow height="80px" />
				<PreviousPage />
			</div>
		</div>
	);
}

export default Login;
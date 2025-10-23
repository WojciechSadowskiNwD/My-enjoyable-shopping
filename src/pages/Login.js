import Logo from "../layout/components/Logo";
import LoginForm from "../layout/login/LoginForm";
import RegisterForm from "../layout/login/RegisterForm";
import Hollow from "../layout/components/Hollow";
import PreviousPage from "../layout/components/PreviousPage";

export default function Login() {
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
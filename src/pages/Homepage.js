import BurgerNav from "../components/BurgerNav";
import Logo from "../components/Logo";
import DownArrow from '../components/DownArrow';


function Homepage() {
    return (
        <div className="homepage">
			<BurgerNav />
			<Logo />
            <DownArrow />
		</div>
    );
}


export default Homepage;
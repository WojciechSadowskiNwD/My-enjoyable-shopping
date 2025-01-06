import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import ShopSquare from "./ShopSquare";
import { useLists } from "../../contexsts/ListsProvider";
import styles from "./CreateShopList.module.scss";

function CreateShopList({ onChange }) {
	const { state } = useLists();

	// checks the width of the screen and sets the correct slider
	const [isLarge, setIsLarge] = useState(window.innerWidth >= 992);

	useEffect(() => {
		const handleResize = () => {
			setIsLarge(window.innerWidth >= 992);
		};
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	// for small views slider
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		nextArrow: <SamplePrevArrow />,
		prevArrow: <SampleNextArrow />,
	};

	// for large views slider
	const settings_large = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		nextArrow: <SamplePrevArrow />,
		prevArrow: <SampleNextArrow />,
	};

	// Transform the object into an array
	const shopsData = Object.values(state);
	return (
		<div className={styles.section_create_new_list}>
			<div className={styles.title_box}>
				<span onClick={onChange}>❌</span>
				<h2>Create a list to store</h2>
			</div>

			<div className={styles.slider}>
				{isLarge ? (
					<Slider {...settings_large}>
						{shopsData.map((shop, index) => (
							<ShopSquare
								key={index}
								name={shop.name}
								img={shop.img}
								thisList={shop}
							/>
						))}
					</Slider>
				) : (
					<Slider {...settings}>
						{shopsData.map((shop, index) => (
							<ShopSquare
								key={index}
								name={shop.name}
								img={shop.img}
								thisList={shop}
							/>
						))}
					</Slider>
				)}
			</div>
		</div>
	);
}

export default CreateShopList;



// SLIDER ARROWS COMPONENTS
function SamplePrevArrow({ className, style, onClick }) {
	return (
		<div
			className={className}
			style={{ ...style, display: "block", background: "none" }}
			onClick={onClick}
		></div>
	);
}

function SampleNextArrow({ className, style, onClick }) {
	return (
		<div
			className={className}
			style={{ ...style, display: "block", background: "none" }}
			onClick={onClick}
		></div>
	);
}

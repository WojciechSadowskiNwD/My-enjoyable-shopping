import React from "react";
import Slider from "react-slick";
import styles from "./CreateShopList.module.scss";
import ShopSquare from "./ShopSquare";
import { useLists } from "../../contexsts/ListsProvider";

function CreateShopList({ onChange }) {
	const { state } = useLists();

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		nextArrow: <SamplePrevArrow />,
		prevArrow: <SampleNextArrow />,
	};


	// Przekształcam obiekty w tablicę
	const shopsData = Object.values(state);


	return (
		<div className={styles.section_create_new_list}>
			<div className={styles.title_box}>
				<span onClick={onChange}>❌</span>
				<h2>Create a list to store</h2>
			</div>

			<div className={styles.slider}>
				<Slider {...settings}>
					{shopsData.map((shop, index) => (
						<ShopSquare key={index} name={shop.name} img={shop.img} />
					))}
				</Slider>
			</div>
		</div>
	);
}

export default CreateShopList;

// SLIDER ARROWS
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

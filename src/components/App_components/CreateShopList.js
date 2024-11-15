import React from "react";
import Slider from "react-slick";
import styles from "./CreateShopList.module.scss";
import ShopSquare from "./ShopSquare";

// images shops
import biedronka from "../../img/shops/biedronka_1.png";
import auchan from "../../img/shops/auchan_1.png";
import lidl from "../../img/shops/lidl_1.png";
import netto from "../../img/shops/netto_1.png";
import carrefour from "../../img/shops/carrefour_1.jpg";
import dino from "../../img/shops/dino_1.png";

function CreateShopList({onChange}) {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		nextArrow: <SamplePrevArrow />,
		prevArrow: <SampleNextArrow />,
	};

	const shopsImages = [
		{ id: 0, name: "biedronka", img: biedronka },
		{ id: 1, name: "auchan", img: auchan },
		{ id: 2, name: "lidl", img: lidl },
		{ id: 3, name: "netto", img: netto },
		{ id: 4, name: "carrefour", img: carrefour },
		{ id: 5, name: "dino", img: dino },
	];

	return (
		<div className={styles.section_create_new_list}>
			<div className={styles.title_box}>
				<span onClick={onChange}>❌</span>
				<h2>Create a list to store</h2>
			</div>

			<div className={styles.slider}>
				<Slider {...settings}>
					{shopsImages.map((item) => (
						<ShopSquare key={item.id} name={item.name} img={item.img} />
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

import styles from "./StatsCounters.module.scss";
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const StatsCounters = () => {
  const [downloadsCount, setDownloadsCount] = useState(0);
	const [commentsCount, setCommentsCount] = useState(0);
	const [moneyCount, setMoneyCount] = useState(0);
	const { ref, inView } = useInView({
		triggerOnce: true, // licznik uruchomi się tylko raz
		threshold: 0.1, // aktywuje licznik, gdy 10% komponentu będzie widoczne
	});

	useEffect(() => {
		if (inView) {
      // cuunters:
			let startComments = 0;
			let startDownloads = 0;
      let startMoneyCollected = 0;
			const endComments = 800; // Liczba docelowa
			const endDownloads = 1190; // Liczba docelowa pobrań
			const endMoneyCollected = 100400; // Liczba docelowa pobrań
			const duration = 800; // Czas trwania animacji w ms
			const incTimeComments = Math.floor(duration / endComments); // Czas między inkrementacjami
			const incTimeDownloads = Math.floor(duration / endDownloads);
      const incTimeMoneyCollected = Math.floor(duration/ endMoneyCollected);


			const timerComments = setInterval(() => {
				startComments += 2;
				setCommentsCount((prevCount) => {
					if (prevCount >= endComments) {
						clearInterval(timerComments);
						return endComments; // Zatrzymanie licznika
					}
					return prevCount + 2;
				});
			}, incTimeComments);

			const timerDownloads = setInterval(() => {
				startDownloads += 2;
				setDownloadsCount((prevDownloads) => {
					if (prevDownloads >= endDownloads) {
						clearInterval(timerDownloads);
						return endDownloads;
					}
					return prevDownloads + 2;
				});
			}, incTimeDownloads);

      const timerMoneyCollected = setInterval(() => {
        startMoneyCollected += 150;
        setMoneyCount((prevMoney) => {
          if(prevMoney >= endMoneyCollected) {
            clearInterval(timerMoneyCollected);
            return endMoneyCollected;
          }
          return prevMoney + 150;
        });
      }, incTimeMoneyCollected);


			return () => {
				clearInterval(timerComments);
        clearInterval(timerDownloads);
        clearInterval(timerMoneyCollected);
			}; // Wyczyść timery, jeśli komponenty zostaną odmontowane
		}
	}, [inView]);



	return (
		<div
			ref={ref}
			className={styles.info_bar}
			style={{
				transition: "opacity 1s ease-out",
				opacity: inView ? 1 : 0, // Efekt pojawiania się licznika
			}}
		>
			<div className={styles.counter_item}>
				<p>Customer downloads</p>
				<i class="fa-solid fa-cart-arrow-down"></i>
				<p>{downloadsCount}</p>
			</div>
			<div className={styles.counter_item}>
				<p>Positive comments</p>
				{/* <i class="fa-solid fa-star"></i> */}
				<i class="fa-regular fa-star"></i>
				<p>{commentsCount}</p>
			</div>
			<div className={styles.counter_item}>
				<p>Funds raised</p>
				<i class="fa-solid fa-sack-dollar"></i>
				<p>{moneyCount} $</p>
			</div>
		</div>
	);
};

export default StatsCounters;

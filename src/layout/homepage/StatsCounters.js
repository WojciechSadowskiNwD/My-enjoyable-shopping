import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styles from "./StatsCounters.module.scss";

const StatsCounters = () => {
  const [downloadsCount, setDownloadsCount] = useState(0);
	const [commentsCount, setCommentsCount] = useState(0);
	const [moneyCount, setMoneyCount] = useState(0);
	const { ref, inView } = useInView({
		triggerOnce: true, // counter will start only one time
		threshold: 0.1, // activate counter, when user see min. 10% component height
	});  
 
	useEffect(() => {  
		if (inView) {
      // cuunters:
			let startComments = 0;
			let startDownloads = 0;
      		let startMoneyCollected = 0;
			const endComments = 800;
			const endDownloads = 1190;
			const endMoneyCollected = 100400;
			const duration = 800;
			const incTimeComments = Math.floor(duration / endComments);
			const incTimeDownloads = Math.floor(duration / endDownloads);
      const incTimeMoneyCollected = Math.floor(duration/ endMoneyCollected);


			const timerComments = setInterval(() => {
				startComments += 2;
				setCommentsCount((prevCount) => {
					if (prevCount >= endComments) {
						clearInterval(timerComments);
						return endComments; // stop counter
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
			}; // clear all timers
		}
	}, [inView]);


	return (
		<div
			ref={ref}
			className={styles.info_bar}
			style={{
				transition: "opacity 1s ease-out",
				opacity: inView ? 1 : 0,
			}}
		> 
			<div className={styles.counter_item}>
				<p className={styles.first_paragraph}>Customer downloads</p>
				<i className={`fa-solid fa-cart-arrow-down ${styles.gradient_color}`}></i>
				<div className={styles.second_paragraph}><p>{downloadsCount}</p></div>
			</div>
			<div className={styles.counter_item}>
				<p className={styles.first_paragraph}>Positive comments</p>
				<i className={`fa-regular fa-star ${styles.gradient_color}`}></i>
				<div className={styles.second_paragraph}><p>{commentsCount}</p></div>
			</div>
			<div className={styles.counter_item}>
				<div className={styles.first_paragraph}><p className={styles.must_top_position}>Funds raised</p></div>
				<i class={`fa-solid fa-sack-dollar ${styles.gradient_color}`}></i>
				<div className={styles.second_paragraph}><p>{moneyCount} $</p></div>
			</div>
		</div>
	);
};

export default StatsCounters;
import React from "react";
import styles from "./TextAnimation.module.css";
import { Random } from "react-animated-text";

export const TextAnimation = () => (
	<div className={styles.animatedText}>
		<Random
			text='Redefining Street Fashion!'
			effect='jump'
			effectChange={1.0}
			effectDuration={0.4}
		/>
	</div>
);

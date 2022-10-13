import React, { Component } from "react";
import styles from "./Colors.module.css";

export class Colors extends Component {
	render() {
		const { colors } = this.props;
		return (
			<div className={styles.colors}>
				{colors.map((color, index) => (
					<button style={{ background: color }} key={index}></button>
				))}
			</div>
		);
	}
}

export default Colors;

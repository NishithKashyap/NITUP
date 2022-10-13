import React, { Component } from "react";
import styles from "./DetailsThumb.module.css";

export class DetailsThumb extends Component {
	render() {
		const { images, tab, myRef } = this.props;
		return (
			<div className={styles.thumb} ref={myRef}>
				{images.map((img, index) => (
					<img
						src={img}
						alt=''
						key={index}
						onClick={() => tab(index)}
					/>
				))}
			</div>
		);
	}
}

export default DetailsThumb;

import { useState } from 'react';
import styles from './RandomColorGenerator.module.scss';

export default function RandomColorGenerator() {
	const [color, setColor] = useState('#fff');
	const [colorMode, setColorMode] = useState('hex');

	const updateHexColor = () => {
		const RGBArray = [];
		for (let i = 0; i < 3; i++) {
			RGBArray.push(Math.floor(Math.random() * 256));
		}
		const color = `rgb(${RGBArray.join(',')})`;
		setColor(color);
		return color;
	};
	const updateRGBColor = () => {
		const characterArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
		let color = '#';
		for (let i = 0; i < 6; i++) {
			color += characterArray[Math.floor(Math.random() * characterArray.length)];
		}
		setColor(color);
		return color;
	};
	const updateColorMode = () => {
		if (colorMode === 'hex') {
			setColorMode('rgb');
			setColor(updateRGBColor());
		} else if (colorMode === 'rgb') {
			setColorMode('hex');
			setColor(updateHexColor());
		}
	};

	return (
		<div className={styles['random-color-generator']} style={{ backgroundColor: color }}>
			<div className={styles['buttons-container']}>
				<button onClick={() => updateHexColor()}>Generate random color : HEX</button>
				<button onClick={() => updateRGBColor()}>Generate random color : RGB</button>
				<button onClick={() => updateColorMode()}>Convert Color mode</button>
			</div>
			<p className={styles['current-color-indicators']}>
				<span className={styles['current-color-mode']}>Current color : </span>{' '}
				<span className={styles['current-color']}>{color}</span>
			</p>
		</div>
	);
}

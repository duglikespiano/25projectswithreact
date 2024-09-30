import { useState } from 'react';
import './Darkmode.scss';

export default function Darkmode() {
	const [darkmode, setDarkmode] = useState(false);

	return (
		<div id="Darkmode" className={`${darkmode && 'active'}`}>
			<div>This is {darkmode ? 'dark' : 'light'} mode</div>
			<button
				onClick={() => {
					setDarkmode(!darkmode);
				}}
			>
				switch mode
			</button>
		</div>
	);
}

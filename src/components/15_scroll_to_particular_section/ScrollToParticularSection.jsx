import { useRef } from 'react';
import './ScrollToParticularSection.scss';

export default function ScrollToParticularSection() {
	const ref = useRef();

	const data = [
		{
			label: 'First Card',
			style: {
				background: 'red',
			},
		},
		{
			label: 'Second Card',
			style: {
				background: 'green',
			},
		},
		{
			label: 'Third Card',
			style: {
				background: 'brown',
			},
		},
		{
			label: 'Fourth Card',
			style: {
				background: 'skyblue',
			},
		},
		{
			label: 'Fifth Card',
			style: {
				background: 'grey',
			},
		},
	];

	function handleScrollToSection() {
		let position = ref.current.getBoundingClientRect().top;
		window.scrollTo({
			top: position,
			behavior: 'smooth',
		});
	}

	return (
		<div id="ScrollToParticularSection">
			<h1>Scroll to a particular section</h1>
			<button onClick={handleScrollToSection}>Click to scroll to bottom</button>
			<div style={{ width: '100%' }}>
				{data.map((item, i) => (
					<h3 ref={i === 2 ? ref : null}>{item.label}</h3>
				))}
			</div>
		</div>
	);
}

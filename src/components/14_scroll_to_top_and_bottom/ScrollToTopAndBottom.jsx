import { useRef } from 'react';
import './ScrollToTopAndBottom.scss';

export default function ScrollToTopAndBottom() {
	const numberOfLines = 100;
	let lines = [];

	for (let i = 0; i < numberOfLines; i++) {
		lines.push(<p>{i}</p>);
	}

	const bottomRef = useRef(null);

	function scrollToTop() {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	}

	function scrollToBottom() {
		bottomRef.current.scrollIntoView({ behavior: 'smooth' });
	}

	return (
		<div id="ScrollToTopAndBottom">
			<button onClick={scrollToBottom}>Click to scroll to bottom</button>
			{lines}
			<div ref={bottomRef}></div>
			<button onClick={scrollToTop}>Click to scroll to top</button>
		</div>
	);
}

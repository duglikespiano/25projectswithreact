import { useState, useRef } from 'react';
import useOutsideCLick from './Hook';
import './CustomHook2.scss';

export default function UseOnClickOutside(url, options = {}) {
	const [showContent, setShowContent] = useState(false);
	const ref = useRef();
	useOutsideCLick(ref, () => setShowContent(false));

	return (
		<div id="CustomHook2">
			{showContent ? (
				<div ref={ref} className="container">
					<h1>This is a random content</h1>
					<p>Please click outside of this to close this component.</p>
					<p>It won't close if you click inside of this component.</p>
				</div>
			) : (
				<button onClick={() => setShowContent(true)}>Show Content</button>
			)}
		</div>
	);
}

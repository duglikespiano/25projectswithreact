import useWindowResize from './Hook';
import './CustomHook3.scss';

export default function UseWindowResize() {
	const windowSize = useWindowResize();
	const { width, height } = windowSize;
	return (
		<div id="CustomHook3">
			<h1>Use Window Resize Hook</h1>
			<p>Width is {width}</p>
			<p>Height is {height}</p>
		</div>
	);
}

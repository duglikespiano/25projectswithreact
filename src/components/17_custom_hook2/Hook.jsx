import { useEffect } from 'react';

export default function CustomHook2(ref, handler) {
	useEffect(() => {
		function listener(e) {
			if (!ref.current || ref.current.contains(e.target)) {
				return;
			} else {
				handler(e);
			}
		}
		document.addEventListener('mousedown', listener);
		document.addEventListener('touchstart', listener);

		return () => {
			document.removeEventListener('mousedown', listener);
			document.removeEventListener('touchstart', listener);
		};
	}, [handler, ref]);
	return (
		<div>
			<h1>Use Custom Hook</h1>
		</div>
	);
}

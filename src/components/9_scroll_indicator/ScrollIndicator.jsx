import { useState, useEffect, useCallback } from 'react';
import './ScrollIndicator.scss';

export default function ScrollIndicator() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [scrollPercentage, setScrollPercentage] = useState(0);

	const url = 'https://dummyjson.com/products?limit=200';

	const handleScrollPercentage = () => {
		const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop;
		const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
		setScrollPercentage((howMuchScrolled / height) * 100);
	};

	const fetchData = useCallback(async (fetchURL) => {
		try {
			setLoading(true);
			const res = await fetch(fetchURL);
			const data = await res.json();
			if (data && data.products && data.products.length > 0) {
				setData(data.products);
				setLoading(false);
			}
		} catch (error) {
			setErrorMessage(error.message);
			console.log(error.message);
		}
	}, []);

	useEffect(() => {
		fetchData(url);
	}, [url, fetchData]);

	useEffect(() => {
		window.addEventListener('scroll', handleScrollPercentage);
		return () => {
			window.removeEventListener('scroll', () => {});
		};
	}, []);

	if (loading) return <div>Loading Data...</div>;
	if (errorMessage) return <div>Error! {errorMessage} </div>;

	return (
		<div id="ScrollIndicator">
			<div className="top-container">
				<div className="scroll-progress-tacking-container">
					<div className="current-progress-bar" style={{ width: `${scrollPercentage}%` }}></div>
				</div>
			</div>

			<div className="data-container">
				<h1>Custom Scroll Indicator</h1>
				<div className="items">
					{data && data.length > 0
						? data.map((item, i) => (
								<p key={i} className="item">
									{item.title}
								</p>
						  ))
						: null}
				</div>
			</div>
		</div>
	);
}

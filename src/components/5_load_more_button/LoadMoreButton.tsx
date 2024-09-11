import { useState, useEffect, useCallback } from 'react';
import './LoadMoreButton.scss';

type data = {
	id: number;
	title: string;
	price: number;
	thumbnail: string;
};
const defaultData: data[] = [];

export default function LoadMoreButton() {
	const limit = 50;
	const howManyPerAFetch = 10;
	const [data, setData] = useState(defaultData);
	const [count, setCount] = useState(0);
	const [buttonActive, setButtonActive] = useState(true);

	const fetchData = useCallback(async () => {
		const url = `https://dummyjson.com/products?limit=10&skip=${count * howManyPerAFetch}`;
		const res = await fetch(url);
		const fetchedData = await res.json();
		setData(() => [...data, ...fetchedData.products]);
	}, [data, count]);

	useEffect(() => {
		fetchData();
		setCount(1);
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		if (count * howManyPerAFetch === limit) setButtonActive(false);
	}, [data, count]);

	return (
		<div id="load-more-button">
			<div className="products-grid">
				{data.map((item) => (
					<div className="card" key={item.id}>
						<div className="title-price">
							<div className="title">{item.title}</div>
							<div className="price">{item.price}</div>
						</div>
						<figure className="image">
							<img src={item.thumbnail} alt="" />
						</figure>
					</div>
				))}
			</div>

			<div className="counter">count : {count}</div>
			<button
				onClick={() => {
					setCount((count) => count + 1);
					fetchData();
				}}
				disabled={!buttonActive}
			>
				Load More
			</button>
		</div>
	);
}

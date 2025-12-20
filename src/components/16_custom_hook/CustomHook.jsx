import useFetch from './Hook';
import './CustomHook.scss';

export default function CustomHook() {
	const { data, pending, error } = useFetch('https://dummyjson.com/products', {});
	return (
		<div id="CustomHook">
			<h1>Use Custom Hook</h1>
			{pending ? <h2>Pending! Please wait!</h2> : null}
			{data && data.products && data.products.length ? data.products.map((item, i) => <p key={i}>{item.title}</p>) : null}
			{error ? <h2>There's an error!!!</h2> : null}
		</div>
	);
}

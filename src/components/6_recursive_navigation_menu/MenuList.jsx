import MenuItem from './MenuItem';

export default function MenuList({ list = [] }) {
	return (
		<ul className="menu-list">
			{list && list.length
				? list.map((listItem) => (
						<MenuItem key={Math.random()} label={listItem.label} to={listItem.to} children={listItem.children} />
				  ))
				: null}
		</ul>
	);
}

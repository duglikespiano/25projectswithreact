import MenuItem from './MenuItem';

type ListItem = {
	label: string;
	to: string;
	children?: [
		{
			label: string;
			to: string;
		}
	];
};

type MenuListProps = {
	list: ListItem[];
};

export default function MenuList({ list = [] }: MenuListProps) {
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

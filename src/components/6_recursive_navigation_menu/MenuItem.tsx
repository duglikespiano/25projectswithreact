import { useState } from 'react';
import MenuList from './MenuList';

type item = {
	label: string;
	to: string;
	children?: [
		{
			label: string;
			to: string;
		}
	];
};

export default function MenuItem(props: item) {
	const [displayCurrentChildren, setDisplayCurrentChildren] = useState({} as any);
	const handleToggleChildren = (getCurrentLabel: string) => {
		setDisplayCurrentChildren({
			...displayCurrentChildren,
			[getCurrentLabel]: !displayCurrentChildren[getCurrentLabel],
		});
		console.log(displayCurrentChildren);
	};

	return (
		<li className="menu-item">
			<div>
				<div>
					{' '}
					<p>{props.label}</p>
				</div>
				{props && props.children && props.children.length ? (
					<span onClick={() => handleToggleChildren(props.label)}>+</span>
				) : null}
				{props && props.children && props.children.length > 0 ? <MenuList list={props.children} /> : null}
			</div>
		</li>
	);
}

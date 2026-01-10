import { useState } from 'react';
import MenuList from './MenuList';

export default function MenuItem(props) {
	const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});
	const handleToggleChildren = (getCurrentLabel) => {
		setDisplayCurrentChildren({
			...displayCurrentChildren,
			[getCurrentLabel]: !displayCurrentChildren[getCurrentLabel],
		});
	};

	return (
		<li className="menu-item">
			<div style={{ display: 'flex', gap: '20px' }}>
				<p onClick={() => handleToggleChildren(props.label)} style={{ backgroundColor: 'yellow' }}>
					{props.label}
				</p>
				{props && props.children && props.children.length ? <span>{displayCurrentChildren[props.label] ? '-' : '+'}</span> : null}
			</div>
			{props && props.children && props.children.length > 0 && displayCurrentChildren[props.label] ? (
				<MenuList list={props.children} />
			) : null}
		</li>
	);
}

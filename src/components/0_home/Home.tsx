import { useState } from 'react';
import { Link } from 'react-router-dom';
import { componentsInfo, updateHexColor } from './componentsInfo';
import styles from './Home.module.scss';

export default function Home() {
	const [components] = useState(componentsInfo);

	return (
		<div className={styles['home']}>
			<ul className={styles['components']}>
				{components.map((component) => (
					<li className={styles['component']} key={component.id} style={{ backgroundColor: updateHexColor() }}>
						<Link to={component.path}>{component.name}</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

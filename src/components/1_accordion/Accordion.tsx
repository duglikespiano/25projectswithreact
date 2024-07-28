import { useState } from 'react';
import Item from './Item';
import { data } from './data';
import styles from './Accordion.module.scss';

export default function Accordion() {
	const [items, setItems] = useState(data);
	return (
		<div className={styles['accordion']}>
			<ul className={styles['items']}>
				{items.map((item) => (
					<Item id={item.id} title={item.title} description={item.description} />
				))}
			</ul>
		</div>
	);
}

import { useState } from 'react';
import styles from './Accordion.module.scss';
import { data } from './data';

export default function Accordion() {
	const [items, setItems] = useState(data);
	const toggleActive = (id: number) => {
		const editedData = items;
		const clickedItemIndex = items.findIndex((item) => item.id === id);
		editedData[clickedItemIndex].active = !editedData[clickedItemIndex].active;
		setItems([...editedData]);
	};

	return (
		<div className={styles['accordion']}>
			<ul className={styles['items']}>
				{items.map((item) => {
					return (
						<li className={styles['item']} key={item.id}>
							<p className={styles['item-title']}>title : {item.title}</p>
							<div className={styles['item-description-wrapper']}>
								<p className={item.active ? styles['item-description.test'] : styles['item-description']}>
									title : {item.description}
								</p>
							</div>
							<button onClick={() => toggleActive(item.id)} className={styles['item-button']}>
								Click to open
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

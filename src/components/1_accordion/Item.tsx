import { useState } from 'react';
import { DataType } from './data';
import styles from './Item.module.scss';

export default function Item(props: DataType) {
	const [isOpen, setIsOpen] = useState(false);
	const setIsOpenHandler = (isOpen: boolean) => {
		setIsOpen(!isOpen);
	};
	return (
		<li className={styles['item']} key={props.id}>
			<p className={styles['item-title']}>title : {props.title}</p>
			<div className={styles['item-description-wrapper']}>
				{isOpen ? <p className={styles['item-description']}>{props.description}</p> : null}
			</div>
			<button onClick={() => setIsOpenHandler(isOpen)} className={styles['item-button']}>
				Click to open
			</button>
		</li>
	);
}

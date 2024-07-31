import Item from './Item';
import { data } from './data';
import styles from './Accordion.module.scss';

export default function Accordion() {
	return (
		<div className={styles['accordion']}>
			<ul className={styles['items']}>
				{data.map((item) => (
					<Item id={item.id} title={item.title} description={item.description} />
				))}
			</ul>
		</div>
	);
}

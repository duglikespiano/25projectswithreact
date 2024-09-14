import data from './data';
import MenuList from './MenuList';
import './RecursiveNavigationMenu.scss';

export default function RecursiveNavigationMenu() {
	return (
		<div id="RecursiveNavigationMenu">
			<MenuList list={data as any} />
		</div>
	);
}

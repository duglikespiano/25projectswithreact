import { useState } from 'react';
import './Tabs.scss';

export default function Tabs() {
	const tabInformation = [
		{ id: 1, content: 'This is tab1', isActive: false },
		{ id: 2, content: 'This is tab2', isActive: false },
		{ id: 3, content: 'This is tab3', isActive: false },
		{ id: 4, content: 'This is tab4', isActive: false },
	];

	const [activeTabId, setActiveTabId] = useState(1);

	return (
		<div id="Tabs">
			<div className="tabs-wrapper">
				<div className="tab__buttons">
					{tabInformation.map((tab) => (
						<button
							className={`tab__button${tab.id === activeTabId ? ' active' : ''}`}
							key={tab.id}
							onClick={() => setActiveTabId(tab.id)}
						>
							tab{tab.id}
						</button>
					))}
				</div>
				<div className="tab__contents">
					{tabInformation.map((tab) =>
						tab.id === activeTabId ? (
							<p className="tab__content active" key={tab.id}>
								{tab.content}
							</p>
						) : null
					)}
				</div>
			</div>
		</div>
	);
}

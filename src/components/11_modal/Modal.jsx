import { useState } from 'react';
import ModalBackground from './ModalBackground';
import './Modal.scss';

export default function Modal() {
	const [showModalPopup, setShowModalPopup] = useState(false);

	function handleToggleModalPopup() {
		setShowModalPopup(!showModalPopup);
	}

	function closeModalPopup() {
		setShowModalPopup(false);
	}
	return (
		<div id="Modal">
			<button onClick={handleToggleModalPopup}>Open Modal Popup</button>
			{showModalPopup && <ModalBackground closeModalPopup={closeModalPopup} body={<div>Customized Body</div>} />}
		</div>
	);
}

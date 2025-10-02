export default function ModalBackground({ id, header, body, footer, closeModalPopup }) {
	return (
		<div id={id || 'ModalBackground'} className="modal-background">
			<div className="modal-content">
				<div className="header">
					<span className="close-modal-icon" onClick={closeModalPopup}>
						&times;
					</span>
					<h2>{header ? header : 'Header'}</h2>
				</div>
				<div className="body">{body ? body : <p>This is our Modal Body</p>}</div>
				<div className="footer">{footer ? footer : <h2>Footer is here</h2>}</div>
			</div>
		</div>
	);
}

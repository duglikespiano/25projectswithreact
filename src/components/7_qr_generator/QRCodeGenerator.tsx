import QRCode from 'react-qr-code';
import './QRCodeGenerator.scss';
import { useState } from 'react';

export default function QRCodeGenerator() {
	const [qrCode, setQRCode] = useState('');
	const [input, setInput] = useState('');

	const handleGenerateQRCode = () => {
		setQRCode(input);
		setInput('');
	};

	return (
		<div id="qr-generator">
			<h3>QR Code Generator</h3>
			<div className="input-container">
				<input
					type="text"
					name="text-for-qr-code"
					onChange={(event) => {
						setInput(event.target.value);
					}}
					value={input}
					placeholder="Enter text here"
				/>
				<button onClick={handleGenerateQRCode} disabled={input && input.trim() !== '' ? false : true}>
					Generate
				</button>
			</div>
			<QRCode id="qr-code" value={qrCode} size={400} bgColor="#fff" />
		</div>
	);
}

import { useState } from 'react';
import { IoIosStar } from 'react-icons/io';
import './StarRating.scss';

export default function StarRating() {
	const [rating, setRating] = useState(0);

	return (
		<div id="StarRating">
			<IoIosStar
				className={rating > 0 ? `star active` : `star`}
				onClick={() => {
					setRating(1);
				}}
				onMouseEnter={() => {
					setRating(1);
				}}
			/>
			<IoIosStar
				className={rating > 1 ? `star active` : `star`}
				onClick={() => {
					setRating(2);
				}}
				onMouseEnter={() => {
					setRating(2);
				}}
			/>
			<IoIosStar
				className={rating > 2 ? `star active` : `star`}
				onClick={() => {
					setRating(3);
				}}
				onMouseEnter={() => {
					setRating(3);
				}}
			/>
			<IoIosStar
				className={rating > 3 ? `star active` : `star`}
				onClick={() => {
					setRating(4);
				}}
				onMouseEnter={() => {
					setRating(4);
				}}
			/>
			<IoIosStar
				className={rating > 4 ? `star active` : `star`}
				onClick={() => {
					setRating(5);
				}}
				onMouseEnter={() => {
					setRating(5);
				}}
			/>
		</div>
	);
}

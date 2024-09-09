import { useState, useEffect } from 'react';
import './imageSlider.scss';

type responseType = {
	id: string;
	author: string;
	width: number;
	height: number;
	url: string;
	download_url: string;
};

export default function ImageSlider() {
	const responseArray: responseType[] = [];
	const [images, setImages] = useState(responseArray);
	const [isLoading, setIsLoading] = useState(false);
	const [sliderNumber, setSlideNumber] = useState(1);
	const imagesLimit = 10;
	const page = 5;

	const fetchImages = async (page: number, limit: number) => {
		setIsLoading(true);
		const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`);
		const images = await response.json();
		setImages(images);
		setIsLoading(false);
	};

	const updateSlider = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		const direction = (event.target as HTMLElement).className;
		console.log(direction);
		if (direction === 'to-prev' && sliderNumber !== 1) {
			setSlideNumber(sliderNumber - 1);
		} else if (direction === 'to-next' && sliderNumber !== imagesLimit) {
			setSlideNumber(sliderNumber + 1);
		}
	};

	useEffect(() => {
		fetchImages(page, imagesLimit);
	}, []);

	return (
		<div id="image-slider">
			{isLoading && <div className="loading">Loading...</div>}
			{!isLoading && (
				<div className="slider-frame">
					{images.map((item) => (
						<div className="slider" style={{ transform: `translateX(-${(sliderNumber - 1) * 100}%)` }}>
							<figure>
								<img src={item.download_url} alt="" />
							</figure>
						</div>
					))}
					<div className="slider-number">
						{sliderNumber}/{imagesLimit}
					</div>
					<div className="slider-controllers">
						<button
							className="to-prev"
							onClick={(event) => {
								updateSlider(event);
							}}
						>
							{'<'}
						</button>
						<button
							className="to-next"
							onClick={(event) => {
								updateSlider(event);
							}}
						>
							{'>'}
						</button>
					</div>
				</div>
			)}
		</div>
	);
}

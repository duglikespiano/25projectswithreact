import { useEffect, useState } from 'react';
import Search from './Search';

export default function Weather() {
	const [search, setSearch] = useState('');
	const [loading, setLoading] = useState(false);
	const [weather, setWeather] = useState(null);

	const fetchWeatherData = async (param) => {
		try {
			setLoading(true);
			const url = `https://api.openweathermap.org/data/2.5/weather?q=${param}&units=metric&appid=${process.env.REACT_APP_WEATHER_APP}`;
			const response = await fetch(url);
			const data = await response.json();
			console.log(data);
			setLoading(false);
			if (data) {
				setWeather(data);
				setLoading(false);
			}
		} catch (err) {
			setLoading(false);
			console.error(err);
		}
	};

	useEffect(() => {
		fetchWeatherData('Fukuoka');
	}, []);

	const handleSearch = () => {
		fetchWeatherData(search);
	};

	const getCurrentDate = () => {
		return new Date().toLocaleDateString('en-us', {
			weekday: 'long',
			month: 'long',
			day: 'numeric',
			year: 'numeric',
		});
	};

	return (
		<div id="Weather">
			<Search search={search} setSearch={setSearch} handleSearch={handleSearch} />
			{loading ? (
				<p className="loading">Loading...</p>
			) : (
				<div className="city">
					<p>
						{weather && weather.name} <span>{weather && weather.sys.country}</span>
					</p>
					<div className="date">
						<span>{getCurrentDate()}</span>
					</div>
					<div className="temp">
						<p>{weather && weather.main.temp}°</p>
					</div>
					<p className="description">{weather && weather.weather[0].description}</p>
					<div className="weather-info">
						<div className="wind">
							<p>{weather && weather.wind.speed}m/s</p>
							<p>Wind Speed</p>
						</div>
						<div className="humidity">
							<p>{weather && weather.main.humidity}%</p>
							<p>Humidity</p>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

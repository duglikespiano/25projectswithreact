import Weather from './components/Weather';
import './WeatherApp.scss';

export default function WeatherApp() {
	return (
		<div id="WeatherApp">
			<div className="container">
				<Weather />
			</div>
		</div>
	);
}

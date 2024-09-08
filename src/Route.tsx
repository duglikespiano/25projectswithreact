import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/0_home/Home';
import Accordion from './components/1_accordion/Accordion';
import RandomColorGenerator from './components/2_random_color_generator/RandomColorGenerator';
import StarRating from './components/3_star_rating/StarRating';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/1_accordion',
		element: <Accordion />,
	},
	{
		path: '/2_random_color_generator',
		element: <RandomColorGenerator />,
	},
	{
		path: '/3_star_rating',
		element: <StarRating />,
	},
]);

export default function Route() {
	return <RouterProvider router={router} />;
}

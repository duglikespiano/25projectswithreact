import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/0_home/Home';
import Accordion from './components/1_accordion/Accordion';
import RandomColorGenerator from './components/2_random_color_generator/RandomColorGenerator';
import StarRating from './components/3_star_rating/StarRating';
import ImageSlider from './components/4_image_slider/imageSlider';
import LoadMoreButton from './components/5_load_more_button/LoadMoreButton';
import RecursiveNavigationMenu from './components/6_recursive_navigation_menu/RecursiveNavigationMenu';
import QRCodeGenerator from './components/7_qr_generator/QRCodeGenerator';

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
	{
		path: '/4_image_slider',
		element: <ImageSlider />,
	},
	{
		path: '/5_load_more_button',
		element: <LoadMoreButton />,
	},
	{
		path: '/6_recursive_navigation_menu',
		element: <RecursiveNavigationMenu />,
	},
	{
		path: '/7_qr_code_generator',
		element: <QRCodeGenerator />,
	},
]);

export default function Route() {
	return <RouterProvider router={router} />;
}

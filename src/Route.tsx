import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/0_home/Home';
import Accordion from './components/1_accordion/Accordion';
import RandomColorGenerator from './components/2_random_color_generator/RandomColorGenerator';
import StarRating from './components/3_star_rating/StarRating';
import ImageSlider from './components/4_image_slider/imageSlider';
import LoadMoreButton from './components/5_load_more_button/LoadMoreButton';
import RecursiveNavigationMenu from './components/6_recursive_navigation_menu/RecursiveNavigationMenu';
import QRCodeGenerator from './components/7_qr_generator/QRCodeGenerator';
import Darkmode from './components/8_darkmode/Darkmode';
import ScrollIndicator from './components/9_scroll_indicator/ScrollIndicator';
import Tabs from './components/10_tabs/Tabs';
import Modal from './components/11_modal/Modal';
import GithubProfileFinder from './components/12_github_profile_finder/GithubProfileFinder';
import Autocomplete from './components/13_autocomplete/Autocomplete';
import ScrollToTopAndBottom from './components/14_scroll_to_top_and_bottom/ScrollToTopAndBottom';
import ScrollToParticularSection from './components/15_scroll_to_particular_section/ScrollToParticularSection';
import CustomHook from './components/16_custom_hook/CustomHook';
import CustomHook2 from './components/17_custom_hook2/CustomHook2';
import CustomHook3 from './components/18_custom_hook3/CustomHook3';
import WeatherApp from './components/19_weather_app/WeatherApp';

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
	{
		path: '/8_darkmode',
		element: <Darkmode />,
	},
	{
		path: '/9_scroll_indicator',
		element: <ScrollIndicator />,
	},
	{
		path: '/10_Tabs',
		element: <Tabs />,
	},
	{
		path: '/11_Modal',
		element: <Modal />,
	},
	{
		path: '/12_github_profile_finder',
		element: <GithubProfileFinder />,
	},
	{
		path: '/13_autocomplete',
		element: <Autocomplete />,
	},
	{
		path: '/14_scroll_to_top_and_bottom',
		element: <ScrollToTopAndBottom />,
	},
	{
		path: '/15_scroll_to_particular_section',
		element: <ScrollToParticularSection />,
	},
	{
		path: '/16_custom_hook',
		element: <CustomHook />,
	},
	{
		path: '/17_custom_hook2',
		element: <CustomHook2 />,
	},
	{
		path: '/18_custom_hook3',
		element: <CustomHook3 />,
	},
	{
		path: '/19_weather_app',
		element: <WeatherApp />,
	},
]);

export default function Route() {
	return <RouterProvider router={router} />;
}

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/0_home/Home';
import Accordion from './components/1_accordion/Accordion';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/1_accordion',
		element: <Accordion />,
	},
]);

export default function Route() {
	return <RouterProvider router={router} />;
}

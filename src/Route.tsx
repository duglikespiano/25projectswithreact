import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Home from './components/0_home/Home';
import { discoverComponents } from './utils/componentDiscovery';

// Dynamically import all components
function importComponent(folderName: string) {
	// Extract the number and name parts
	const match = folderName.match(/^(\d+)_(.+)$/);
	if (!match) return null;

	const [, , name] = match;

	// Convert to PascalCase for component name
	const componentName = name
		.split('_')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join('');

	// Lazy load the component
	return lazy(() => import(`./components/${folderName}/${componentName}`));
}

// Auto-discover components and create routes
const components = discoverComponents();
const dynamicRoutes = components.map((component) => {
	const folderName = component.path.replace('/', '');
	const Component = importComponent(folderName);

	return {
		path: component.path,
		element: Component ? (
			<Suspense fallback={<div>Loading...</div>}>
				<Component />
			</Suspense>
		) : (
			<div>Component not found</div>
		),
	};
});

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	...dynamicRoutes,
]);

export default function Route() {
	return <RouterProvider router={router} />;
}

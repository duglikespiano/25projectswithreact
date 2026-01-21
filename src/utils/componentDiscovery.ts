export interface ComponentInfo {
	id: number;
	name: string;
	path: string;
}

// Type declaration for Webpack's require.context
interface RequireContext {
	keys: () => string[];
	<T>(id: string): T;
}

declare const require: {
	context: (
		directory: string,
		useSubdirectories: boolean,
		regExp: RegExp
	) => RequireContext;
	<T>(path: string): T;
};

// This uses Webpack's require.context to automatically discover all components
// based on the directory structure in src/components
export function discoverComponents(): ComponentInfo[] {
	// require.context is a Webpack feature that allows us to get all files matching a pattern
	const componentContext = require.context(
		'../components',
		true,
		/^\.\/\d+_[^/]+\/[A-Z][^/]+\.tsx$/
	);

	const components: ComponentInfo[] = [];
	const componentPaths = componentContext.keys();

	componentPaths.forEach((path) => {
		// Extract directory name from path like "./1_accordion/Accordion.tsx"
		const match = path.match(/^\.\/(\d+)_([^/]+)\//);

		if (match) {
			const id = parseInt(match[1], 10);
			const folderName = match[2];

			// Convert folder name to display name (replace underscores with spaces)
			const name = folderName.replace(/_/g, ' ');

			// Create the route path
			const routePath = `/${id}_${folderName}`;

			components.push({
				id,
				name,
				path: routePath,
			});
		}
	});

	// Sort by id to maintain order
	return components.sort((a, b) => a.id - b.id);
}

// Lazy load component by path
export function loadComponent(componentPath: string) {
	// Extract the folder name from the path (e.g., "/1_accordion" -> "1_accordion")
	const folderName = componentPath.replace('/', '');

	// Extract the number and name parts
	const match = folderName.match(/^(\d+)_(.+)$/);
	if (!match) return null;

	const [, number, name] = match;

	// Convert to PascalCase for component name
	const componentName = name
		.split('_')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join('');

	try {
		// Dynamically import the component
		const module = require<{ default: any }>(`../components/${folderName}/${componentName}.tsx`);
		return module.default;
	} catch (error) {
		console.error(`Failed to load component at ${componentPath}:`, error);
		return null;
	}
}

export const updateHexColor = () => {
	const RGBArray = [];
	for (let i = 0; i < 3; i++) {
		RGBArray.push(Math.floor(Math.random() * 256));
	}
	return `rgb(${RGBArray.join(',')})`;
};

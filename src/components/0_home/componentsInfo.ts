export const componentsInfo = [
	{
		id: 1,
		name: 'accordion',
		path: '/1_accordion',
	},
	{
		id: 2,
		name: 'random color generator',
		path: '/2_random_color_generator',
	},
	{
		id: 3,
		name: 'star rating',
		path: '/3_star_rating',
	},
	{
		id: 4,
		name: 'image slider',
		path: '/4_image_slider',
	},
	{
		id: 5,
		name: 'load more button',
		path: '/5_load_more_button',
	},
	{
		id: 6,
		name: 'recursive navigation menu',
		path: '/6_recursive_navigation_menu',
	},
	{
		id: 7,
		name: 'qr code generator',
		path: '/7_qr_code_generator',
	},
	{
		id: 8,
		name: 'dark mode',
		path: '/8_darkmode',
	},
	{
		id: 9,
		name: 'scroll indicator',
		path: '/9_scroll_indicator',
	},
	{
		id: 10,
		name: 'tabs',
		path: '/10_tabs',
	},
	{
		id: 11,
		name: 'modal',
		path: '/11_modal',
	},
];

export const updateHexColor = () => {
	const RGBArray = [];
	for (let i = 0; i < 3; i++) {
		RGBArray.push(Math.floor(Math.random() * 256));
	}
	return `rgb(${RGBArray.join(',')})`;
};

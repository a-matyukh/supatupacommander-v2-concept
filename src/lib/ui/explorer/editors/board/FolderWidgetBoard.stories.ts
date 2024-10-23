import FolderWidgetBoard from './FolderWidgetBoard.svelte'

export default {
	title: 'Widgets/Board/FolderWidgetBoard',
	component: FolderWidgetBoard,
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: { control: 'color' }
	}
}

export const First = {
	args: {
		name: "My folder",
		rect: [50, 50, 150, 200]
	},
};

export const Second = {
	args: {
		name: "Sketches",
		rect: [50, 50, 150, 200],
		backgroundColor: "#cedba4"
	},
}

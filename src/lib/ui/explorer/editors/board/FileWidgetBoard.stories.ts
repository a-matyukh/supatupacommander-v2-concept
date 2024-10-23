import FileWidgetBoard from './FileWidgetBoard.svelte'

export default {
	title: 'Widgets/Board/FileWidgetBoard',
	component: FileWidgetBoard,
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: { control: 'color' }
	}
}

export const First = {
	args: {
		name: "Readme.md",
		rect: [50, 50, 150, 200]
	},
};

export const Second = {
	args: {
		name: "Life.txt",
		rect: [50, 50, 150, 200],
		backgroundColor: "#cedba4"
	},
}

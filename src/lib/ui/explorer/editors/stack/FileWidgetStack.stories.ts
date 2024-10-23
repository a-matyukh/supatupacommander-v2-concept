import FileWidgetStack from './FileWidgetStack.svelte'

export default {
	title: 'Widgets/Stack/FileWidgetStack',
	component: FileWidgetStack,
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: { control: 'color' }
	}
}

export const First = {
	args: {
		name: "Readme.md",
	},
};

export const Second = {
	args: {
		name: "Life.txt",
		backgroundColor: "#cedba4"
	},
}

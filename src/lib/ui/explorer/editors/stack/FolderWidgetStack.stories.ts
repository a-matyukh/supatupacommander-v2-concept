import FolderWidgetStack from './FolderWidgetStack.svelte'

export default {
	title: 'Widgets/Stack/FolderWidgetStack',
	component: FolderWidgetStack,
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: { control: 'color' }
	}
}

export const First = {
	args: {
		name: "My folder",
	},
};

export const Second = {
	args: {
		name: "Sketches",
		backgroundColor: "#cedba4"
	},
}

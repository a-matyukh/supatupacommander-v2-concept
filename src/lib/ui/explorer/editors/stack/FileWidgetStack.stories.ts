import FileWidgetStack from './FileWidgetStack.svelte'
import { sample_filewidget_1, sample_filewidget_2 } from "$lib/data/sample_data"

export default {
	title: 'Widgets/Stack/FileWidgetStack',
	component: FileWidgetStack,
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: { control: 'color' }
	}
}

export const First = {
	args: sample_filewidget_1
}

export const Second = {
	args: sample_filewidget_2
}

import FolderWidgetStack from './FolderWidgetStack.svelte'
import { sample_folderwidget_1, sample_folderwidget_2 } from "$lib/data/sample_data"

export default {
	title: 'Widgets/Stack/FolderWidgetStack',
	component: FolderWidgetStack,
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: { control: 'color' }
	}
}

export const First = {
	args: sample_folderwidget_1
}

export const Second = {
	args: sample_folderwidget_2
}

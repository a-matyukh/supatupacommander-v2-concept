import FolderWidgetBoard from './FolderWidgetBoard.svelte'
import { sample_folderwidget_1, sample_folderwidget_2 } from "$lib/data/sample_data"

export default {
	title: 'Widgets/Board/FolderWidgetBoard',
	component: FolderWidgetBoard,
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: { control: 'color' }
	}
}

export const without_bg = {
	args: sample_folderwidget_1
}

export const with_bg = {
	args: sample_folderwidget_2
}

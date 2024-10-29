import FileWidgetBoard from './FileWidgetBoard.svelte'
import { sample_filewidget_1, sample_filewidget_2 } from "$lib/data/sample_data"

export default {
	title: 'Widgets/Board/FileWidgetBoard',
	component: FileWidgetBoard,
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: { control: 'color' }
	}
}

export const without_bg = {
	args: sample_filewidget_1
}

export const with_bg = {
	args: sample_filewidget_2
}

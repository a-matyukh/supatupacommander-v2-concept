import NoteWidgetBoard from './NoteWidgetBoard.svelte'
import { sample_notewidget_1, sample_notewidget_2 } from "$lib/data/sample_data"

export default {
    title: 'Widgets/Board/NoteWidgetBoard',
    component: NoteWidgetBoard,
    tags: ['autodocs'],
    argTypes: {
		backgroundColor: { control: 'color' },
    }
}

export const without_bg = {
	args: sample_notewidget_1
}

export const with_bg = {
	args: sample_notewidget_2
}

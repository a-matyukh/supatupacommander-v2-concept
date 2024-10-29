import NoteEditor from './NoteEditor.svelte'
import { sample_notewidget_1, sample_notewidget_2 } from "$lib/data/sample_data"

export default {
    title: 'Editors/NoteEditor',
    component: NoteEditor,
    tags: ['autodocs'],
    argTypes: {
		backgroundColor: { control: 'color' }
    }
}

export const without_bg = {
	args: sample_notewidget_1
}

export const with_bg = {
	args: sample_notewidget_2
}

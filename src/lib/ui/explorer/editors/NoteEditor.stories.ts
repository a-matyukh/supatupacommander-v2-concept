import NoteEditor from './NoteEditor.svelte'
import { selected_widget_note, selected_widget_note_with_bg } from "$lib/data/sample_data"

export default {
    title: 'Editors/NoteEditor',
    component: NoteEditor,
    tags: ['autodocs'],
    argTypes: {
		backgroundColor: { control: 'color' }
    }
}

export const without_bg = {
	args: selected_widget_note
}

export const with_bg = {
	args: selected_widget_note_with_bg
}

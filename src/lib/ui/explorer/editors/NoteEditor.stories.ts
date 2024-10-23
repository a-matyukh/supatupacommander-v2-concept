import NoteEditor from './NoteEditor.svelte'

export default {
    title: 'Editors/NoteEditor',
    component: NoteEditor,
    tags: ['autodocs'],
    argTypes: {
		backgroundColor: { control: 'color' }
    }
}

export const First = {
	args: { text: 'My note 1' }
};

export const Second = {
	args: { text: 'My note 2', backgroundColor: "#cedba4" }
}

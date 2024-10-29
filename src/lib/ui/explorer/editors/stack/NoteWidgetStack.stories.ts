import NoteWidgetStack from './NoteWidgetStack.svelte'
import { sample_notewidget_1, sample_notewidget_2 } from "$lib/data/sample_data"

export default {
    title: 'Widgets/Stack/NoteWidgetStack',
    component: NoteWidgetStack,
    tags: ['autodocs'],
    argTypes: {
		backgroundColor: { control: 'color' },
    }
}

export const First = {
	args: sample_notewidget_1
}

export const Second = {
	args: sample_notewidget_2
}

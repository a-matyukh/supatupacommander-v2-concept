import StackEditor from './StackEditor.svelte'
import { selected_widget } from "$lib/data/sample_data"

export default {
	title: 'Editors/StackEditor',
	component: StackEditor,
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: { control: 'color' }
	}
}

export const First = {
	args: selected_widget
}
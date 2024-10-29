import BoardEditor from './BoardEditor.svelte'
import { selected_widget } from "$lib/data/sample_data"

export default {
	title: 'Editors/BoardEditor',
	component: BoardEditor,
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: { control: 'color' }
	}
}

export const First = {
	args: selected_widget
}
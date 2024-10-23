import StackEditor from './StackEditor.svelte'

export default {
	title: 'Editors/StackEditor',
	component: StackEditor,
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: { control: 'color' }
	}
}

export const First = {
	args: {
		name: "Ideas",
		backgroundColor: "#cedba4",
		children: [
		{
			type: "file",
			name: "Readme.md",
			rect: [70, 170, 150, 120]
		},
		{
			type: "file",
			name: "Life.txt",
			rect: [50, 50, 150, 100],
			backgroundColor: "#cedba4"
		},
		{
			type: "folder",
			name: "My folder",
			rect: [250, 250, 150, 200],
			backgroundColor: "#cedba4"
		},
		{
			type: "folder",
			name: "Sketches",
			rect: [350, 150, 150, 200],
		},
		{ type: "note", text: 'My note 1', rect: [350, 50, 150, 200] },
		{ type: "note", text: 'My note 2', rect: [10, 300, 150, 100], backgroundColor: "#cedba4" }
		]
	}
}
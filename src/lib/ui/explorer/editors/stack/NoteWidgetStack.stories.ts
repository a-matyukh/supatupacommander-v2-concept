import NoteWidgetStack from './NoteWidgetStack.svelte'

export default {
    title: 'Widgets/Stack/NoteWidgetStack',
    component: NoteWidgetStack,
    tags: ['autodocs'],
    argTypes: {
      backgroundColor: { control: 'color' },
    }
}

export const First = {
	args: { 
		text: 'My note', 
		rect: [50, 50, 150, 200]
	}
};

export const Second = {
	args: { 
		text: 'My note', 
		rect: [10, 30, 150, 200], 
		backgroundColor: "#cedba4"
	},
}

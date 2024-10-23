<script module>
import { defineMeta } from '@storybook/addon-svelte-csf'
import NoteWidgetBoard from './NoteWidgetBoard.svelte'

const { Story } = defineMeta({
    title: 'Widgets/Board/NoteWidgetBoard',
    component: NoteWidgetBoard,
    tags: ['autodocs'],
    argTypes: {
      backgroundColor: { control: 'color' },
    }
});
</script>

<Story name="Board" args={{ text: 'My note', rect: [50, 50, 150, 200] }} />
<Story name="Board with bg" args={{ text: 'My note', rect: [10, 30, 150, 200], backgroundColor: "#cedba4" }} />
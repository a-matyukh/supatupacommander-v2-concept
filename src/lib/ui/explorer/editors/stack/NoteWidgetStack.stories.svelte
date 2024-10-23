<script module>
import { defineMeta } from '@storybook/addon-svelte-csf'
import NoteWidgetStack from './NoteWidgetStack.svelte'

const { Story } = defineMeta({
    title: 'Widgets/Stack/NoteWidgetStack',
    component: NoteWidgetStack,
    tags: ['autodocs'],
    argTypes: {
      backgroundColor: { control: 'color' },
    }
});
</script>

<Story name="Stack" args={{ text: 'My note' }} />
<Story name="Stack with bg" args={{ text: 'My note', backgroundColor: "#cedba4" }} />
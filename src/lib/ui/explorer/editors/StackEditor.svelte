<div>
    {#each children as widget}
        <!-- svelte-ignore svelte_component_deprecated -->
        <svelte:component this={options[widget.type]} {...widget} />
    {/each}
</div>


<style>
div {
    display: grid;
    gap: 2px;
    background-color: #f5f5f5;
}
</style>
<script lang="ts">
import FileWidgetStack from './stack/FileWidgetStack.svelte'
import FolderWidgetStack from './stack/FolderWidgetStack.svelte'
import NoteWidgetStack from './stack/NoteWidgetStack.svelte'

const options = {
    "file": FileWidgetStack,
    "folder": FolderWidgetStack,
    "note": NoteWidgetStack,
}

interface Props {
	backgroundColor?: string
    children: object[]
}
const { backgroundColor, children }: Props = $props()
</script>
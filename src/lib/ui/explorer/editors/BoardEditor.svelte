<div style:background-color={backgroundColor}>
    {#each children as widget}
        <!-- svelte-ignore svelte_component_deprecated -->
        <svelte:component this={options[widget.type]} {...widget} />
    {/each}
</div>


<style>
div {
    position: relative;
    height: 100%;
}
</style>
<script lang="ts">
import FileWidgetBoard from './board/FileWidgetBoard.svelte'
import FolderWidgetBoard from './board/FolderWidgetBoard.svelte'
import NoteWidgetBoard from './board/NoteWidgetBoard.svelte'

const options = {
    "file": FileWidgetBoard,
    "folder": FolderWidgetBoard,
    "note": NoteWidgetBoard,
}

interface Props {
	backgroundColor?: string
    children: object[]
}
const { backgroundColor, children }: Props = $props()
</script>
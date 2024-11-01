<Folder {name} children={tree} expanded />

<script>
import Folder from './Folder.svelte'
let {name, tree} = $props()
</script>
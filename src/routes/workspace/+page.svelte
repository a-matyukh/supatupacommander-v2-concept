<div>
    <Workspace selected_workspace={workspaces[0]} />
</div>

<style>
div {
    height: 100vh;
}
</style>
<script>
import Workspace from "$lib/ui/workspace/Workspace.svelte"
import { workspaces } from '$lib/data/sample_data'
</script>
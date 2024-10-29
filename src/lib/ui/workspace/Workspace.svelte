<section>
    <!-- SelectedWorkspace -->
    <main>
        <Explorer {storage_name} {breadcrumbs} {storage_tree} {selected_widget} />
    </main>
    <!-- WorkspaceManager -->
    <footer>
        <button class="selected">Working</button>
        <button>My tools</button>
        <button>Music</button>
        <button>+ Add workspace</button>
    </footer>
</section>


<style>
section {
    height: 100%;
    display: grid;
    grid-template-rows: auto 30px;
    background-color: gray;
}
button {
    border: none;
    color: white;
    padding: 7px;
    background-color: #02233f;
}
button.selected {
    background-color: #033865;
}
footer {
    background-color: #02233f;
}
</style>
<script>
import Explorer from "../explorer/Explorer.svelte"
import { storage_name, storage_tree, breadcrumbs, selected_widget } from '$lib/data/sample_data'
</script>
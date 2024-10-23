<section>
    <!-- SelectedWorkspace -->
    <main>
        <Explorer />
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
    /* padding: 5px; */
    background-color: #02233f;
}

main {
    /* height: calc(100vh - 60px); */
    /* overflow: auto; */
    background-color: bisque;
}
</style>
<script>
import Explorer from "../explorer/Explorer.svelte"
</script>
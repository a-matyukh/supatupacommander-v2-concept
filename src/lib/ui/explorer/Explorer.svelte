<section>
    <main>
        {#if isNavOpen}
            <PaneGroup direction="horizontal">
                <Pane defaultSize={20} minSize={15} maxSize={60}>
                    <nav>
                        <StorageTree name={storage_name} tree={storage_tree} />
                    </nav>
                </Pane>
                <PaneResizer>
                    <div></div>
                </PaneResizer>
                <Pane defaultSize={80}>
                    <article>
                        <BoardEditor {...selected_widget} />
                    </article>
                </Pane>
            </PaneGroup>
        {:else}
            <article>
                <BoardEditor {...selected_widget} />
            </article>
        {/if}
    </main>
    <footer>
        <NavToggler nav_enabled={isNavOpen} ontoggle={() => isNavOpen = !isNavOpen} />
        <p>
            {#each breadcrumbs as crumb}
                <span>{crumb}</span>
            {/each}
        </p>
    </footer>
</section>


<style>
section {
    height: 100%;
    display: grid;
    grid-template-rows: auto 50px;
    background-color: #f5f5f5;
}
footer {
    display: flex;
    place-items: center;
    gap: 20px;
    padding: 12px;
    border-top: 1px solid #e6e6e6;
}
footer span:not(:last-child):after {
    content: "/";
    margin: 10px;
    opacity: .3;
}
div {
    width: 5px;
    height: 100%;
    background-color: #f5f5f5;
    border-right: 1px solid #e6e6e6;
}
div:hover {
    background-color: #2182F8;
}

nav, article {
    height: 100%;
    overflow: auto;
}
nav {
    padding: 12px;
}
article {
    background-color: blueviolet;
}
</style>
<script>
import { PaneGroup, Pane, PaneResizer } from "paneforge"

import NavToggler from './NavToggler.svelte'
import StorageTree from "./tree/StorageTree.svelte"
import BoardEditor from './editors/BoardEditor.svelte'

let isNavOpen = $state(true)
const { storage_name, storage_tree, breadcrumbs, selected_widget } = $props()
</script>
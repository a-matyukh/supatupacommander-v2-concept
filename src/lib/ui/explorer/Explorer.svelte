<section>
    <header>
        <NavToggler nav_enabled={isNavOpen} ontoggle={() => isNavOpen = !isNavOpen} />
        <span>Working <em>/</em> Sketches</span>
    </header>
    <main>
        {#if isNavOpen}
            <PaneGroup direction="horizontal">
                <Pane defaultSize={20} minSize={15} maxSize={60}>
                    <nav>
                        <StorageTree tree={files} />
                    </nav>
                </Pane>
                <PaneResizer>
                    <div></div>
                </PaneResizer>
                <Pane defaultSize={80}>
                    <article>
                        <BoardEditor {...sample_board} />
                    </article>
                </Pane>
            </PaneGroup>
        {:else}
            <article>
                <BoardEditor {...sample_board} />
            </article>
        {/if}
    </main>
</section>


<style>
section {
    height: 100%;
    display: grid;
    grid-template-rows: 50px auto;
    background-color: #f5f5f5;
}
header {
    display: flex;
    place-items: center;
    gap: 20px;
    padding: 12px;
    /* background-color: #fff; */
    border-bottom: 1px solid #e6e6e6;
}
em {
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
    /* height: calc(100% - 60px); */
    height: 100%;
    overflow: auto;
}
nav {
    padding: 12px;
    /* background-color: white; */
}
article {
    background-color: blueviolet;
}
</style>
<script>
import { PaneGroup, Pane, PaneResizer } from "paneforge"

import NavToggler from './NavToggler.svelte'
import StorageTree from "./tree/StorageTree.svelte"
import { files } from './tree/data'
import BoardEditor from './editors/BoardEditor.svelte'
const sample_board = {
    name: "Ideas",
    backgroundColor: "white",
    children: [
    {
        type: "file",
        name: "README.md",
        rect: [570, 70, 150, 190]
    },
    {
        type: "file",
        name: "Life.txt",
        rect: [30, 20, 120, 100],
        backgroundColor: "#b1a4db"
    },
    {
        type: "folder",
        name: "Sketches",
        rect: [250, 250, 150, 200]
    },
    {
        type: "folder",
        name: "My opuses",
        rect: [350, 110, 150, 200],
        backgroundColor: "#cedba4"
    },
    { type: "note", text: 'My brilliant poems', rect: [190, 50, 190, 100] },
    { type: "note", text: 'So cool file manager 🤩', rect: [50, 200, 150, 100], backgroundColor: "#a4cedb" }
    ]
}

let isNavOpen = true
</script>
<script>
import FolderIcon from "carbon-icons-svelte/lib/Folder.svelte"
import FolderDetails from "carbon-icons-svelte/lib/FolderDetails.svelte"
import File from './FileTreeItem.svelte'

export let expanded = false
export let name
export let children

function toggle() {
	expanded = !expanded
}
</script>

<button class:expanded on:click={toggle}>
	{#if expanded}
		<FolderDetails />
	{:else}
		<FolderIcon />
	{/if}
	{name}
</button>

{#if expanded}
	<ul>
		{#each children as file}
			<li>
				{#if file.children}
					<svelte:self {...file} />
				{:else}
					<File {...file} />
				{/if}
			</li>
		{/each}
	</ul>
{/if}

<style>
button {
	display: flex;
	gap: 5px;
	place-items: center;
	padding: 5px;
	/* background: url(/icons/folder.svg) 0 0.1em no-repeat; */
	/* background-size: 1em 1em; */
	/* color: var(--fg-1); */
	/* font-size: medium; */
	/* font-weight: bold; */
	cursor: pointer;
	border: none;
	margin: 0;
	background-color: inherit;
}

.expanded {
	/* background-image: url(/icons/folder-open.svg); */
}

ul {
	padding: 0.2em 0 0 0.7em;
	margin: 0 0 0 0.3em;
	list-style: none;
	/* border-left: 1px solid rgba(128, 128, 128, 0.4); */
	border-left: 1px dashed #ccc;
	/* border-collapse: separate; */
	/* border-spacing: 15px 50px; */
}

li {
	padding: 0.2em 0;
}
</style>

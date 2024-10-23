<script>
import DocumentBlank from "carbon-icons-svelte/lib/DocumentBlank.svelte"
import TextScale from "carbon-icons-svelte/lib/TextScale.svelte"
export let name;
$: type = name.slice(name.lastIndexOf('.') + 1);
</script>

<span>
	{#if type === "note"}
		<TextScale/> {name.split(".")[0]}
	{:else}
		<DocumentBlank /> {name}
	{/if}
</span>

<style>
span {
	display: flex;
	gap: 5px;
	place-items: center;
	font-size: 14px;
	padding: 5px 0 0 0.3em;
	background: 0 0.1em no-repeat;
	background-size: 1em 1em;
}
</style>

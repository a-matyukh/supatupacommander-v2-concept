<script lang="ts">
interface Props {
	name?: string
	text: string
	backgroundColor?: string
}
let {name, text, backgroundColor}: Props = $props()
</script>

<main>
    <header>
        <h3>{name ? name : "Note editor"}</h3>
        <button>Save</button>
    </header>
    <hr>
    <article style="background-color: {backgroundColor};">
        {text}
    </article>
</main>

<style>
article {
    padding: 20px;
}
</style>
<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<img src="/nav-toggler.svg" onclick={ontoggle} alt="{nav_enabled ? "Hide": "Show"} navigation">

<style>
img {
	height: 25px;
	cursor: pointer;
}
img:hover {
	opacity: .5;
}
</style>

<script lang="ts">
let {nav_enabled, ontoggle} = $props()
</script>
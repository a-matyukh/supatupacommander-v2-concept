<script lang="ts">

interface Props {
	name: string
	backgroundColor?: string
}
  
const { name, backgroundColor }: Props = $props()
</script>

<div style:background-color={backgroundColor}>
	{name}
</div>

<style>
div {
	padding: 20px;
}
</style>
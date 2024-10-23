<script lang="ts">

interface Props {
	text: string
	backgroundColor?: string
}
  
const { text, backgroundColor }: Props = $props()
</script>

<div style:background-color={backgroundColor}>
	{text}
</div>

<style>
div {
	padding: 20px;
}
</style>
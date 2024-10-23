<script lang="ts">

interface Props {
	text: string
	rect: number[]
	backgroundColor?: string
}
  
const { text, rect, backgroundColor }: Props = $props()
</script>

<div
	style={`width: ${rect[2]}px; height: ${rect[3]}px; top: ${rect[1]}px; left: ${rect[0]}px`}
	style:background-color={backgroundColor}
>
	{text}
</div>

<style>
div {
	position: absolute;
	box-sizing: border-box;
	padding: 10px;
}
</style>
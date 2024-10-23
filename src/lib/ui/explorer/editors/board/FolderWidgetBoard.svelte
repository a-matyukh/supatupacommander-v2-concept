<script lang="ts">

interface Props {
	name: string
	rect: number[]
	backgroundColor?: string
}
  
const { name, rect, backgroundColor }: Props = $props()
</script>

<div
	style={`width: ${rect[2]}px; height: ${rect[3]}px; top: ${rect[1]}px; left: ${rect[0]}px;`}
	style:background-color={backgroundColor}
	style:border={backgroundColor ? "none" : "1px solid #ccc"}
>
	{name}
</div>

<style>
div {
	position: absolute;
	box-sizing: border-box;
	display: grid;
	place-items: center;
	padding: 10px;
	border-radius: 5px;
}
p {
	opacity: .3;
}
</style>
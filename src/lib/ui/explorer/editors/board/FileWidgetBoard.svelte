<script lang="ts">

interface Props {
	name: string
	rect: number[]
	backgroundColor?: string
}
  
const { name, rect, backgroundColor }: Props = $props()
let type = name.slice(name.lastIndexOf('.') + 1)
</script>

<div
	style={`width: ${rect[2]}px; height: ${rect[3]}px; top: ${rect[1]}px; left: ${rect[0]}px;`}
	style:background-color={backgroundColor}
>
	{name.split(".")[0]}
	<span class="ribbon">{type}</span>
</div>

<style>
div {
	position: absolute;
	box-sizing: border-box;
	padding: 10px;
	border: 3px solid rgba(0, 0, 0, .1);
}
.ribbon {
	position:absolute;
	top:0;
	right:0;
	padding: 5px;
	opacity: .3;
}
</style>
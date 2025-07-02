<script lang="ts">
	let { title, bg, logo, gameUrl, startRow, spanRow, startCol, spanCol } = $props();
</script>

<a href={gameUrl} target="_blank" aria-label={title} class="group relative row-start-{startRow} row-span-{spanRow} col-start-{startCol} col-span-{spanCol}">
    <enhanced:img src={bg} alt="game wallpaper" />
    <div class="flex items-center absolute w-full h-full top-0 left-0 opacity-0 bg-black/40 duration-600 group-hover:opacity-100 z-1">
        <enhanced:img src={logo} alt="game logo" class="w-1/2 mx-auto" />
    </div>
</a>
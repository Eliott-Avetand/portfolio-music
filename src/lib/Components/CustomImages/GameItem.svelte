<script lang="ts">
	let { title, bg, logo, gameUrl, startRow, endRow, startCol, endCol } = $props();
</script>

<a href={gameUrl} target="_blank" aria-label={title} class="my-1 md:my-0 group relative row-start-{startRow} row-end-{endRow} col-start-{startCol} col-end-{endCol}">
    <enhanced:img src={bg} alt="game wallpaper" class="w-full h-50 md:h-full object-cover object-top" />
    <div class="flex items-center absolute w-full h-full top-0 left-0 opacity-0 bg-black/40 duration-600 group-hover:opacity-100 z-1">
        <enhanced:img src={logo} alt="game logo" class="w-1/2 mx-auto" />
    </div>
</a>

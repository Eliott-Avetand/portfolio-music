<script lang="ts">
    let menuOpen = $state(false);

    const handleAnchorClick = (event: MouseEvent) => {
		event.preventDefault()
		const link = event.currentTarget as HTMLLinkElement
		const anchorId = new URL(link?.href).hash.replace('#', '')
		const anchor = document.getElementById(anchorId)
		window.scrollTo({
			top: anchor?.offsetTop,
			behavior: 'smooth'
		})
	}

    const toggleMenu = () => {
        menuOpen = !menuOpen
    }
</script>

<div>
    <button aria-label="burgerMenu" class="fixed top-5 right-5 md:hidden flex flex-col gap-1 cursor-pointer z-[100]" onclick={toggleMenu}>
        <span class="burgerLine" class:rotate-45={menuOpen} class:translate-y-1.5={menuOpen}></span>
        <span class="burgerLine" class:opacity-0={menuOpen}></span>
        <span class="burgerLine" class:-rotate-45={menuOpen} class:-translate-y-1.5={menuOpen}></span>
    </button>

    {#if menuOpen}
        <div class:opacity-100={menuOpen} class="fixed inset-0 opacity-0 bg-primary/90 text-white flex flex-col items-center justify-center gap-6 z-40 transition-opacity duration-500)">
            <a href="#home" onclick={(e) => { handleAnchorClick(e); toggleMenu(); }}>Home</a>
            <a href="#about" onclick={(e) => { handleAnchorClick(e); toggleMenu(); }}>About Me</a>
            <a href="#music" onclick={(e) => { handleAnchorClick(e); toggleMenu(); }}>Music</a>
            <a href="#games" onclick={(e) => { handleAnchorClick(e); toggleMenu(); }}>Games</a>
            <input type="button" value="Contact" class="bg-accent px-4 py-2 rounded" />
        </div>
    {/if}
</div>

<style>
    @reference "../../../app.css";

    .burgerLine {
		@apply bg-light h-[2px] w-6 transition-all duration-300 ease-in-out;
	}
</style>
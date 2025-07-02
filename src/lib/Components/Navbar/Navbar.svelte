<script lang='ts'>
    let current = $state("home")

    const handleAnchorClick = (event: MouseEvent, currentElement: string) => {
        current = currentElement

		event.preventDefault()
		const link = event.currentTarget as HTMLLinkElement
		const anchorId = new URL(link?.href).hash.replace('#', '')
		const anchor = document.getElementById(anchorId)
		window.scrollTo({
			top: anchor?.offsetTop,
			behavior: 'smooth'
		})
	}
</script>

<div class='fixed w-full text-white flex justify-between items-center px-10'>
    <enhanced:img src="$lib/Img/logo.png" alt="Eliott Avetand" class="w-16 select-none pointer-events-none" />
    <nav>
        <a href="#home" class='link' class:active={current === 'home'} onclick={(event: MouseEvent) => handleAnchorClick(event, 'home')}>Home</a>
        <a href="#about" class='link' class:active={current === 'about'} onclick={(event: MouseEvent) => handleAnchorClick(event, 'about')}>About Me</a>
        <a href="#music" class='link' class:active={current === 'music'} onclick={(event: MouseEvent) => handleAnchorClick(event, 'music')}>Music</a>
        <a href="#games" class='link' class:active={current === 'games'} onclick={(event: MouseEvent) => handleAnchorClick(event, 'games')}>Games</a>
    </nav>
    <input type="button" value="Contact" class='bg-accent px-2 py-1 rounded-sm cursor-pointer'>
</div>

<style>
    @reference "../../../app.css";

    .link {
        position: relative;
        @apply mx-5 pb-1;
    }

    .link:hover::after {
        left: 0;
        width: 100%;
    }

    .link::after {
        transition: all .3s;
        content: '';
        width: 0;
        height: 1px;
        position: absolute;
        right: 0;
        bottom: 0;
        @apply bg-accent;
    }

    .active {
        text-shadow: 0px 0px 10px #CECECE;
    }

    .active::after {
        left: 0;
        width: 100%;
    }
</style>
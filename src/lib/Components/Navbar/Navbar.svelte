<script lang='ts'>
    import { onMount, onDestroy } from "svelte";

    let current = $state("home");
    let passedAnchor = $state(false);

    onMount(() => {
        const target = document.querySelector("#home");
        if (!target) return;

        const observer = new IntersectionObserver((entries) => {
            for (const entry of entries)
                passedAnchor = !entry.isIntersecting
        }, { threshold: 0.1 });

        observer.observe(target);

        onDestroy(() => {
            observer.disconnect();
        })
    })

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

<div class={['hidden md:flex fixed w-full text-white flex justify-between items-center px-10 py-2 z-100 duration-300', passedAnchor && 'bg-black/80']}>
    <enhanced:img src="$lib/Img/logo.png" alt="Eliott Avetand" class="select-none pointer-events-none w-10" />
    <nav class="">
        <a href="#home" class='link' class:active={current === 'home'} onclick={(event: MouseEvent) => handleAnchorClick(event, 'home')}>Home</a>
        <a href="#about" class='link' class:active={current === 'about'} onclick={(event: MouseEvent) => handleAnchorClick(event, 'about')}>About Me</a>
        <a href="#music" class='link' class:active={current === 'music'} onclick={(event: MouseEvent) => handleAnchorClick(event, 'music')}>Music</a>
        <a href="#games" class='link' class:active={current === 'games'} onclick={(event: MouseEvent) => handleAnchorClick(event, 'games')}>Games</a>
    </nav>
    <a href="mailto:soryoz03@gmail.com" class='bg-accent px-2 py-1 rounded-sm cursor-pointer'>Contact</a>
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
<script lang="ts">
	import '../app.css';
    import { onDestroy, onMount } from "svelte";
    import Navbar from '$lib/Components/Navbar/Navbar.svelte';
    import Footer from '$lib/Components/Footer/Footer.svelte';
    import Landing from '$lib/Components/Landing/Landing.svelte';

	let { children } = $props();
    let showLanding = $state(false)
    let startFadeOut = $state(false)

    onMount(() => {
        const alreadyVisited = localStorage.getItem('visited');

		if (!alreadyVisited) {
			showLanding = true;
			localStorage.setItem('visited', 'true');

            const fadeTimeout = setTimeout(async () => {
				startFadeOut = true;
			}, 3000);

			const hideTimeout = setTimeout(async () => {
				showLanding = false;
			}, 4000);

            onDestroy(() => {
                clearTimeout(fadeTimeout);
                clearTimeout(hideTimeout);
            });
		} else 
            startFadeOut = true
    })

</script>

{#if showLanding}
	<Landing transitionOut={startFadeOut} />
{/if}

{#if startFadeOut}
    <Navbar />

    {@render children()}

    <Footer />
{/if}
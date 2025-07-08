<script>
    import Home from '$lib/Components/Home/home.svelte'
    import About from '$lib/Components/Home/about.svelte'
    import Compositions from '$lib/Components/Home/compositions.svelte';
    import Games from '$lib/Components/Home/games.svelte';
</script>

<div class="bg-primary font-display">
    <Home />
    <About />
    <Compositions />
    <Games />
</div>

<style>
    @reference "../app.css";

    .ink::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1000;
        background: var(--background-image-ink);
        background-size: cover;
        background-position: center;
        @apply w-screen h-screen;
    }
</style>
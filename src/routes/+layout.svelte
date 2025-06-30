<script lang="ts">
	import '../app.css';
    import Navbar from '$lib/Components/Navbar/Navbar.svelte';

	let { children } = $props();
</script>

<Navbar />

{@render children()}

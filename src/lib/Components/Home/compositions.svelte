<script>
    import SectionTitle from "../Text/SectionTitle.svelte";
    import CompositionItem from "../CustomImages/CompositionItem.svelte";

    import Composition1 from "$lib/Img/composition_1.png?enhanced";
    import Composition2 from "$lib/Img/composition_2.png?enhanced";
    import Composition3 from "$lib/Img/composition_3.png?enhanced";
    import Composition4 from "$lib/Img/composition_4.png?enhanced";
    import Composition5 from "$lib/Img/composition_5.png?enhanced";
    import Composition6 from "$lib/Img/composition_6.png?enhanced";
</script>

<div id="music" class="px-5 md:px-10 lg:px-20 py-4 md:py-6 lg:py-10 flex flex-col items-center">
    <SectionTitle title="Compositions" description="All of my works" />
    <div class="flex flex-wrap justify-center">
        <!-- <CompositionItem imgSrc={Composition1} title="Principles of Strings" spotify="https://spotify.com" /> -->
        <h6 class="text-light my-20 text-sm md:text-lg">My work is coming very soon !</h6>
    </div>
    <!-- <a class="bg-accent text-light text-sm md:text-base px-4 py-2 rounded" href="https://spotify.com" target="_blank">Listen to more of my work</a> -->
    <iframe class="my-5 md:my-10" title="spotify playlist" style="border-radius:12px" src="https://open.spotify.com/embed/playlist/1KtGwl4817byk7b4d7iO12?utm_source=generator&theme=0" width="100%" height="500" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
</div>
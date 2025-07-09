<script>
    import SectionTitle from "../Text/SectionTitle.svelte";
    import GameItem from "../CustomImages/GameItem.svelte";

    import genshin from "$lib/Img/genshin.png?enhanced";
    import genshinLogo from "$lib/Img/genshin_logo.png?enhanced";
    import hades from "$lib/Img/Hades.png?enhanced";
    import hadesLogo from "$lib/Img/Hades_logo.png?enhanced";
    import lol from "$lib/Img/lol.png?enhanced";
    import lolLogo from "$lib/Img/lol_logo.png?enhanced";
    import hk from "$lib/Img/hk.png?enhanced";
    import hkLogo from "$lib/Img/hk_logo.webp?enhanced";
</script>

<div id="games" class="px-5 md:px-10 lg:px-20 py-5 md:py-5">
    <SectionTitle title="Games" description="Games and media where my music comes to life." />

    <h6 class="text-light text-center my-20 text-sm md:text-lg">Stay tuned to see where my work will appear!</h6>
    <!-- <div class="flex flex-col md:grid grid-cols-5 gap-1 md:gap-2 lg:gap-5 mt-5 md:mt-5 mx-auto w-3/4 max-w-[1500px]">
        <GameItem title="Genshin" bg={genshin} logo={genshinLogo} gameUrl="https://genshin.hoyoverse.com/fr/home" startRow={1} startCol={1} endRow={3} endCol={3} />
    </div> -->
</div>
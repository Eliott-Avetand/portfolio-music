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
    import hkLogo from "$lib/Img/hk_logo.png?enhanced";
</script>

<div id="games">
    <SectionTitle title="Games" description="Games and media where my music comes to life." />

    <div class="grid grid-cols-4 gap-5 px-10">
        <GameItem title="Genshin" bg={genshin} logo={genshinLogo} gameUrl="https://genshin.hoyoverse.com/fr/home" startRow={0} startCol={0} spanRow={2} spanCol={2} />
        <GameItem title="League of Legends" bg={lol} logo={lolLogo} gameUrl="https://www.leagueoflegends.com/fr-fr/" startRow={0} startCol={2} spanRow={1} spanCol={2} />
        <GameItem title="Hades" bg={hades} logo={hadesLogo} gameUrl="https://store.steampowered.com/app/1145360/Hades/" startRow={0} startCol={4} spanRow={3} spanCol={1} />
        <GameItem title="Hollow Knight" bg={hk} logo={hkLogo} gameUrl="https://store.steampowered.com/app/367520/Hollow_Knight/" startRow={1} startCol={2} spanRow={2} spanCol={2} />
    </div>
</div>
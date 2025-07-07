<script>
    import SectionTitle from "../Text/SectionTitle.svelte";
</script>

<div id="about" class="p-10 relative">
    <SectionTitle title="About" description="The game's main character!" />

    <div class="flex justify-center items-center z-1 relative">
        <div class="flex flex-col w-[25%]">
            <h6 class="text-light font-semibold text-xl">Eliott AVETAND</h6>
            <div class="flex mt-1">
                {#each {length: 5}}
                <enhanced:img src="$lib/Img/star.png" alt="star" class="w-8" />
                {/each}
            </div>
            <p class="text-light mt-5 tracking-widest font-medium text-lg">
                A self-taught composer passionate about storytelling through music. Drawing inspiration from film, animation, and video games, he craft orchestral and hybrid soundtracks that aim to bring emotion and energy to every scene. With a strong focus on learning and continuous improvement, he’s wants to collaborate on narrative-driven projects and immersive game worlds.
            </p>
        </div>
        <div class="glow h-[80vh] relative">
            <enhanced:img src='$lib/Img/character.png' alt="Eliott Avetand" class="w-full h-full z-1 relative" />
        </div>
    </div>

    <span class="custom-text left-0 top-0">ELIOTT</span>
    <span class="custom-text right-0 bottom-0">AVETAND</span>
</div>

<style>
    @reference "../../../app.css";

    .custom-text {
        position: absolute;
        font-size: 250px;
        z-index: 0;
        color: transparent;
        -webkit-text-stroke: .3px #fff;
    }

    .glow::before {
        content: '';
        position: absolute;
        transform: translate(-10%) rotate(5deg);
        width: 100%;
        height: 100%;
        z-index: 0;
        @apply bg-radial from-(--color-light) to-60%;
    }
</style>
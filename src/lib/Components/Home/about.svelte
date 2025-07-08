<script>
    import SectionTitle from "../Text/SectionTitle.svelte";
</script>

<div id="about" class="p-4 md:p-6 lg:p-10 relative">
    <SectionTitle title="About" description="The game's main character!" />

    <div class="flex flex-col md:flex-row justify-center items-center z-1 relative">
        <div class="flex flex-col w-full md:w-1/2 lg:w-1/4 mt-2">
            <h6 class="text-light text-center md:text-left font-semibold text-lg md:text-xl">Eliott AVETAND</h6>
            <div class="flex justify-center md:justify-start md:mt-1">
                {#each {length: 5}}
                <enhanced:img src="$lib/Img/star.png" alt="star" class="w-5 md:w-8" />
                {/each}
            </div>
            <p class="text-light text-center md:text-left mt-2 md:mt-5 tracking-normal md:tracking-widest font-medium text-sm lg:text-lg">
                A self-taught composer passionate about storytelling through music. Drawing inspiration from film, animation, and video games, he craft orchestral and hybrid soundtracks that aim to bring emotion and energy to every scene. With a strong focus on learning and continuous improvement, he’s wants to collaborate on narrative-driven projects and immersive game worlds.
            </p>
        </div>
        <div class="glow h-[50vh] md:h-[80vh] md relative">
            <enhanced:img src='$lib/Img/character.png' alt="Eliott Avetand" class="w-full h-full z-1 relative" />
        </div>
    </div>

    <span class="custom-text text-9xl lg:text-[250px] left-1/2 top-1/2 md:bottom-0 md:left-0 lg:top-1/4 rotate-90 -translate-x-1/2 md:rotate-0 md:translate-0">ELIOTT</span>
    <span class="hidden lg:block text-[250px] custom-text right-0 bottom-0">AVETAND</span>
</div>

<style>
    @reference "../../../app.css";

    .custom-text {
        position: absolute;
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
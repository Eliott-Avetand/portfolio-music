<script>
    let current = $state("home")
</script>

<div class='fixed w-full text-white flex justify-between items-center px-10'>
    <enhanced:img src="$lib/Img/logo.png" alt="Eliott Avetand" class="w-16" />
    <nav>
        <a href="#home" class='link' class:active={current === 'home'} onclick={() => (current = 'home')}>Home</a>
        <a href="#about" class='link' class:active={current === 'about'} onclick={() => (current = 'about')}>About Me</a>
        <a href="#music" class='link' class:active={current === 'music'} onclick={() => (current = 'music')}>Music</a>
        <a href="#games" class='link' class:active={current === 'games'} onclick={() => (current = 'games')}>Games</a>
    </nav>
    <input type="button" value="contact" class='uppercase bg-primary px-2 py-1 rounded-sm '>
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
        @apply bg-primary;
    }

        .active {
        text-shadow: 0px 0px 10px #CECECE;
    }

    .active::after {
        left: 0;
        width: 100%;
    }
</style>
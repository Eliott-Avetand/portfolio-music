<script lang="ts">
	let { title, description } = $props();
</script>

<div class="text-light font-display flex flex-col items-center">
    <h2 class='flourish'>{title}</h2>
    <i class="not-italic font-light text-center text-xs md:text-sm lg:text-base">{description}</i>
</div>

<style>
    @reference "../../../app.css";

    .flourish {
        position: relative;
        @apply text-xl md:text-2xl lg:text-4xl px-2 md:px-5;
    }

    .flourish::after, .flourish::before {
        content: "";
        position: absolute;
        height: 2px;
        border-top: 5px dotted;
        top: 50%;
        right: 0;
        @apply border-light w-1/4 md:w-1/2 -right-1/4 md:-right-1/2;
    }

    .flourish::after {
        right: 100%;
    }
</style>
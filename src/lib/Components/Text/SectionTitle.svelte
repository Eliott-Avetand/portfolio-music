<script lang="ts">
	let { title, description } = $props();
</script>

<div class="text-light font-display flex flex-col items-center">
    <h2 class='flourish'>{title}</h2>
    <i class="not-italic font-light text-sm">{description}</i>
</div>

<style>
    @reference "../../../app.css";

    .flourish {
        position: relative;
        @apply text-4xl px-5;
    }

    .flourish::after, .flourish::before {
        content: "";
        position: absolute;
        height: 2px;
        border-top: 5px dotted;
        width: 50%;
        top: 50%;
        left: -50%;
        @apply border-light;
    }

    .flourish::after {
        left: 100%;
    }
</style>
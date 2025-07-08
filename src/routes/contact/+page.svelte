<script lang="ts">
    import toast, { Toaster } from 'svelte-5-french-toast';
    import { type errorType } from './contact.type';

    let email = "";
    let object = "";
    let message = "";
    let errors: errorType = { email: "", object: "", message: "" };

    const validate = () => {
        errors = { email: "", object: "", message: "" };
        if (!email) errors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(email)) errors.email = "Email is invalid";
        if (!object) errors.object = "You must specify an object";
        if (!message) errors.message = "There is no message in the email";
    }
    
    const handleSubmit = () => {
        validate();

        const result = Object.entries(errors).find(([_, v]) => v !== "");

        if (result)
            toast.error(result[1]);
        else
            toast.success("Your email has been sent");
    }
</script>

<div class="bg-primary w-screen h-screen">
    <form class="flex flex-col" on:submit|preventDefault={handleSubmit} method="POST" action="?/sendMail">
        <label class="custom-label" for="email">Your email:</label>
        <input class="custom-input" required type='email' bind:value={email} />

        <label class="custom-label" for="object">Object</label>
        <input class="custom-input" required type='text' bind:value={object} />

        <label class="custom-label" for="message">Message</label>
        <textarea class="custom-input" required bind:value={message}></textarea>

        <button type="submit">Send</button>
    </form>
    <Toaster position="bottom-right" />
</div>
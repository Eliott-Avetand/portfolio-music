<script>
	import { Hr, Html, Text } from 'svelte-email';

	let { email, object, message } = $props();
</script>

<Html lang="en">
	<Text>
		Message from, {email}!
	</Text>
	<Hr />
    <Text>{object}</Text>
    <Text>{message}</Text>
</Html>
<script lang="ts">
	import type { PageProps } from './$types';

	let { form }: PageProps = $props();
</script>

<div class="flex h-screen w-screen flex-col items-center p-x">
	<h1>Escape Room</h1>
	<form class="flex h-full flex-col justify-center" method="POST" action="?/login">
		{#if form?.missing}<p class="error">Team Code required</p>{/if}
		{#if form?.incorrect}<p class="error">Invalid credentials!</p>{/if}
		<div class="flex flex-col rounded bg-light-grey p-xs">
			<p>Team Code</p>
			<input type="text" name="team-code" class="input-primary mb-xxs" />
			<p>Access Code</p>
			<input type="text" name="access-code" class="input-primary mb-xxs" />
			<button class="btn-primary">Start</button>
		</div>
	</form>
</div>

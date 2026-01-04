<script lang="ts">
	let { children } = $props();
</script>

<div class="flex h-screen w-screen flex-col">
	<header class="relative flex h-20 items-center justify-center border-b bg-light-grey">
		<div class="flex flex-col items-center p-x">
			<p>Time Remaining:</p>
			<p class="timer-text">23:00:00</p>
		</div>
		<div class="absolute right-0 flex flex-col items-end justify-start p-x">
			<p>Time Code:</p>
			<p class="body-title">ABCDS</p>
		</div>
	</header>
	{@render children?.()}
</div>

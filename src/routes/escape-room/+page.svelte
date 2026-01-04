<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from '../$types';
	import type { RoundData } from '$lib/types';

	const { data } = $props<{ data: PageData }>();

	let rounds: RoundData[] = $state([]);
	let activeRound: RoundData | undefined = $state();
	let finishedRounds: Array<RoundData> = $state([]);

	onMount(async () => {
		rounds = await data.roundJson;
		activeRound = rounds[0];
	});

	$effect(() => {
		finishedRounds = rounds.filter((round) => round.finished === true);
	});
</script>

<div class="flex h-full w-full">
	<div class="relative flex w-full flex-col items-center">
		{#if activeRound}
			<div class="sticky top-0 right-0 w-full bg-white p-x">
				<h1 class="text-left">Round {activeRound!.round}</h1>
			</div>
			<div class="flex w-full flex-col items-center overflow-x-hidden overflow-y-auto p-x">
				<p class="message-hint my-x max-w-100">
					{activeRound!.message}
				</p>
				<!-- svelte-ignore a11y_img_redundant_alt -->
				<img class="max-w-100" alt="clue-image" src={activeRound!.assets[0]} />
				<div class="mt-x w-full">
					<p class="body-title">Tasks:</p>
					<ul class="body ml-x list-decimal">
						{#each activeRound!.tasks as task}
							<li>{task}</li>
						{/each}
					</ul>
					<p class="body-title mt-x">Expected Output Type:</p>
					<p class="body">{activeRound!.expectedOp}</p>
				</div>
				<div class="mt-x flex w-full flex-col items-center rounded bg-light-grey p-x">
					<p class="body">Answer</p>
					<input type="text" class="input-primary" />
					<button
						onclick={() => {
							activeRound!.finished = true;
						}}
						class="btn-primary mt-xs">Submit</button
					>
				</div>
			</div>
		{:else}
			<p>Loading</p>
		{/if}
	</div>
	<div class="w-100 bg-light-grey p-x">
		<button class="btn-secondary">Pamphlet</button>
		<div class="mt-x flex w-full flex-col">
			<p>Finished Rounds</p>
			<div class="mt-xxs grid w-full grid-cols-4 gap-x">
				{#each finishedRounds as round}
					<div class="flex aspect-square items-center justify-center bg-blue-100 p-xxxs">
						{round.round}
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>

<script lang="ts">
	import rounds from '$lib/data/rounds.json';

	type RoundData = {
		round: number;
		title: string;
		message: string;
		img: Array<string>;
		tasks: Array<string>;
		expectedOp: string;
		gameType: string;
	};

	let activeRound: RoundData = rounds[0];
</script>

<div class="flex h-full w-full">
	<div class="relative flex w-full flex-col items-center">
		<div class="sticky top-0 right-0 w-full bg-white p-x">
			<h1 class="text-left">Round {activeRound.round}</h1>
		</div>
		<div class="flex w-full flex-col items-center overflow-x-hidden overflow-y-auto p-x">
			<p class="message-hint my-x max-w-100">
				{activeRound.message}
			</p>
			<!-- svelte-ignore a11y_img_redundant_alt -->
			<img class="max-w-100" alt="clue-image" src={activeRound.img[0]} />
			<div class="mt-x w-full">
				<p class="body-title">Tasks:</p>
				<ul class="body ml-x list-decimal">
					{#each activeRound.tasks as task}
						<li>{task}</li>
					{/each}
				</ul>
				<p class="body-title mt-x">Expected Output Type:</p>
				<p class="body">{activeRound.expectedOp}</p>
			</div>
			<div class="mt-x flex w-full flex-col items-center rounded bg-light-grey p-x">
				<p class="body">Answer</p>
				<input type="text" class="input-primary" />
				<button class="btn-primary mt-xs">Submit</button>
			</div>
		</div>
	</div>
	<div class="w-100 bg-light-grey p-x">
		<button class="btn-secondary">Pamphlet</button>
	</div>
</div>

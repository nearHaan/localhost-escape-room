<div class="flex h-full w-full">
	<div class="relative flex w-full flex-col items-center">
		<div class="sticky top-0 right-0 w-full bg-white p-x">
			<h1 class="text-left">Round 1</h1>
		</div>
		<div class="flex w-full flex-col items-center overflow-x-hidden overflow-y-auto p-x">
			<p class="message-hint my-x max-w-100">
				"Some information is hidden in plain sight. Look carefully at what feels ordinary"
			</p>
			<!-- svelte-ignore a11y_img_redundant_alt -->
			<img class="max-w-100" alt="clue-image" src="/round-img/round-1.png" />
			<div class="mt-x w-full">
				<p class="body-title">Tasks:</p>
				<ul class="body ml-x list-decimal">
					<li>Find all hidden numbers in the image</li>
					<li>Ignore duplicates</li>
					<li>Sort in ascending order</li>
					<li>Concatenate to form one number</li>
				</ul>
				<p class="body-title mt-x">Expected Output Type:</p>
				<p class="body">Number</p>
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

export type RoundData = {
	round: number;
	title: string;
	message: string;
	img: string[];
	tasks: string[];
	expectedOp: string;
	gameType: string;
	finished?: boolean;
	answer?: string;
};

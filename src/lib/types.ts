export type RoundData = {
	round: number;
	title: string;
	message: string;
	assets: string[];
	tasks: string[];
	expectedOp: string;
	gameType: string;
	finished?: boolean;
	answer: string;
	givenAnswer?: string;
};

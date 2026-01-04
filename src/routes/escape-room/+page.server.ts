import type { PageServerLoad } from '../$types';
import roundJson from '$lib/data/rounds.json';
import type { RoundData } from '$lib/types';

export const load: PageServerLoad = () => {
	return { roundJson: roundJson as RoundData[] };
};

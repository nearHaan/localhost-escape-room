import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
	login: async ({ request }) => {
		const data = await request.formData();
		const teamCode = data.get('team-code') as unknown as string;
		const accessCode = data.get('access-code');

		if (teamCode === '' || teamCode === null) {
			return fail(400, { teamCode, missing: true });
		}

		if (teamCode !== 'abcd') {
			return fail(400, { teamCode, incorrect: true });
		}

		if (accessCode !== '123') {
			return fail(400, { teamCode, incorrect: true });
		}

		redirect(303, '/escape-room');
		// return { success: true };
	}
} satisfies Actions;

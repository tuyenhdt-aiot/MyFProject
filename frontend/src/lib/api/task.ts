import { cookies } from 'next/dist/server/request/cookies';

export async function fetchTasks() {
	const cookieStore = cookies();
	const accessToken = (await cookieStore).get('access_token')?.value;
	console.log(accessToken);
	const res = await fetch('http://localhost:3001/tasks', {
		credentials: 'include',
		cache: 'no-store',
	});

	if (!res.ok) {
		if (!res.ok) {
			const errorBody = await res.text(); // chỉ đọc 1 lần
			console.log('Status:', res.status);
			console.log('Body:', errorBody);
			throw new Error(`Failed to fetch tasks: ${errorBody}`);
		}
	}
	const data = await res.json();
	return data.data.res;
}
